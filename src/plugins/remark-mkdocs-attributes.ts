import type { Data, Image, InlineCode, Link, Root, RootContent, Text } from 'mdast';

type Properties = Record<string, unknown>;
type CompatibleNode = RootContent & { data?: Data & { hProperties?: Properties } };
type CompatibleParent = CompatibleNode & { children: RootContent[] };
// Starlight registers `remark-directive` (for its `:::note` / `:::caution` aside
// syntax) as a syntax extension on the shared markdown parser. That extension
// changes how `{...}` is *tokenized* for the whole document (parsing happens
// once, using the union of all registered syntax extensions, independent of
// `.use()` plugin order) — so it also intercepts our legacy MkDocs attr_list
// syntax `{:width="1000px"}`, `{:target="_blank"}` etc., because a `:name`
// immediately inside `{...}` looks like directive attribute shorthand to it.
// The result: instead of one contiguous sibling Text node, we get three
// siblings: Text("{") + textDirective(name="width") + Text('="1000px"}...').
// `consumeAttribute` below handles both this split shape and the plain
// single-text-node shape (used directly by unit tests / any pipeline without
// remark-directive active).
type DirectiveNode = RootContent & { type: 'textDirective'; name: string };

function isDirectiveNode(node: RootContent | undefined): node is DirectiveNode {
  return Boolean(node) && node!.type === 'textDirective';
}

function hasChildren(node: Root | RootContent): node is Root | CompatibleParent {
  return 'children' in node && Array.isArray(node.children);
}

function propertiesFor(node: CompatibleNode): Properties {
  node.data ??= {};
  node.data.hProperties ??= {};
  return node.data.hProperties;
}

function addClass(node: CompatibleNode, className: string): void {
  const properties = propertiesFor(node);
  const existing = properties.className;
  const classes = Array.isArray(existing)
    ? existing.map(String)
    : typeof existing === 'string'
      ? existing.split(/\s+/)
      : [];
  if (!classes.includes(className)) classes.push(className);
  properties.className = classes;
}

function applyImageMode(image: Image): void {
  if (/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(image.url)) return;
  const match = image.url.match(/#only-(light|dark)$/);
  if (!match) return;
  image.url = image.url.slice(0, -match[0].length);
  addClass(image, `img-${match[1]}`);
}

function consumeFollowingText(parent: CompatibleParent, index: number, pattern: RegExp): RegExpMatchArray | undefined {
  const candidate = parent.children[index + 1];
  if (!candidate || candidate.type !== 'text') return undefined;
  const text = candidate as Text;
  const match = text.value.match(pattern);
  if (!match) return undefined;
  text.value = text.value.slice(match[0].length);
  if (!text.value) parent.children.splice(index + 1, 1);
  return match;
}

/**
 * Consumes a `{:name="value"}` (or `{name="value"}`) attribute annotation
 * that immediately follows the node at `index`, tolerating remark-directive
 * having split it into `Text("{") + textDirective(name) + Text('="value"}…')`.
 * Returns the captured value, or `undefined` if no annotation was found.
 */
function consumeAttribute(parent: CompatibleParent, index: number, name: string): string | undefined {
  const direct = consumeFollowingText(
    parent,
    index,
    new RegExp(`^\\s*\\{(?::)?\\s*${name}="([^"]+)"\\s*\\}`),
  );
  if (direct) return direct[1];

  const openBrace = parent.children[index + 1];
  const directive = parent.children[index + 2];
  const rest = parent.children[index + 3];
  if (
    !openBrace || openBrace.type !== 'text' || (openBrace as Text).value.trim() !== '{' ||
    !isDirectiveNode(directive) || directive.name !== name ||
    !rest || rest.type !== 'text'
  ) {
    return undefined;
  }

  const restText = rest as Text;
  const match = restText.value.match(/^="([^"]+)"\s*\}/);
  if (!match) return undefined;

  restText.value = restText.value.slice(match[0].length);
  const removeCount = restText.value ? 2 : 3;
  parent.children.splice(index + 1, removeCount);
  return match[1];
}

function applyWidth(image: Image, width: string): void {
  const properties = propertiesFor(image);
  const normalized = /^\d+$/.test(width) ? `${width}px` : width;
  const existingStyle = typeof properties.style === 'string' ? properties.style.trim() : '';
  properties.style = `${existingStyle}${existingStyle && !existingStyle.endsWith(';') ? ';' : ''}width:${normalized};`;
}

function applyExternalTarget(link: Link): void {
  const properties = propertiesFor(link);
  properties.target = '_blank';
  properties.rel = 'noopener noreferrer';
}

function applyClipboard(inlineCode: InlineCode, clipboardText: string): void {
  const properties = propertiesFor(inlineCode);
  properties['data-clipboard-text'] = clipboardText;
  properties.tabIndex = 0;
  properties.role = 'button';
  properties.title = 'In Zwischenablage kopieren';
  addClass(inlineCode, 'copyable-formula');
}

function processHeadingAttribute(parent: CompatibleParent): void {
  if (parent.type !== 'heading') return;
  const finalChild = parent.children.at(-1);
  if (!finalChild || finalChild.type !== 'text') return;
  const text = finalChild as Text;
  const match = text.value.match(/\s*\{\s*data-toc-label="([^"]+)"\s*\}\s*$/);
  if (!match) return;
  text.value = text.value.slice(0, -match[0].length);
  propertiesFor(parent)['data-toc-label'] = match[1];
}

function processParent(parent: Root | CompatibleParent): void {
  for (let index = 0; index < parent.children.length; index += 1) {
    const child = parent.children[index] as CompatibleNode;
    if (child.type === 'image') applyImageMode(child as Image);
    if (hasChildren(child)) processParent(child);

    if (child.type === 'image') {
      const width = consumeAttribute(parent as CompatibleParent, index, 'width');
      if (width) applyWidth(child as Image, width);
    } else if (child.type === 'link') {
      const target = consumeAttribute(parent as CompatibleParent, index, 'target');
      if (target === '_blank') applyExternalTarget(child as Link);
    } else if (child.type === 'inlineCode') {
      const match = consumeFollowingText(parent as CompatibleParent, index, /^\s*\{\s*data-clipboard-text="([^"]*)"\s*\}/);
      if (match?.[1] !== undefined) applyClipboard(child as InlineCode, match[1]);
    }
  }
  processHeadingAttribute(parent as CompatibleParent);
}

export default function remarkMkDocsAttributes(): (tree: Root) => void {
  return (tree) => processParent(tree);
}

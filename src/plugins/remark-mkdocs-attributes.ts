import type { Data, Image, InlineCode, Link, Root, RootContent, Text } from 'mdast';

type Properties = Record<string, unknown>;
type CompatibleNode = RootContent & { data?: Data & { hProperties?: Properties } };
type CompatibleParent = CompatibleNode & { children: RootContent[] };

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
      const match = consumeFollowingText(parent as CompatibleParent, index, /^\s*\{(?::)?\s*width="([^"]+)"\s*\}/);
      if (match?.[1]) applyWidth(child as Image, match[1]);
    } else if (child.type === 'link') {
      const match = consumeFollowingText(parent as CompatibleParent, index, /^\s*\{(?::)?\s*target="_blank"\s*\}/);
      if (match) applyExternalTarget(child as Link);
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

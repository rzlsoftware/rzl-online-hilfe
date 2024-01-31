import os
import yaml

def get_first_heading(path):
    with open(path, 'r', encoding='utf-8') as file:
        for line in file:
            line = line.strip()
            if line.startswith('# '):
                # Return the first heading, removing '#' and any leading/trailing spaces
                return line[2:].strip()
    return None

def generate_nav_entries_for_directory(directory, root):
    nav_entries = []

    files = os.listdir(directory);
    if 'index.md' in files:
        index = os.path.join(os.path.relpath(directory, root), "index.md");
        nav_entries.append(index)

    for file in sorted(files):
        if file.endswith('.md') and file.lower() != 'index.md':
            file_path = os.path.join(directory, file)
            title = get_first_heading(file_path)
            if not title:
                title = os.path.splitext(file)[0].replace('_', ' ').title()
            nav_entry = {title: os.path.relpath(file_path, root).replace(os.path.sep, '/').replace('.md', '')}
            nav_entries.append(nav_entry)
    return nav_entries

def update_mkdocs_yaml_with_directory_contents():
    with open('mkdocs.yml', 'r') as file:
        mkdocs_config = yaml.safe_load(file)
        
    print(os.getcwd());

    if 'nav' in mkdocs_config:
        updated_nav = []
        for item in mkdocs_config['nav']:
            if isinstance(item, dict):
                for title, path in item.items():
                    if os.path.isdir(path):
                        nav_entries = generate_nav_entries_for_directory(path, os.path.dirname(path))
                        updated_nav.append({title: nav_entries})
                    else:
                        updated_nav.append(item)
            else:
                updated_nav.append(item)

        mkdocs_config['nav'] = updated_nav

        with open('mkdocs.yml', 'w') as file:
            yaml.safe_dump(mkdocs_config, file, default_flow_style=False)

if __name__ == '__main__':
    update_mkdocs_yaml_with_directory_contents()
    print("Updated mkdocs.yml with new navigation.")
#!/usr/bin/env python3
import re, sys, glob, os, yaml

errors = 0

def check_file(path):
    global errors
    with open(path, 'r', encoding='utf-8') as f:
        text = f.read()
    fm = re.match(r'^---\n(.*?)\n---', text, re.DOTALL)
    if not fm:
        print(f"{path}: missing front matter")
        errors += 1
        return
    try:
        meta = yaml.safe_load(fm.group(1))
    except yaml.YAMLError as exc:
        print(f"{path}: YAML error {exc}")
        errors += 1
        return
    if not isinstance(meta, dict):
        print(f"{path}: invalid front matter")
        errors += 1
        return
    deps = meta.get('dependencies', [])
    for dep in deps:
        if not os.path.exists(dep):
            print(f"{path}: dependency {dep} missing")
            errors += 1
        if dep not in text:
            print(f"{path}: does not reference {dep}")
            errors += 1

for doc in glob.glob('*.md'):
    check_file(doc)

if errors:
    sys.exit(1)

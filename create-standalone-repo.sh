#!/bin/bash
# Run this script to copy terumo-europe-demo to a standalone folder and init git.
# Then create a new repo on GitHub and push (see CREATE_STANDALONE_REPO.md).

set -e
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
TARGET="${1:-$HOME/Desktop/terumo-europe-demo}"

echo "Copying terumo-europe-demo to: $TARGET"
mkdir -p "$TARGET"
rsync -av --exclude=node_modules --exclude=build --exclude=.git "$SCRIPT_DIR/" "$TARGET/" 2>/dev/null || {
  cp -R "$SCRIPT_DIR"/* "$TARGET/"
  cp "$SCRIPT_DIR/.gitignore" "$TARGET/" 2>/dev/null || true
  rm -rf "$TARGET/node_modules" "$TARGET/build" 2>/dev/null || true
}

echo "Initializing git and creating initial commit..."
cd "$TARGET"
git init
git add .
git commit -m "Initial commit: Terumo Europe Congress & KOL Intelligence demo"

echo "Done. Next steps:"
echo "  1. Create a new repo on GitHub: https://github.com/new (name: terumo-europe-demo)"
echo "  2. cd $TARGET"
echo "  3. git remote add origin https://github.com/YOUR_USERNAME/terumo-europe-demo.git"
echo "  4. git branch -M main && git push -u origin main"
echo "See CREATE_STANDALONE_REPO.md for full instructions."

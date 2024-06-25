#!/bin/sh

GIT_DIR=$(git rev-parse --git-dir)

echo "Installing hooks..."
cp scripts/pre-push.sh $GIT_DIR/hooks/pre-push
cp scripts/pre-commit.sh $GIT_DIR/hooks/pre-commit

chmod +x $GIT_DIR/hooks/pre-push $GIT_DIR/hooks/pre-commit
echo "Done! "

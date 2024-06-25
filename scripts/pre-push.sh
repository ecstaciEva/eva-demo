#!/bin/bash

status=0
old_stash=$(git rev-parse -q --verify refs/stash)

function git_stash() {
  echo "Stashing changes before running tests..."
  git stash save -q --keep-index

  if [ "$?" != "0" ]
  then
      echo "Stash Failed!"
      exit 1
  else
      echo
      echo "Stash uncommited files."
  fi
}

function git_unstash() {
  new_stash=$(git rev-parse -q --verify refs/stash)
  if [ "$old_stash" != "$new_stash" ]; then
    echo "Restoring stashed changes..."
    git stash pop -q
  fi
  exit ${status}
}

function lint_test() {
  yarn lint
  if [ $? -eq 0 ]
  then
    echo
    echo "Lint Test PASS"
  else
    echo "Lint Test FAIL!"
    status=1
  fi

  return
}

trap git_unstash EXIT

# Stash any uncommitted changes so we are testing the right things  
git_stash

# Test 
lint_test

echo
exit ${status}
#!/bin/bash

status=0
old_stash=$(git rev-parse -q --verify refs/stash)

function git_stash() {
  if [[ -n $(git ls-files --unmerged) ]]; then
    git stash save -q --keep-index
    echo "Stashing changes before running tests..."
  fi

  if [ "$?" != "0" ]
  then
      echo "Stash Failed!"
      exit 1
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

function tsc_check() {
  yarn tsc
  if [ $? -eq 0 ]
  then
    echo
    echo "Typescript check PASS"
  else
    echo "Typescript check FAIL!"
    status=1
  fi

  return
}

trap git_unstash EXIT

# Stash any uncommitted changes so we are testing the right things  
git_stash

# Test 
tsc_check

echo
exit ${status}
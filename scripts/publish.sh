#!/bin/bash
set -e

CURRENT_BRANCH=($(git branch --show-current))

if [ $CURRENT_BRANCH == 'development' ]
then
  lerna publish --conventional-commits --canary --preid beta --dist-tag next --no-git-reset --yes
fi

if [ $CURRENT_BRANCH == 'master' ]
then
  lerna publish --conventional-commits --yes
fi

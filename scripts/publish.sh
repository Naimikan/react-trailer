#!/bin/bash
set -e

CURRENT_BRANCH=($(git branch --show-current))

cp -f ./README.md ./packages/video-player/README.md

if [ $CURRENT_BRANCH == 'development' ]
then
  lerna publish --conventional-commits --canary --preid beta --dist-tag next --yes
fi

if [ $CURRENT_BRANCH == 'master' ]
then
  lerna publish --conventional-commits
fi

# Commit changes of publish
git add .
git commit -am "chore: post-publish"
git push origin $CURRENT_BRANCH

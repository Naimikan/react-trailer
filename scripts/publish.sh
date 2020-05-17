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
  lerna publish --conventional-commits --yes
fi

# Update development with master
if [ $CURRENT_BRANCH == 'master' ]
then
  git checkout development
  git fetch --all
  git reset --hard origin/$CURRENT_BRANCH
  git push
fi

# Update master with development
if [ $CURRENT_BRANCH == 'development' ]
then
  git checkout master
  git fetch --all
  git fetch --all
  git reset --hard origin/$CURRENT_BRANCH
  git push
fi

# Return to the current branch
git checkout $CURRENT_BRANCH
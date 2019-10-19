#!/bin/bash
set -x

rm -rf dist

webpack --config ./webpack.config.js --progress --colors --profile
#!/bin/sh
set -e
plasmode-sdk new sample-module
cd sample-module
plasmode-sdk validate .
plasmode-sdk lint .
plasmode-sdk test .
plasmode-sdk build .
cd ..
rm -rf sample-module

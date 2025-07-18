#!/bin/sh
# SPDX-License-Identifier: Apache-2.0

npm run lint
npm test
npm run test:py
npm run validate:modules

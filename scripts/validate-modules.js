// SPDX-License-Identifier: Apache-2.0
const fs = require('fs');
const path = require('path');

function validateModule(dir) {
  const manifestPath = path.join(dir, 'module.json');
  if (!fs.existsSync(manifestPath)) {
    throw new Error(`Missing module.json in ${dir}`);
  }
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  const required = ['id', 'version', 'name', 'ui', 'logic'];
  required.forEach((key) => {
    if (!(key in manifest)) {
      throw new Error(`Missing ${key} in ${manifestPath}`);
    }
  });
}

const modulesDir = path.resolve(__dirname, '..', 'modules');
fs.readdirSync(modulesDir).forEach((m) => {
  const dir = path.join(modulesDir, m);
  if (fs.statSync(dir).isDirectory()) {
    validateModule(dir);
  }
});
console.log('All modules validated');

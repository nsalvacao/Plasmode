// SPDX-License-Identifier: Apache-2.0
const { start } = require('../../modules/example_module');

test('module starts without errors', () => {
  expect(() => start()).not.toThrow();
});

// Example permission test placeholder
// test('module has no forbidden permissions', () => {
//   const manifest = require('../../modules/example_module/module.json');
//   expect(manifest.permissions).toEqual({});
// });

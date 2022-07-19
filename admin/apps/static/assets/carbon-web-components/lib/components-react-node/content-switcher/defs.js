/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});

var _defs = require('../../components/content-switcher/defs.js');

Object.keys(_defs).forEach(function (key) {
  if (key === 'default' || key === '__esModule') return;
  if (key in exports && exports[key] === _defs[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _defs[key];
    },
  });
});

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
Object.defineProperty(exports, 'CONTENT_SWITCHER_SIZE', {
  enumerable: true,
  get: function () {
    return _defs.CONTENT_SWITCHER_SIZE;
  },
});
Object.defineProperty(exports, 'NAVIGATION_DIRECTION', {
  enumerable: true,
  get: function () {
    return _defs.NAVIGATION_DIRECTION;
  },
});
exports.propTypes = exports.descriptor = exports.default = void 0;

var _defs = require('././defs.js');

var _createReactCustomElementType = _interopRequireDefault(require('../../globals/wrappers/createReactCustomElementType.js'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _settings = _interopRequireDefault(require('carbon-components/umd/globals/js/settings.js'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var prefix = _settings.default.prefix;
var descriptor = {
  value: {},
  size: {},
  onBeforeSelect: {
    event: ''.concat(prefix, '-content-switcher-beingselected'),
  },
  onSelect: {
    event: ''.concat(prefix, '-content-switcher-selected'),
  },
};
exports.descriptor = descriptor;
var propTypes = {
  value: _propTypes.default.string,
  size: _propTypes.default.string,
  onBeforeSelect: _propTypes.default.func,
  onSelect: _propTypes.default.func,
};
exports.propTypes = propTypes;
const Component = (0, _createReactCustomElementType.default)(''.concat(prefix, '-content-switcher'), descriptor);
Component.propTypes = propTypes;
var _default = Component;
exports.default = _default;

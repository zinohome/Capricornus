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
exports.propTypes = exports.descriptor = exports.default = void 0;

var _createReactCustomElementType = _interopRequireDefault(require('../../globals/wrappers/createReactCustomElementType.js'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _settings = _interopRequireDefault(require('carbon-components/umd/globals/js/settings.js'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var prefix = _settings.default.prefix;
var descriptor = {
  menuBarLabel: {
    attribute: 'menu-bar-label',
  },
};
exports.descriptor = descriptor;
var propTypes = {
  menuBarLabel: _propTypes.default.string,
};
exports.propTypes = propTypes;
const Component = (0, _createReactCustomElementType.default)(''.concat(prefix, '-header-nav'), descriptor);
Component.propTypes = propTypes;
var _default = Component;
exports.default = _default;

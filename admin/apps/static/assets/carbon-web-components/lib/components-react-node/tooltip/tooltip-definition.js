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
Object.defineProperty(exports, 'TOOLTIP_ALIGNMENT', {
  enumerable: true,
  get: function () {
    return _defs.TOOLTIP_ALIGNMENT;
  },
});
Object.defineProperty(exports, 'TOOLTIP_DIRECTION', {
  enumerable: true,
  get: function () {
    return _defs.TOOLTIP_DIRECTION;
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
  alignment: {},
  bodyText: {
    attribute: 'body-text',
  },
  direction: {},
};
exports.descriptor = descriptor;
var propTypes = {
  alignment: _propTypes.default.string,
  bodyText: _propTypes.default.string,
  direction: _propTypes.default.string,
};
exports.propTypes = propTypes;
const Component = (0, _createReactCustomElementType.default)(''.concat(prefix, '-tooltip-definition'), descriptor);
Component.propTypes = propTypes;
var _default = Component;
exports.default = _default;

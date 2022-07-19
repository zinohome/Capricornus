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
Object.defineProperty(exports, 'DROPDOWN_COLOR_SCHEME', {
  enumerable: true,
  get: function () {
    return _dropdown.DROPDOWN_COLOR_SCHEME;
  },
});
Object.defineProperty(exports, 'DROPDOWN_SIZE', {
  enumerable: true,
  get: function () {
    return _dropdown.DROPDOWN_SIZE;
  },
});
Object.defineProperty(exports, 'DROPDOWN_TYPE', {
  enumerable: true,
  get: function () {
    return _dropdown.DROPDOWN_TYPE;
  },
});
exports.propTypes = exports.descriptor = exports.default = void 0;

var _dropdown = require('../dropdown/dropdown.js');

var _createReactCustomElementType = _interopRequireDefault(require('../../globals/wrappers/createReactCustomElementType.js'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _settings = _interopRequireDefault(require('carbon-components/umd/globals/js/settings.js'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var prefix = _settings.default.prefix;
var descriptor = Object.assign({}, _dropdown.descriptor, {
  clearSelectionLabel: {
    attribute: 'clear-selection-label',
  },
  inputLabel: {
    attribute: 'input-label',
  },
  itemMatches: {
    attribute: false,
  },
  onBeforeToggle: {
    event: ''.concat(prefix, '-combo-box-beingtoggled'),
  },
  onToggle: {
    event: ''.concat(prefix, '-combo-box-toggled'),
  },
  onBeforeSelect: {
    event: ''.concat(prefix, '-combo-box-beingselected'),
  },
  onSelect: {
    event: ''.concat(prefix, '-combo-box-selected'),
  },
});
exports.descriptor = descriptor;
var propTypes = Object.assign({}, _dropdown.propTypes, {
  clearSelectionLabel: _propTypes.default.string,
  inputLabel: _propTypes.default.string,
  itemMatches: _propTypes.default.string,
  onBeforeToggle: _propTypes.default.func,
  onToggle: _propTypes.default.func,
  onBeforeSelect: _propTypes.default.func,
  onSelect: _propTypes.default.func,
});
exports.propTypes = propTypes;
const Component = (0, _createReactCustomElementType.default)(''.concat(prefix, '-combo-box'), descriptor);
Component.propTypes = propTypes;
var _default = Component;
exports.default = _default;

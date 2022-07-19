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
Object.defineProperty(exports, 'NAVIGATION_DIRECTION', {
  enumerable: true,
  get: function () {
    return _contentSwitcher.NAVIGATION_DIRECTION;
  },
});
Object.defineProperty(exports, 'NAVIGATION_DIRECTION_NARROW', {
  enumerable: true,
  get: function () {
    return _defs.NAVIGATION_DIRECTION_NARROW;
  },
});
Object.defineProperty(exports, 'TABS_COLOR_SCHEME', {
  enumerable: true,
  get: function () {
    return _defs.TABS_COLOR_SCHEME;
  },
});
Object.defineProperty(exports, 'TABS_KEYBOARD_ACTION', {
  enumerable: true,
  get: function () {
    return _defs.TABS_KEYBOARD_ACTION;
  },
});
Object.defineProperty(exports, 'TABS_TYPE', {
  enumerable: true,
  get: function () {
    return _defs.TABS_TYPE;
  },
});
exports.propTypes = exports.descriptor = exports.default = void 0;

var _defs = require('././defs.js');

var _contentSwitcher = require('../content-switcher/content-switcher.js');

var _createReactCustomElementType = _interopRequireDefault(require('../../globals/wrappers/createReactCustomElementType.js'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _settings = _interopRequireDefault(require('carbon-components/umd/globals/js/settings.js'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var prefix = _settings.default.prefix;
var descriptor = Object.assign({}, _contentSwitcher.descriptor, {
  colorScheme: {
    attribute: 'color-scheme',
  },
  selectingItemsAssistiveText: {
    attribute: 'selecting-items-assistive-text',
  },
  selectedItemAssistiveText: {
    attribute: 'selected-item-assistive-text',
  },
  triggerContent: {
    attribute: 'trigger-content',
  },
  type: {},
  onBeforeSelect: {
    event: ''.concat(prefix, '-tabs-beingselected'),
  },
  onSelect: {
    event: ''.concat(prefix, '-tabs-selected'),
  },
});
exports.descriptor = descriptor;
var propTypes = Object.assign({}, _contentSwitcher.propTypes, {
  colorScheme: _propTypes.default.string,
  selectingItemsAssistiveText: _propTypes.default.string,
  selectedItemAssistiveText: _propTypes.default.string,
  triggerContent: _propTypes.default.string,
  type: _propTypes.default.string,
  onBeforeSelect: _propTypes.default.func,
  onSelect: _propTypes.default.func,
});
exports.propTypes = propTypes;
const Component = (0, _createReactCustomElementType.default)(''.concat(prefix, '-tabs'), descriptor);
Component.propTypes = propTypes;
var _default = Component;
exports.default = _default;

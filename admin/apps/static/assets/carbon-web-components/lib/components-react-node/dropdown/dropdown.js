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
    return _defs.DROPDOWN_COLOR_SCHEME;
  },
});
Object.defineProperty(exports, 'DROPDOWN_KEYBOARD_ACTION', {
  enumerable: true,
  get: function () {
    return _defs.DROPDOWN_KEYBOARD_ACTION;
  },
});
Object.defineProperty(exports, 'DROPDOWN_SIZE', {
  enumerable: true,
  get: function () {
    return _defs.DROPDOWN_SIZE;
  },
});
Object.defineProperty(exports, 'DROPDOWN_TYPE', {
  enumerable: true,
  get: function () {
    return _defs.DROPDOWN_TYPE;
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

var _createReactCustomElementType = _interopRequireWildcard(require('../../globals/wrappers/createReactCustomElementType.js'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _settings = _interopRequireDefault(require('carbon-components/umd/globals/js/settings.js'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== 'function') return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function (nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || (typeof obj !== 'object' && typeof obj !== 'function')) {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== 'default' && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}

var prefix = _settings.default.prefix;
var descriptor = {
  colorScheme: {
    attribute: 'color-scheme',
  },
  disabled: {
    serialize: _createReactCustomElementType.booleanSerializer,
  },
  helperText: {
    attribute: 'helper-text',
  },
  invalid: {
    serialize: _createReactCustomElementType.booleanSerializer,
  },
  labelText: {
    attribute: 'label-text',
  },
  name: {},
  open: {
    serialize: _createReactCustomElementType.booleanSerializer,
  },
  required: {
    serialize: _createReactCustomElementType.booleanSerializer,
  },
  requiredValidityMessage: {
    attribute: 'required-validity-message',
  },
  selectingItemsAssistiveText: {
    attribute: 'selecting-items-assistive-text',
  },
  selectedItemAssistiveText: {
    attribute: 'selected-item-assistive-text',
  },
  size: {},
  toggleLabelClosed: {
    attribute: 'toggle-label-closed',
  },
  toggleLabelOpen: {
    attribute: 'toggle-label-open',
  },
  triggerContent: {
    attribute: 'trigger-content',
  },
  type: {},
  validityMessage: {
    attribute: 'validity-message',
  },
  value: {},
  onBeforeSelect: {
    event: ''.concat(prefix, '-dropdown-beingselected'),
  },
  onSelect: {
    event: ''.concat(prefix, '-dropdown-selected'),
  },
  onBeforeToggle: {
    event: ''.concat(prefix, '-dropdown-beingtoggled'),
  },
  onToggle: {
    event: ''.concat(prefix, '-dropdown-toggled'),
  },
};
exports.descriptor = descriptor;
var propTypes = {
  colorScheme: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  helperText: _propTypes.default.string,
  invalid: _propTypes.default.bool,
  labelText: _propTypes.default.string,
  name: _propTypes.default.string,
  open: _propTypes.default.bool,
  required: _propTypes.default.bool,
  requiredValidityMessage: _propTypes.default.string,
  selectingItemsAssistiveText: _propTypes.default.string,
  selectedItemAssistiveText: _propTypes.default.string,
  size: _propTypes.default.string,
  toggleLabelClosed: _propTypes.default.string,
  toggleLabelOpen: _propTypes.default.string,
  triggerContent: _propTypes.default.string,
  type: _propTypes.default.string,
  validityMessage: _propTypes.default.string,
  value: _propTypes.default.string,
  onBeforeSelect: _propTypes.default.func,
  onSelect: _propTypes.default.func,
  onBeforeToggle: _propTypes.default.func,
  onToggle: _propTypes.default.func,
};
exports.propTypes = propTypes;
const Component = (0, _createReactCustomElementType.default)(''.concat(prefix, '-dropdown'), descriptor);
Component.propTypes = propTypes;
var _default = Component;
exports.default = _default;

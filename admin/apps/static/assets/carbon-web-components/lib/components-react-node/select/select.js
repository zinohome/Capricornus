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
Object.defineProperty(exports, 'SELECT_COLOR_SCHEME', {
  enumerable: true,
  get: function () {
    return _sharedEnums.FORM_ELEMENT_COLOR_SCHEME;
  },
});
exports.propTypes = exports.descriptor = exports.default = void 0;

var _sharedEnums = require('../../globals/shared-enums.js');

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
  autofocus: {
    serialize: _createReactCustomElementType.booleanSerializer,
  },
  colorScheme: {
    attribute: 'color-scheme',
  },
  disabled: {
    serialize: _createReactCustomElementType.booleanSerializer,
  },
  helperText: {
    attribute: 'helper-text',
  },
  id: {},
  invalid: {
    serialize: _createReactCustomElementType.booleanSerializer,
  },
  labelText: {
    attribute: 'label-text',
  },
  multiple: {
    serialize: _createReactCustomElementType.booleanSerializer,
  },
  name: {},
  pattern: {},
  placeholder: {},
  readonly: {
    serialize: _createReactCustomElementType.booleanSerializer,
  },
  required: {
    serialize: _createReactCustomElementType.booleanSerializer,
  },
  requiredValidityMessage: {
    attribute: 'required-validity-message',
  },
  selectedIndex: {
    serialize: _createReactCustomElementType.numberSerializer,
  },
  size: {},
  validityMessage: {
    attribute: 'validity-message',
  },
  value: {},
  onSelect: {
    event: ''.concat(prefix, '-select-selected'),
  },
};
exports.descriptor = descriptor;
var propTypes = {
  autofocus: _propTypes.default.bool,
  colorScheme: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  helperText: _propTypes.default.string,
  id: _propTypes.default.string,
  invalid: _propTypes.default.bool,
  labelText: _propTypes.default.string,
  multiple: _propTypes.default.bool,
  name: _propTypes.default.string,
  pattern: _propTypes.default.string,
  placeholder: _propTypes.default.string,
  readonly: _propTypes.default.bool,
  required: _propTypes.default.bool,
  requiredValidityMessage: _propTypes.default.string,
  selectedIndex: _propTypes.default.number,
  size: _propTypes.default.string,
  validityMessage: _propTypes.default.string,
  value: _propTypes.default.string,
  onSelect: _propTypes.default.func,
};
exports.propTypes = propTypes;
const Component = (0, _createReactCustomElementType.default)(''.concat(prefix, '-select'), descriptor);
Component.propTypes = propTypes;
var _default = Component;
exports.default = _default;

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
Object.defineProperty(exports, 'NUMBER_INPUT_COLOR_SCHEME', {
  enumerable: true,
  get: function () {
    return _defs.NUMBER_INPUT_COLOR_SCHEME;
  },
});
Object.defineProperty(exports, 'NUMBER_INPUT_VALIDATION_STATUS', {
  enumerable: true,
  get: function () {
    return _defs.NUMBER_INPUT_VALIDATION_STATUS;
  },
});
exports.propTypes = exports.descriptor = exports.default = void 0;

var _defs = require('././defs.js');

var _input = require('../input/input.js');

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
var descriptor = Object.assign({}, _input.descriptor, {
  colorScheme: {
    attribute: 'color-scheme',
  },
  min: {},
  max: {},
  step: {},
  mobile: {
    serialize: _createReactCustomElementType.booleanSerializer,
  },
  incrementButtonAssistiveText: {
    attribute: 'increment-button-assistive-text',
  },
  decrementButtonAssistiveText: {
    attribute: 'decrement-button-assistive-text',
  },
  size: {},
  validityMessageMax: {
    attribute: 'validity-message-max',
  },
  validityMessageMin: {
    attribute: 'validity-message-min',
  },
  onInput: {
    event: ''.concat(prefix, '-number-input'),
  },
});
exports.descriptor = descriptor;
var propTypes = Object.assign({}, _input.propTypes, {
  colorScheme: _propTypes.default.string,
  min: _propTypes.default.string,
  max: _propTypes.default.string,
  step: _propTypes.default.string,
  mobile: _propTypes.default.bool,
  incrementButtonAssistiveText: _propTypes.default.string,
  decrementButtonAssistiveText: _propTypes.default.string,
  size: _propTypes.default.string,
  validityMessageMax: _propTypes.default.string,
  validityMessageMin: _propTypes.default.string,
  onInput: _propTypes.default.func,
});
exports.propTypes = propTypes;
const Component = (0, _createReactCustomElementType.default)(''.concat(prefix, '-number-input'), descriptor);
Component.propTypes = propTypes;
var _default = Component;
exports.default = _default;

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
Object.defineProperty(exports, 'SLIDER_INPUT_COLOR_SCHEME', {
  enumerable: true,
  get: function () {
    return _defs.SLIDER_INPUT_COLOR_SCHEME;
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
  max: {
    serialize: _createReactCustomElementType.numberSerializer,
  },
  min: {
    serialize: _createReactCustomElementType.numberSerializer,
  },
  step: {
    serialize: _createReactCustomElementType.numberSerializer,
  },
  type: {},
  value: {
    serialize: _createReactCustomElementType.numberSerializer,
  },
  onChange: {
    event: ''.concat(prefix, '-slider-input-changed'),
  },
};
exports.descriptor = descriptor;
var propTypes = {
  colorScheme: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  max: _propTypes.default.number,
  min: _propTypes.default.number,
  step: _propTypes.default.number,
  type: _propTypes.default.string,
  value: _propTypes.default.number,
  onChange: _propTypes.default.func,
};
exports.propTypes = propTypes;
const Component = (0, _createReactCustomElementType.default)(''.concat(prefix, '-slider-input'), descriptor);
Component.propTypes = propTypes;
var _default = Component;
exports.default = _default;

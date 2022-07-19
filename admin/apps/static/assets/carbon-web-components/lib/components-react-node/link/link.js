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
  disabled: {
    serialize: _createReactCustomElementType.booleanSerializer,
  },
  download: {},
  href: {},
  hreflang: {},
  linkRole: {
    attribute: 'link-role',
  },
  ping: {},
  rel: {},
  size: {},
  target: {},
  type: {},
};
exports.descriptor = descriptor;
var propTypes = {
  disabled: _propTypes.default.bool,
  download: _propTypes.default.string,
  href: _propTypes.default.string,
  hreflang: _propTypes.default.string,
  linkRole: _propTypes.default.string,
  ping: _propTypes.default.string,
  rel: _propTypes.default.string,
  size: _propTypes.default.string,
  target: _propTypes.default.string,
  type: _propTypes.default.string,
};
exports.propTypes = propTypes;
const Component = (0, _createReactCustomElementType.default)(''.concat(prefix, '-link'), descriptor);
Component.propTypes = propTypes;
var _default = Component;
exports.default = _default;

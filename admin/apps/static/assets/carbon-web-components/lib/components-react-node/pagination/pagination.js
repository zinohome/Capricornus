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
  formatStatusWithDeterminateTotal: {
    attribute: false,
  },
  formatStatusWithIndeterminateTotal: {
    attribute: false,
  },
  atLastPage: {
    serialize: _createReactCustomElementType.booleanSerializer,
    attribute: 'at-last-page',
  },
  disabled: {
    serialize: _createReactCustomElementType.booleanSerializer,
  },
  nextButtonText: {
    attribute: 'next-button-text',
  },
  pageSize: {
    serialize: _createReactCustomElementType.numberSerializer,
    attribute: 'page-size',
  },
  pageSizeLabelText: {
    attribute: 'page-size-label-text',
  },
  prevButtonText: {
    attribute: 'prev-button-text',
  },
  start: {
    serialize: _createReactCustomElementType.numberSerializer,
  },
  total: {
    serialize: _createReactCustomElementType.numberSerializer,
  },
  onChangeCurrent: {
    event: ''.concat(prefix, '-pagination-changed-current'),
  },
  onChangePage: {
    event: ''.concat(prefix, '-pages-select-changed'),
  },
  onChangePageSize: {
    event: ''.concat(prefix, '-page-sizes-select-changed'),
  },
};
exports.descriptor = descriptor;
var propTypes = {
  formatStatusWithDeterminateTotal: _propTypes.default.string,
  formatStatusWithIndeterminateTotal: _propTypes.default.string,
  atLastPage: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  nextButtonText: _propTypes.default.string,
  pageSize: _propTypes.default.number,
  pageSizeLabelText: _propTypes.default.string,
  prevButtonText: _propTypes.default.string,
  start: _propTypes.default.number,
  total: _propTypes.default.number,
  onChangeCurrent: _propTypes.default.func,
  onChangePage: _propTypes.default.func,
  onChangePageSize: _propTypes.default.func,
};
exports.propTypes = propTypes;
const Component = (0, _createReactCustomElementType.default)(''.concat(prefix, '-pagination'), descriptor);
Component.propTypes = propTypes;
var _default = Component;
exports.default = _default;

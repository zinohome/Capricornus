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
Object.defineProperty(exports, 'NOTIFICATION_KIND', {
  enumerable: true,
  get: function () {
    return _defs.NOTIFICATION_KIND;
  },
});
Object.defineProperty(exports, 'NOTIFICATION_TYPE', {
  enumerable: true,
  get: function () {
    return _defs.NOTIFICATION_TYPE;
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
  closeButtonLabel: {
    attribute: 'close-button-label',
  },
  hideCloseButton: {
    serialize: _createReactCustomElementType.booleanSerializer,
    attribute: 'hide-close-button',
  },
  iconLabel: {
    attribute: 'icon-label',
  },
  kind: {},
  lowContrast: {
    serialize: _createReactCustomElementType.booleanSerializer,
    attribute: 'low-contrast',
  },
  open: {
    serialize: _createReactCustomElementType.booleanSerializer,
  },
  timeout: {
    serialize: _createReactCustomElementType.numberSerializer,
  },
  subtitle: {},
  title: {},
  onBeforeClose: {
    event: ''.concat(prefix, '-notification-beingclosed'),
  },
  onClose: {
    event: ''.concat(prefix, '-notification-closed'),
  },
};
exports.descriptor = descriptor;
var propTypes = {
  closeButtonLabel: _propTypes.default.string,
  hideCloseButton: _propTypes.default.bool,
  iconLabel: _propTypes.default.string,
  kind: _propTypes.default.string,
  lowContrast: _propTypes.default.bool,
  open: _propTypes.default.bool,
  timeout: _propTypes.default.number,
  subtitle: _propTypes.default.string,
  title: _propTypes.default.string,
  onBeforeClose: _propTypes.default.func,
  onClose: _propTypes.default.func,
};
exports.propTypes = propTypes;
const Component = (0, _createReactCustomElementType.default)(''.concat(prefix, '-inline-notification'), descriptor);
Component.propTypes = propTypes;
var _default = Component;
exports.default = _default;

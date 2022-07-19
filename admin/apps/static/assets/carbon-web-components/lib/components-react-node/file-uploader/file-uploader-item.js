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
Object.defineProperty(exports, 'FILE_UPLOADER_ITEM_SIZE', {
  enumerable: true,
  get: function () {
    return _defs.FILE_UPLOADER_ITEM_SIZE;
  },
});
Object.defineProperty(exports, 'FILE_UPLOADER_ITEM_STATE', {
  enumerable: true,
  get: function () {
    return _defs.FILE_UPLOADER_ITEM_STATE;
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
  deleteAssistiveText: {
    attribute: 'delete-assistive-text',
  },
  invalid: {
    serialize: _createReactCustomElementType.booleanSerializer,
  },
  size: {},
  state: {},
  uploadingAssistiveText: {
    attribute: 'uploading-assistive-text',
  },
  uploadedAssistiveText: {
    attribute: 'uploaded-assistive-text',
  },
  validityMessage: {
    attribute: 'validity-message',
  },
  onBeforeDelete: {
    event: ''.concat(prefix, '-file-uploader-item-beingdeleted'),
  },
  onDelete: {
    event: ''.concat(prefix, '-file-uploader-item-deleted'),
  },
};
exports.descriptor = descriptor;
var propTypes = {
  deleteAssistiveText: _propTypes.default.string,
  invalid: _propTypes.default.bool,
  size: _propTypes.default.string,
  state: _propTypes.default.string,
  uploadingAssistiveText: _propTypes.default.string,
  uploadedAssistiveText: _propTypes.default.string,
  validityMessage: _propTypes.default.string,
  onBeforeDelete: _propTypes.default.func,
  onDelete: _propTypes.default.func,
};
exports.propTypes = propTypes;
const Component = (0, _createReactCustomElementType.default)(''.concat(prefix, '-file-uploader-item'), descriptor);
Component.propTypes = propTypes;
var _default = Component;
exports.default = _default;

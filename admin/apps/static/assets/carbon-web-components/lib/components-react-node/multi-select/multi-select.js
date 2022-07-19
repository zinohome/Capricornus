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
var descriptor = Object.assign({}, _dropdown.descriptor, {
  filterable: {
    serialize: _createReactCustomElementType.booleanSerializer,
  },
  clearSelectionLabel: {
    attribute: 'clear-selection-label',
  },
  unselectedItemAssistiveText: {
    attribute: 'unselected-item-assistive-text',
  },
  unselectedAllAssistiveText: {
    attribute: 'unselected-all-assistive-text',
  },
  onBeforeToggle: {
    event: ''.concat(prefix, '-multi-select-beingtoggled'),
  },
  onToggle: {
    event: ''.concat(prefix, '-multi-select-toggled'),
  },
  onBeforeSelect: {
    event: ''.concat(prefix, '-multi-select-beingselected'),
  },
  onSelect: {
    event: ''.concat(prefix, '-multi-select-selected'),
  },
});
exports.descriptor = descriptor;
var propTypes = Object.assign({}, _dropdown.propTypes, {
  filterable: _propTypes.default.bool,
  clearSelectionLabel: _propTypes.default.string,
  unselectedItemAssistiveText: _propTypes.default.string,
  unselectedAllAssistiveText: _propTypes.default.string,
  onBeforeToggle: _propTypes.default.func,
  onToggle: _propTypes.default.func,
  onBeforeSelect: _propTypes.default.func,
  onSelect: _propTypes.default.func,
});
exports.propTypes = propTypes;
const Component = (0, _createReactCustomElementType.default)(''.concat(prefix, '-multi-select'), descriptor);
Component.propTypes = propTypes;
var _default = Component;
exports.default = _default;

/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
export { TOGGLE_SIZE } from '././defs.js';
import { descriptor as parentDescriptor } from '../checkbox/checkbox.js';
import { propTypes as parentPropTypes } from '../checkbox/checkbox.js';
export { default as CustomElement } from '../../components/toggle/toggle.js';
import createReactCustomElementType from '../../globals/wrappers/createReactCustomElementType.js';
import PropTypes from 'prop-types';
import settings from 'carbon-components/es/globals/js/settings.js';
var prefix = settings.prefix;
export var descriptor = Object.assign({}, parentDescriptor, {
  checkedText: {
    attribute: 'checked-text',
  },
  size: {},
  uncheckedText: {
    attribute: 'unchecked-text',
  },
  onChange: {
    event: ''.concat(prefix, '-toggle-changed'),
  },
});
export var propTypes = Object.assign({}, parentPropTypes, {
  checkedText: PropTypes.string,
  size: PropTypes.string,
  uncheckedText: PropTypes.string,
  onChange: PropTypes.func,
});
const Component = createReactCustomElementType(''.concat(prefix, '-toggle'), descriptor);
Component.propTypes = propTypes;
export default Component;

/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { descriptor as parentDescriptor } from '../floating-menu/floating-menu.js';
import { propTypes as parentPropTypes } from '../floating-menu/floating-menu.js';
export { default as CustomElement } from '../../components/tooltip/tooltip-body.js';
import createReactCustomElementType, { booleanSerializer } from '../../globals/wrappers/createReactCustomElementType.js';
import PropTypes from 'prop-types';
import settings from 'carbon-components/es/globals/js/settings.js';
var prefix = settings.prefix;
export var descriptor = Object.assign({}, parentDescriptor, {
  alignment: {},
  direction: {},
  open: {
    serialize: booleanSerializer,
  },
});
export var propTypes = Object.assign({}, parentPropTypes, {
  alignment: PropTypes.string,
  direction: PropTypes.string,
  open: PropTypes.bool,
});
const Component = createReactCustomElementType(''.concat(prefix, '-tooltip-body'), descriptor);
Component.propTypes = propTypes;
export default Component;

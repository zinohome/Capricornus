/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { descriptor as parentDescriptor } from '../content-switcher/content-switcher-item.js';
import { propTypes as parentPropTypes } from '../content-switcher/content-switcher-item.js';
export { default as CustomElement } from '../../components/tabs/tab.js';
import createReactCustomElementType, { booleanSerializer } from '../../globals/wrappers/createReactCustomElementType.js';
import PropTypes from 'prop-types';
import settings from 'carbon-components/es/globals/js/settings.js';
var prefix = settings.prefix;
export var descriptor = Object.assign({}, parentDescriptor, {
  highlighted: {
    serialize: booleanSerializer,
  },
  inFocus: {
    serialize: booleanSerializer,
    attribute: 'in-focus',
  },
  type: {},
});
export var propTypes = Object.assign({}, parentPropTypes, {
  highlighted: PropTypes.bool,
  inFocus: PropTypes.bool,
  type: PropTypes.string,
});
const Component = createReactCustomElementType(''.concat(prefix, '-tab'), descriptor);
Component.propTypes = propTypes;
export default Component;

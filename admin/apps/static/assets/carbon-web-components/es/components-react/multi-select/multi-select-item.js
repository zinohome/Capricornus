/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { descriptor as parentDescriptor } from '../dropdown/dropdown-item.js';
import { propTypes as parentPropTypes } from '../dropdown/dropdown-item.js';
export { default as CustomElement } from '../../components/multi-select/multi-select-item.js';
import createReactCustomElementType, { booleanSerializer } from '../../globals/wrappers/createReactCustomElementType.js';
import PropTypes from 'prop-types';
import settings from 'carbon-components/es/globals/js/settings.js';
var prefix = settings.prefix;
export var descriptor = Object.assign({}, parentDescriptor, {
  filtered: {
    serialize: booleanSerializer,
  },
  selectionName: {
    attribute: 'selection-name',
  },
});
export var propTypes = Object.assign({}, parentPropTypes, {
  filtered: PropTypes.bool,
  selectionName: PropTypes.string,
});
const Component = createReactCustomElementType(''.concat(prefix, '-multi-select-item'), descriptor);
Component.propTypes = propTypes;
export default Component;

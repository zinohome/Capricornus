/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { descriptor as parentDescriptor } from '../search/search.js';
import { propTypes as parentPropTypes } from '../search/search.js';
export { default as CustomElement } from '../../components/data-table/table-toolbar-search.js';
import createReactCustomElementType, { booleanSerializer } from '../../globals/wrappers/createReactCustomElementType.js';
import PropTypes from 'prop-types';
import settings from 'carbon-components/es/globals/js/settings.js';
var prefix = settings.prefix;
export var descriptor = Object.assign({}, parentDescriptor, {
  expanded: {
    serialize: booleanSerializer,
  },
  size: {},
  onInput: {
    event: ''.concat(prefix, '-search-input'),
  },
});
export var propTypes = Object.assign({}, parentPropTypes, {
  expanded: PropTypes.bool,
  size: PropTypes.string,
  onInput: PropTypes.func,
});
const Component = createReactCustomElementType(''.concat(prefix, '-table-toolbar-search'), descriptor);
Component.propTypes = propTypes;
export default Component;

/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
export { default as CustomElement } from '../../components/structured-list/structured-list-header-row.js';
import createReactCustomElementType from '../../globals/wrappers/createReactCustomElementType.js';
import PropTypes from 'prop-types';
import settings from 'carbon-components/es/globals/js/settings.js';
var prefix = settings.prefix;
export var descriptor = {
  selectionName: {
    attribute: 'selection-name',
  },
};
export var propTypes = {
  selectionName: PropTypes.string,
};
const Component = createReactCustomElementType(''.concat(prefix, '-structured-list-header-row'), descriptor);
Component.propTypes = propTypes;
export default Component;

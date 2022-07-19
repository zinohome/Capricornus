/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
export { default as CustomElement } from '../../components/structured-list/structured-list-row.js';
import createReactCustomElementType, { booleanSerializer } from '../../globals/wrappers/createReactCustomElementType.js';
import PropTypes from 'prop-types';
import settings from 'carbon-components/es/globals/js/settings.js';
var prefix = settings.prefix;
export var descriptor = {
  selected: {
    serialize: booleanSerializer,
  },
  selectionName: {
    attribute: 'selection-name',
  },
  selectionValue: {
    attribute: 'selection-value',
  },
  selectionIconTitle: {
    attribute: 'selection-icon-title',
  },
};
export var propTypes = {
  selected: PropTypes.bool,
  selectionName: PropTypes.string,
  selectionValue: PropTypes.string,
  selectionIconTitle: PropTypes.string,
};
const Component = createReactCustomElementType(''.concat(prefix, '-structured-list-row'), descriptor);
Component.propTypes = propTypes;
export default Component;

/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
export { default as CustomElement } from '../../components/data-table/table-row.js';
import createReactCustomElementType, { booleanSerializer } from '../../globals/wrappers/createReactCustomElementType.js';
import PropTypes from 'prop-types';
import settings from 'carbon-components/es/globals/js/settings.js';
var prefix = settings.prefix;
export var descriptor = {
  disabled: {
    serialize: booleanSerializer,
  },
  even: {
    serialize: booleanSerializer,
  },
  odd: {
    serialize: booleanSerializer,
  },
  selected: {
    serialize: booleanSerializer,
  },
  selectionLabel: {
    attribute: 'selection-label',
  },
  selectionName: {
    attribute: 'selection-name',
  },
  selectionValue: {
    attribute: 'selection-value',
  },
  onBeforeChangeSelection: {
    event: ''.concat(prefix, '-table-row-change-selection'),
  },
};
export var propTypes = {
  disabled: PropTypes.bool,
  even: PropTypes.bool,
  odd: PropTypes.bool,
  selected: PropTypes.bool,
  selectionLabel: PropTypes.string,
  selectionName: PropTypes.string,
  selectionValue: PropTypes.string,
  onBeforeChangeSelection: PropTypes.func,
};
const Component = createReactCustomElementType(''.concat(prefix, '-table-row'), descriptor);
Component.propTypes = propTypes;
export default Component;

/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
export { TABLE_SORT_CYCLE, TABLE_SORT_CYCLES, TABLE_SORT_DIRECTION } from '././defs.js';
export { default as CustomElement } from '../../components/data-table/table-header-cell.js';
import createReactCustomElementType, { booleanSerializer } from '../../globals/wrappers/createReactCustomElementType.js';
import PropTypes from 'prop-types';
import settings from 'carbon-components/es/globals/js/settings.js';
var prefix = settings.prefix;
export var descriptor = {
  sortActive: {
    serialize: booleanSerializer,
    attribute: 'sort-active',
  },
  sortCycle: {
    attribute: 'sort-cycle',
  },
  sortDirection: {
    attribute: 'sort-direction',
  },
  onBeforeSort: {
    event: ''.concat(prefix, '-table-header-cell-sort'),
  },
};
export var propTypes = {
  sortActive: PropTypes.bool,
  sortCycle: PropTypes.string,
  sortDirection: PropTypes.string,
  onBeforeSort: PropTypes.func,
};
const Component = createReactCustomElementType(''.concat(prefix, '-table-header-cell'), descriptor);
Component.propTypes = propTypes;
export default Component;

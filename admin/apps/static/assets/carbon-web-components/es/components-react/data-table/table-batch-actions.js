/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
export { default as CustomElement } from '../../components/data-table/table-batch-actions.js';
import createReactCustomElementType, {
  booleanSerializer,
  numberSerializer,
} from '../../globals/wrappers/createReactCustomElementType.js';
import PropTypes from 'prop-types';
import settings from 'carbon-components/es/globals/js/settings.js';
var prefix = settings.prefix;
export var descriptor = {
  active: {
    serialize: booleanSerializer,
  },
  formatSelectedItemsCount: {
    attribute: false,
  },
  selectedRowsCount: {
    serialize: numberSerializer,
    attribute: 'selected-rows-count',
  },
  onClickCancel: {
    event: ''.concat(prefix, '-table-batch-actions-cancel-clicked'),
  },
};
export var propTypes = {
  active: PropTypes.bool,
  formatSelectedItemsCount: PropTypes.string,
  selectedRowsCount: PropTypes.number,
  onClickCancel: PropTypes.func,
};
const Component = createReactCustomElementType(''.concat(prefix, '-table-batch-actions'), descriptor);
Component.propTypes = propTypes;
export default Component;

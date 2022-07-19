/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
export { default as CustomElement } from '../../components/data-table/table-expanded-row.js';
import createReactCustomElementType, {
  numberSerializer,
  booleanSerializer,
} from '../../globals/wrappers/createReactCustomElementType.js';
import PropTypes from 'prop-types';
import settings from 'carbon-components/es/globals/js/settings.js';
var prefix = settings.prefix;
export var descriptor = {
  colSpan: {
    serialize: numberSerializer,
    attribute: 'colspan',
  },
  expanded: {
    serialize: booleanSerializer,
  },
  highlighted: {
    serialize: booleanSerializer,
  },
};
export var propTypes = {
  colSpan: PropTypes.number,
  expanded: PropTypes.bool,
  highlighted: PropTypes.bool,
};
const Component = createReactCustomElementType(''.concat(prefix, '-table-expanded-row'), descriptor);
Component.propTypes = propTypes;
export default Component;

/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { descriptor as parentDescriptor } from '././table-row.js';
import { propTypes as parentPropTypes } from '././table-row.js';
export { default as CustomElement } from '../../components/data-table/table-expand-row.js';
import createReactCustomElementType, { booleanSerializer } from '../../globals/wrappers/createReactCustomElementType.js';
import PropTypes from 'prop-types';
import settings from 'carbon-components/es/globals/js/settings.js';
var prefix = settings.prefix;
export var descriptor = Object.assign({}, parentDescriptor, {
  expanded: {
    serialize: booleanSerializer,
  },
  onBeforeExpandoToggle: {
    event: ''.concat(prefix, '-table-row-expando-beingtoggled'),
  },
  onExpandoToggle: {
    event: ''.concat(prefix, '-table-row-expando-toggled'),
  },
});
export var propTypes = Object.assign({}, parentPropTypes, {
  expanded: PropTypes.bool,
  onBeforeExpandoToggle: PropTypes.func,
  onExpandoToggle: PropTypes.func,
});
const Component = createReactCustomElementType(''.concat(prefix, '-table-expand-row'), descriptor);
Component.propTypes = propTypes;
export default Component;

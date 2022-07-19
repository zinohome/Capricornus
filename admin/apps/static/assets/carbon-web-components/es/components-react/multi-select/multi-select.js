/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
export { DROPDOWN_COLOR_SCHEME, DROPDOWN_SIZE, DROPDOWN_TYPE } from '../dropdown/dropdown.js';
import { descriptor as parentDescriptor } from '../dropdown/dropdown.js';
import { propTypes as parentPropTypes } from '../dropdown/dropdown.js';
export { default as CustomElement } from '../../components/multi-select/multi-select.js';
import createReactCustomElementType, { booleanSerializer } from '../../globals/wrappers/createReactCustomElementType.js';
import PropTypes from 'prop-types';
import settings from 'carbon-components/es/globals/js/settings.js';
var prefix = settings.prefix;
export var descriptor = Object.assign({}, parentDescriptor, {
  filterable: {
    serialize: booleanSerializer,
  },
  clearSelectionLabel: {
    attribute: 'clear-selection-label',
  },
  unselectedItemAssistiveText: {
    attribute: 'unselected-item-assistive-text',
  },
  unselectedAllAssistiveText: {
    attribute: 'unselected-all-assistive-text',
  },
  onBeforeToggle: {
    event: ''.concat(prefix, '-multi-select-beingtoggled'),
  },
  onToggle: {
    event: ''.concat(prefix, '-multi-select-toggled'),
  },
  onBeforeSelect: {
    event: ''.concat(prefix, '-multi-select-beingselected'),
  },
  onSelect: {
    event: ''.concat(prefix, '-multi-select-selected'),
  },
});
export var propTypes = Object.assign({}, parentPropTypes, {
  filterable: PropTypes.bool,
  clearSelectionLabel: PropTypes.string,
  unselectedItemAssistiveText: PropTypes.string,
  unselectedAllAssistiveText: PropTypes.string,
  onBeforeToggle: PropTypes.func,
  onToggle: PropTypes.func,
  onBeforeSelect: PropTypes.func,
  onSelect: PropTypes.func,
});
const Component = createReactCustomElementType(''.concat(prefix, '-multi-select'), descriptor);
Component.propTypes = propTypes;
export default Component;

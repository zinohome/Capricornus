/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
export { DROPDOWN_COLOR_SCHEME, DROPDOWN_KEYBOARD_ACTION, DROPDOWN_SIZE, DROPDOWN_TYPE, NAVIGATION_DIRECTION } from '././defs.js';
export { default as CustomElement } from '../../components/dropdown/dropdown.js';
import createReactCustomElementType, { booleanSerializer } from '../../globals/wrappers/createReactCustomElementType.js';
import PropTypes from 'prop-types';
import settings from 'carbon-components/es/globals/js/settings.js';
var prefix = settings.prefix;
export var descriptor = {
  colorScheme: {
    attribute: 'color-scheme',
  },
  disabled: {
    serialize: booleanSerializer,
  },
  helperText: {
    attribute: 'helper-text',
  },
  invalid: {
    serialize: booleanSerializer,
  },
  labelText: {
    attribute: 'label-text',
  },
  name: {},
  open: {
    serialize: booleanSerializer,
  },
  required: {
    serialize: booleanSerializer,
  },
  requiredValidityMessage: {
    attribute: 'required-validity-message',
  },
  selectingItemsAssistiveText: {
    attribute: 'selecting-items-assistive-text',
  },
  selectedItemAssistiveText: {
    attribute: 'selected-item-assistive-text',
  },
  size: {},
  toggleLabelClosed: {
    attribute: 'toggle-label-closed',
  },
  toggleLabelOpen: {
    attribute: 'toggle-label-open',
  },
  triggerContent: {
    attribute: 'trigger-content',
  },
  type: {},
  validityMessage: {
    attribute: 'validity-message',
  },
  value: {},
  onBeforeSelect: {
    event: ''.concat(prefix, '-dropdown-beingselected'),
  },
  onSelect: {
    event: ''.concat(prefix, '-dropdown-selected'),
  },
  onBeforeToggle: {
    event: ''.concat(prefix, '-dropdown-beingtoggled'),
  },
  onToggle: {
    event: ''.concat(prefix, '-dropdown-toggled'),
  },
};
export var propTypes = {
  colorScheme: PropTypes.string,
  disabled: PropTypes.bool,
  helperText: PropTypes.string,
  invalid: PropTypes.bool,
  labelText: PropTypes.string,
  name: PropTypes.string,
  open: PropTypes.bool,
  required: PropTypes.bool,
  requiredValidityMessage: PropTypes.string,
  selectingItemsAssistiveText: PropTypes.string,
  selectedItemAssistiveText: PropTypes.string,
  size: PropTypes.string,
  toggleLabelClosed: PropTypes.string,
  toggleLabelOpen: PropTypes.string,
  triggerContent: PropTypes.string,
  type: PropTypes.string,
  validityMessage: PropTypes.string,
  value: PropTypes.string,
  onBeforeSelect: PropTypes.func,
  onSelect: PropTypes.func,
  onBeforeToggle: PropTypes.func,
  onToggle: PropTypes.func,
};
const Component = createReactCustomElementType(''.concat(prefix, '-dropdown'), descriptor);
Component.propTypes = propTypes;
export default Component;

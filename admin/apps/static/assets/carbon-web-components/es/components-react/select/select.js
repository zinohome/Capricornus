/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
export { FORM_ELEMENT_COLOR_SCHEME as SELECT_COLOR_SCHEME } from '../../globals/shared-enums.js';
export { default as CustomElement } from '../../components/select/select.js';
import createReactCustomElementType, {
  booleanSerializer,
  numberSerializer,
} from '../../globals/wrappers/createReactCustomElementType.js';
import PropTypes from 'prop-types';
import settings from 'carbon-components/es/globals/js/settings.js';
var prefix = settings.prefix;
export var descriptor = {
  autofocus: {
    serialize: booleanSerializer,
  },
  colorScheme: {
    attribute: 'color-scheme',
  },
  disabled: {
    serialize: booleanSerializer,
  },
  helperText: {
    attribute: 'helper-text',
  },
  id: {},
  invalid: {
    serialize: booleanSerializer,
  },
  labelText: {
    attribute: 'label-text',
  },
  multiple: {
    serialize: booleanSerializer,
  },
  name: {},
  pattern: {},
  placeholder: {},
  readonly: {
    serialize: booleanSerializer,
  },
  required: {
    serialize: booleanSerializer,
  },
  requiredValidityMessage: {
    attribute: 'required-validity-message',
  },
  selectedIndex: {
    serialize: numberSerializer,
  },
  size: {},
  validityMessage: {
    attribute: 'validity-message',
  },
  value: {},
  onSelect: {
    event: ''.concat(prefix, '-select-selected'),
  },
};
export var propTypes = {
  autofocus: PropTypes.bool,
  colorScheme: PropTypes.string,
  disabled: PropTypes.bool,
  helperText: PropTypes.string,
  id: PropTypes.string,
  invalid: PropTypes.bool,
  labelText: PropTypes.string,
  multiple: PropTypes.bool,
  name: PropTypes.string,
  pattern: PropTypes.string,
  placeholder: PropTypes.string,
  readonly: PropTypes.bool,
  required: PropTypes.bool,
  requiredValidityMessage: PropTypes.string,
  selectedIndex: PropTypes.number,
  size: PropTypes.string,
  validityMessage: PropTypes.string,
  value: PropTypes.string,
  onSelect: PropTypes.func,
};
const Component = createReactCustomElementType(''.concat(prefix, '-select'), descriptor);
Component.propTypes = propTypes;
export default Component;

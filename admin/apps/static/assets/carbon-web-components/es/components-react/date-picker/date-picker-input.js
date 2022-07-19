/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
export { DATE_PICKER_INPUT_COLOR_SCHEME, DATE_PICKER_INPUT_KIND, DATE_PICKER_INPUT_SIZE_HORIZONTAL } from '././defs.js';
export { default as CustomElement } from '../../components/date-picker/date-picker-input.js';
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
  hideLabel: {
    serialize: booleanSerializer,
    attribute: 'hide-label',
  },
  invalid: {
    serialize: booleanSerializer,
  },
  kind: {},
  labelText: {
    attribute: 'label-text',
  },
  pattern: {},
  placeholder: {},
  required: {
    serialize: booleanSerializer,
  },
  requiredValidityMessage: {
    attribute: 'required-validity-message',
  },
  size: {
    attribute: 'size',
  },
  sizeHorizontal: {
    attribute: 'size-horizontal',
  },
  type: {},
  validityMessage: {
    attribute: 'validity-message',
  },
  value: {},
};
export var propTypes = {
  colorScheme: PropTypes.string,
  disabled: PropTypes.bool,
  hideLabel: PropTypes.bool,
  invalid: PropTypes.bool,
  kind: PropTypes.string,
  labelText: PropTypes.string,
  pattern: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  requiredValidityMessage: PropTypes.string,
  size: PropTypes.string,
  sizeHorizontal: PropTypes.string,
  type: PropTypes.string,
  validityMessage: PropTypes.string,
  value: PropTypes.string,
};
const Component = createReactCustomElementType(''.concat(prefix, '-date-picker-input'), descriptor);
Component.propTypes = propTypes;
export default Component;

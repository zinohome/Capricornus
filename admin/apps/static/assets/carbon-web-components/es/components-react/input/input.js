/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
export { INPUT_COLOR_SCHEME, INPUT_SIZE, INPUT_TYPE } from '././defs.js';
export { default as CustomElement } from '../../components/input/input.js';
import createReactCustomElementType, { booleanSerializer } from '../../globals/wrappers/createReactCustomElementType.js';
import PropTypes from 'prop-types';
import settings from 'carbon-components/es/globals/js/settings.js';
var prefix = settings.prefix;
export var descriptor = {
  autocomplete: {},
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
  invalid: {
    serialize: booleanSerializer,
  },
  labelText: {
    attribute: 'label-text',
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
  size: {},
  type: {},
  validityMessage: {
    attribute: 'validity-message',
  },
  value: {},
};
export var propTypes = {
  autocomplete: PropTypes.string,
  autofocus: PropTypes.bool,
  colorScheme: PropTypes.string,
  disabled: PropTypes.bool,
  helperText: PropTypes.string,
  invalid: PropTypes.bool,
  labelText: PropTypes.string,
  name: PropTypes.string,
  pattern: PropTypes.string,
  placeholder: PropTypes.string,
  readonly: PropTypes.bool,
  required: PropTypes.bool,
  requiredValidityMessage: PropTypes.string,
  size: PropTypes.string,
  type: PropTypes.string,
  validityMessage: PropTypes.string,
  value: PropTypes.string,
};
const Component = createReactCustomElementType(''.concat(prefix, '-input'), descriptor);
Component.propTypes = propTypes;
export default Component;

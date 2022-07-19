/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
export { NUMBER_INPUT_COLOR_SCHEME, NUMBER_INPUT_VALIDATION_STATUS } from '././defs.js';
import { descriptor as parentDescriptor } from '../input/input.js';
import { propTypes as parentPropTypes } from '../input/input.js';
export { default as CustomElement } from '../../components/number-input/number-input.js';
import createReactCustomElementType, { booleanSerializer } from '../../globals/wrappers/createReactCustomElementType.js';
import PropTypes from 'prop-types';
import settings from 'carbon-components/es/globals/js/settings.js';
var prefix = settings.prefix;
export var descriptor = Object.assign({}, parentDescriptor, {
  colorScheme: {
    attribute: 'color-scheme',
  },
  min: {},
  max: {},
  step: {},
  mobile: {
    serialize: booleanSerializer,
  },
  incrementButtonAssistiveText: {
    attribute: 'increment-button-assistive-text',
  },
  decrementButtonAssistiveText: {
    attribute: 'decrement-button-assistive-text',
  },
  size: {},
  validityMessageMax: {
    attribute: 'validity-message-max',
  },
  validityMessageMin: {
    attribute: 'validity-message-min',
  },
  onInput: {
    event: ''.concat(prefix, '-number-input'),
  },
});
export var propTypes = Object.assign({}, parentPropTypes, {
  colorScheme: PropTypes.string,
  min: PropTypes.string,
  max: PropTypes.string,
  step: PropTypes.string,
  mobile: PropTypes.bool,
  incrementButtonAssistiveText: PropTypes.string,
  decrementButtonAssistiveText: PropTypes.string,
  size: PropTypes.string,
  validityMessageMax: PropTypes.string,
  validityMessageMin: PropTypes.string,
  onInput: PropTypes.func,
});
const Component = createReactCustomElementType(''.concat(prefix, '-number-input'), descriptor);
Component.propTypes = propTypes;
export default Component;

/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
export { SLIDER_INPUT_COLOR_SCHEME } from '././defs.js';
export { default as CustomElement } from '../../components/slider/slider-input.js';
import createReactCustomElementType, {
  booleanSerializer,
  numberSerializer,
} from '../../globals/wrappers/createReactCustomElementType.js';
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
  max: {
    serialize: numberSerializer,
  },
  min: {
    serialize: numberSerializer,
  },
  step: {
    serialize: numberSerializer,
  },
  type: {},
  value: {
    serialize: numberSerializer,
  },
  onChange: {
    event: ''.concat(prefix, '-slider-input-changed'),
  },
};
export var propTypes = {
  colorScheme: PropTypes.string,
  disabled: PropTypes.bool,
  max: PropTypes.number,
  min: PropTypes.number,
  step: PropTypes.number,
  type: PropTypes.string,
  value: PropTypes.number,
  onChange: PropTypes.func,
};
const Component = createReactCustomElementType(''.concat(prefix, '-slider-input'), descriptor);
Component.propTypes = propTypes;
export default Component;

/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
export { default as CustomElement } from '../../components/slider/slider.js';
import createReactCustomElementType, {
  booleanSerializer,
  numberSerializer,
} from '../../globals/wrappers/createReactCustomElementType.js';
import PropTypes from 'prop-types';
import settings from 'carbon-components/es/globals/js/settings.js';
var prefix = settings.prefix;
export var descriptor = {
  disabled: {
    serialize: booleanSerializer,
  },
  formatMaxText: {
    attribute: false,
  },
  formatMinText: {
    attribute: false,
  },
  labelText: {
    attribute: 'label-text',
  },
  max: {
    serialize: numberSerializer,
  },
  min: {
    serialize: numberSerializer,
  },
  name: {},
  step: {
    serialize: numberSerializer,
  },
  stepRatio: {
    serialize: numberSerializer,
    attribute: 'step-ratio',
  },
  value: {
    serialize: numberSerializer,
  },
  onChange: {
    event: ''.concat(prefix, '-slider-changed'),
  },
  onChangeInput: {
    event: ''.concat(prefix, '-slider-input-changed'),
  },
};
export var propTypes = {
  disabled: PropTypes.bool,
  formatMaxText: PropTypes.string,
  formatMinText: PropTypes.string,
  labelText: PropTypes.string,
  max: PropTypes.number,
  min: PropTypes.number,
  name: PropTypes.string,
  step: PropTypes.number,
  stepRatio: PropTypes.number,
  value: PropTypes.number,
  onChange: PropTypes.func,
  onChangeInput: PropTypes.func,
};
const Component = createReactCustomElementType(''.concat(prefix, '-slider'), descriptor);
Component.propTypes = propTypes;
export default Component;

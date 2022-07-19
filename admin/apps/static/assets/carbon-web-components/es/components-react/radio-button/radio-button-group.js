/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
export { RADIO_BUTTON_ORIENTATION } from '././defs.js';
export { default as CustomElement } from '../../components/radio-button/radio-button-group.js';
import createReactCustomElementType, { booleanSerializer } from '../../globals/wrappers/createReactCustomElementType.js';
import PropTypes from 'prop-types';
import settings from 'carbon-components/es/globals/js/settings.js';
var prefix = settings.prefix;
export var descriptor = {
  disabled: {
    serialize: booleanSerializer,
  },
  labelPosition: {
    attribute: 'label-position',
  },
  name: {},
  orientation: {},
  value: {},
  onChange: {
    event: ''.concat(prefix, '-radio-button-group-changed'),
  },
  onChangeRadioButton: {
    event: ''.concat(prefix, '-radio-button-changed'),
  },
};
export var propTypes = {
  disabled: PropTypes.bool,
  labelPosition: PropTypes.string,
  name: PropTypes.string,
  orientation: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onChangeRadioButton: PropTypes.func,
};
const Component = createReactCustomElementType(''.concat(prefix, '-radio-button-group'), descriptor);
Component.propTypes = propTypes;
export default Component;

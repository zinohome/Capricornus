/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
export { default as CustomElement } from '../../components/checkbox/checkbox.js';
import createReactCustomElementType, { booleanSerializer } from '../../globals/wrappers/createReactCustomElementType.js';
import PropTypes from 'prop-types';
import settings from 'carbon-components/es/globals/js/settings.js';
var prefix = settings.prefix;
export var descriptor = {
  checked: {
    serialize: booleanSerializer,
  },
  disabled: {
    serialize: booleanSerializer,
  },
  hideLabel: {
    serialize: booleanSerializer,
    attribute: 'hide-label',
  },
  indeterminate: {
    serialize: booleanSerializer,
  },
  labelText: {
    attribute: 'label-text',
  },
  name: {},
  value: {},
  onChange: {
    event: ''.concat(prefix, '-checkbox-changed'),
  },
};
export var propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  hideLabel: PropTypes.bool,
  indeterminate: PropTypes.bool,
  labelText: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
const Component = createReactCustomElementType(''.concat(prefix, '-checkbox'), descriptor);
Component.propTypes = propTypes;
export default Component;

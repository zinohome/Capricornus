/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
export { default as CustomElement } from '../../components/content-switcher/content-switcher-item.js';
import createReactCustomElementType, { booleanSerializer } from '../../globals/wrappers/createReactCustomElementType.js';
import PropTypes from 'prop-types';
import settings from 'carbon-components/es/globals/js/settings.js';
var prefix = settings.prefix;
export var descriptor = {
  disabled: {
    serialize: booleanSerializer,
  },
  hideDivider: {
    serialize: booleanSerializer,
    attribute: 'hide-divider',
  },
  selected: {
    serialize: booleanSerializer,
  },
  target: {},
  value: {},
};
export var propTypes = {
  disabled: PropTypes.bool,
  hideDivider: PropTypes.bool,
  selected: PropTypes.bool,
  target: PropTypes.string,
  value: PropTypes.string,
};
const Component = createReactCustomElementType(''.concat(prefix, '-content-switcher-item'), descriptor);
Component.propTypes = propTypes;
export default Component;

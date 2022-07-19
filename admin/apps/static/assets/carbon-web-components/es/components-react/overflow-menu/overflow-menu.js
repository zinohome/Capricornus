/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
export { OVERFLOW_MENU_COLOR_SCHEME, OVERFLOW_MENU_SIZE } from '././defs.js';
export { default as CustomElement } from '../../components/overflow-menu/overflow-menu.js';
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
  open: {
    serialize: booleanSerializer,
  },
  size: {},
};
export var propTypes = {
  colorScheme: PropTypes.string,
  disabled: PropTypes.bool,
  open: PropTypes.bool,
  size: PropTypes.string,
};
const Component = createReactCustomElementType(''.concat(prefix, '-overflow-menu'), descriptor);
Component.propTypes = propTypes;
export default Component;

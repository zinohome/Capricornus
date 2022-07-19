/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
export { default as CustomElement } from '../../components/ui-shell/header-menu.js';
import createReactCustomElementType, { booleanSerializer } from '../../globals/wrappers/createReactCustomElementType.js';
import PropTypes from 'prop-types';
import settings from 'carbon-components/es/globals/js/settings.js';
var prefix = settings.prefix;
export var descriptor = {
  expanded: {
    serialize: booleanSerializer,
  },
  triggerContent: {
    attribute: 'trigger-content',
  },
  menuLabel: {
    attribute: 'menu-label',
  },
};
export var propTypes = {
  expanded: PropTypes.bool,
  triggerContent: PropTypes.string,
  menuLabel: PropTypes.string,
};
const Component = createReactCustomElementType(''.concat(prefix, '-header-menu'), descriptor);
Component.propTypes = propTypes;
export default Component;

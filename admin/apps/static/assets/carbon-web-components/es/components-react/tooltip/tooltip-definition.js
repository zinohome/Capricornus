/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
export { TOOLTIP_ALIGNMENT, TOOLTIP_DIRECTION } from '././defs.js';
export { default as CustomElement } from '../../components/tooltip/tooltip-definition.js';
import createReactCustomElementType from '../../globals/wrappers/createReactCustomElementType.js';
import PropTypes from 'prop-types';
import settings from 'carbon-components/es/globals/js/settings.js';
var prefix = settings.prefix;
export var descriptor = {
  alignment: {},
  bodyText: {
    attribute: 'body-text',
  },
  direction: {},
};
export var propTypes = {
  alignment: PropTypes.string,
  bodyText: PropTypes.string,
  direction: PropTypes.string,
};
const Component = createReactCustomElementType(''.concat(prefix, '-tooltip-definition'), descriptor);
Component.propTypes = propTypes;
export default Component;

/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
export { BUTTON_KIND, BUTTON_SIZE, BUTTON_ICON_LAYOUT } from '././defs.js';
export { default as CustomElement } from '../../components/button/button.js';
import createReactCustomElementType, { booleanSerializer } from '../../globals/wrappers/createReactCustomElementType.js';
import PropTypes from 'prop-types';
import settings from 'carbon-components/es/globals/js/settings.js';
var prefix = settings.prefix;
export var descriptor = {
  autofocus: {
    serialize: booleanSerializer,
  },
  disabled: {
    serialize: booleanSerializer,
  },
  download: {},
  href: {},
  hreflang: {},
  iconLayout: {
    attribute: 'icon-layout',
  },
  isExpressive: {
    serialize: booleanSerializer,
  },
  kind: {},
  linkRole: {
    attribute: 'link-role',
  },
  ping: {},
  rel: {},
  size: {},
  target: {},
  type: {},
};
export var propTypes = {
  autofocus: PropTypes.bool,
  disabled: PropTypes.bool,
  download: PropTypes.string,
  href: PropTypes.string,
  hreflang: PropTypes.string,
  iconLayout: PropTypes.string,
  isExpressive: PropTypes.bool,
  kind: PropTypes.string,
  linkRole: PropTypes.string,
  ping: PropTypes.string,
  rel: PropTypes.string,
  size: PropTypes.string,
  target: PropTypes.string,
  type: PropTypes.string,
};
const Component = createReactCustomElementType(''.concat(prefix, '-btn'), descriptor);
Component.propTypes = propTypes;
export default Component;

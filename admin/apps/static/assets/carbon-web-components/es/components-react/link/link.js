/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
export { default as CustomElement } from '../../components/link/link.js';
import createReactCustomElementType, { booleanSerializer } from '../../globals/wrappers/createReactCustomElementType.js';
import PropTypes from 'prop-types';
import settings from 'carbon-components/es/globals/js/settings.js';
var prefix = settings.prefix;
export var descriptor = {
  disabled: {
    serialize: booleanSerializer,
  },
  download: {},
  href: {},
  hreflang: {},
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
  disabled: PropTypes.bool,
  download: PropTypes.string,
  href: PropTypes.string,
  hreflang: PropTypes.string,
  linkRole: PropTypes.string,
  ping: PropTypes.string,
  rel: PropTypes.string,
  size: PropTypes.string,
  target: PropTypes.string,
  type: PropTypes.string,
};
const Component = createReactCustomElementType(''.concat(prefix, '-link'), descriptor);
Component.propTypes = propTypes;
export default Component;

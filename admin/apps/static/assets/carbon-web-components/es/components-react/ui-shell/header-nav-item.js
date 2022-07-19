/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
export { default as CustomElement } from '../../components/ui-shell/header-nav-item.js';
import createReactCustomElementType from '../../globals/wrappers/createReactCustomElementType.js';
import PropTypes from 'prop-types';
import settings from 'carbon-components/es/globals/js/settings.js';
var prefix = settings.prefix;
export var descriptor = {
  href: {},
  title: {},
  role: {},
};
export var propTypes = {
  href: PropTypes.string,
  title: PropTypes.string,
  role: PropTypes.string,
};
const Component = createReactCustomElementType(''.concat(prefix, '-header-nav-item'), descriptor);
Component.propTypes = propTypes;
export default Component;

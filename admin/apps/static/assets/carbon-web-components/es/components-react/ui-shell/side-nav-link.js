/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
export { default as CustomElement } from '../../components/ui-shell/side-nav-link.js';
import createReactCustomElementType, { booleanSerializer } from '../../globals/wrappers/createReactCustomElementType.js';
import PropTypes from 'prop-types';
import settings from 'carbon-components/es/globals/js/settings.js';
var prefix = settings.prefix;
export var descriptor = {
  active: {
    serialize: booleanSerializer,
  },
  href: {},
  title: {},
};
export var propTypes = {
  active: PropTypes.bool,
  href: PropTypes.string,
  title: PropTypes.string,
};
const Component = createReactCustomElementType(''.concat(prefix, '-side-nav-link'), descriptor);
Component.propTypes = propTypes;
export default Component;

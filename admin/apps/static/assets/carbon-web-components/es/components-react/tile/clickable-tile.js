/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { descriptor as parentDescriptor } from '../link/link.js';
import { propTypes as parentPropTypes } from '../link/link.js';
export { default as CustomElement } from '../../components/tile/clickable-tile.js';
import createReactCustomElementType from '../../globals/wrappers/createReactCustomElementType.js';
import PropTypes from 'prop-types';
import settings from 'carbon-components/es/globals/js/settings.js';
var prefix = settings.prefix;
export var descriptor = Object.assign({}, parentDescriptor, {
  colorScheme: {
    attribute: 'color-scheme',
  },
  linkRole: {
    attribute: 'link-role',
  },
});
export var propTypes = Object.assign({}, parentPropTypes, {
  colorScheme: PropTypes.string,
  linkRole: PropTypes.string,
});
const Component = createReactCustomElementType(''.concat(prefix, '-clickable-tile'), descriptor);
Component.propTypes = propTypes;
export default Component;

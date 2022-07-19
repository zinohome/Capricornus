/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { descriptor as parentDescriptor } from '../button/button.js';
import { propTypes as parentPropTypes } from '../button/button.js';
export { default as CustomElement } from '../../components/modal/modal-footer-button.js';
import createReactCustomElementType from '../../globals/wrappers/createReactCustomElementType.js';
import PropTypes from 'prop-types';
import settings from 'carbon-components/es/globals/js/settings.js';
var prefix = settings.prefix;
export var descriptor = Object.assign({}, parentDescriptor, {});
export var propTypes = Object.assign({}, parentPropTypes, {});
const Component = createReactCustomElementType(''.concat(prefix, '-modal-footer-button'), descriptor);
Component.propTypes = propTypes;
export default Component;

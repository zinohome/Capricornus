/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
export { default as CustomElement } from '../../components/progress-indicator/progress-step-skeleton.js';
import createReactCustomElementType, { booleanSerializer } from '../../globals/wrappers/createReactCustomElementType.js';
import PropTypes from 'prop-types';
import settings from 'carbon-components/es/globals/js/settings.js';
var prefix = settings.prefix;
export var descriptor = {
  vertical: {
    serialize: booleanSerializer,
  },
};
export var propTypes = {
  vertical: PropTypes.bool,
};
const Component = createReactCustomElementType(''.concat(prefix, '-progress-step-skeleton'), descriptor);
Component.propTypes = propTypes;
export default Component;

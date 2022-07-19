/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
export { LOADING_TYPE } from '././defs.js';
export { default as CustomElement } from '../../components/loading/loading.js';
import createReactCustomElementType, { booleanSerializer } from '../../globals/wrappers/createReactCustomElementType.js';
import PropTypes from 'prop-types';
import settings from 'carbon-components/es/globals/js/settings.js';
var prefix = settings.prefix;
export var descriptor = {
  assistiveText: {
    attribute: 'assistive-text',
  },
  type: {},
  inactive: {
    serialize: booleanSerializer,
  },
};
export var propTypes = {
  assistiveText: PropTypes.string,
  type: PropTypes.string,
  inactive: PropTypes.bool,
};
const Component = createReactCustomElementType(''.concat(prefix, '-loading'), descriptor);
Component.propTypes = propTypes;
export default Component;

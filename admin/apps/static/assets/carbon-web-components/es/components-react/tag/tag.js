/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
export { TAG_SIZE, TAG_TYPE } from '././defs.js';
export { default as CustomElement } from '../../components/tag/tag.js';
import createReactCustomElementType, { booleanSerializer } from '../../globals/wrappers/createReactCustomElementType.js';
import PropTypes from 'prop-types';
import settings from 'carbon-components/es/globals/js/settings.js';
var prefix = settings.prefix;
export var descriptor = {
  disabled: {
    serialize: booleanSerializer,
  },
  size: {},
  type: {},
};
export var propTypes = {
  disabled: PropTypes.bool,
  size: PropTypes.string,
  type: PropTypes.string,
};
const Component = createReactCustomElementType(''.concat(prefix, '-tag'), descriptor);
Component.propTypes = propTypes;
export default Component;

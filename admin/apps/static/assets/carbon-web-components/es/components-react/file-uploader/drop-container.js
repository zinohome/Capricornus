/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
export { FORM_ELEMENT_COLOR_SCHEME as TILE_COLOR_SCHEME } from '../../globals/shared-enums.js';
export { default as CustomElement } from '../../components/file-uploader/drop-container.js';
import createReactCustomElementType, { booleanSerializer } from '../../globals/wrappers/createReactCustomElementType.js';
import PropTypes from 'prop-types';
import settings from 'carbon-components/es/globals/js/settings.js';
var prefix = settings.prefix;
export var descriptor = {
  accept: {},
  disabled: {
    serialize: booleanSerializer,
  },
  multiple: {
    serialize: booleanSerializer,
  },
  slot: {},
  onChange: {
    event: ''.concat(prefix, '-file-drop-container-changed'),
  },
};
export var propTypes = {
  accept: PropTypes.string,
  disabled: PropTypes.bool,
  multiple: PropTypes.bool,
  slot: PropTypes.string,
  onChange: PropTypes.func,
};
const Component = createReactCustomElementType(''.concat(prefix, '-file-drop-container'), descriptor);
Component.propTypes = propTypes;
export default Component;

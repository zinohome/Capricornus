/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
export { SEARCH_COLOR_SCHEME } from '././defs.js';
export { default as CustomElement } from '../../components/search/search.js';
import createReactCustomElementType, { booleanSerializer } from '../../globals/wrappers/createReactCustomElementType.js';
import PropTypes from 'prop-types';
import settings from 'carbon-components/es/globals/js/settings.js';
var prefix = settings.prefix;
export var descriptor = {
  closeButtonAssistiveText: {
    attribute: 'close-button-assistive-text',
  },
  colorScheme: {
    attribute: 'color-scheme',
  },
  disabled: {
    serialize: booleanSerializer,
  },
  labelText: {
    attribute: 'label-text',
  },
  name: {},
  placeholder: {},
  size: {},
  type: {},
  value: {},
  onInput: {
    event: ''.concat(prefix, '-search-input'),
  },
};
export var propTypes = {
  closeButtonAssistiveText: PropTypes.string,
  colorScheme: PropTypes.string,
  disabled: PropTypes.bool,
  labelText: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  size: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onInput: PropTypes.func,
};
const Component = createReactCustomElementType(''.concat(prefix, '-search'), descriptor);
Component.propTypes = propTypes;
export default Component;

/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
export { default as CustomElement } from '../../components/tile/selectable-tile.js';
import createReactCustomElementType, { booleanSerializer } from '../../globals/wrappers/createReactCustomElementType.js';
import PropTypes from 'prop-types';
import settings from 'carbon-components/es/globals/js/settings.js';
var prefix = settings.prefix;
export var descriptor = {
  checkmarkLabel: {
    attribute: 'checkmark-label',
  },
  colorScheme: {
    attribute: 'color-scheme',
  },
  name: {},
  selected: {
    serialize: booleanSerializer,
  },
  value: {},
};
export var propTypes = {
  checkmarkLabel: PropTypes.string,
  colorScheme: PropTypes.string,
  name: PropTypes.string,
  selected: PropTypes.bool,
  value: PropTypes.string,
};
const Component = createReactCustomElementType(''.concat(prefix, '-selectable-tile'), descriptor);
Component.propTypes = propTypes;
export default Component;

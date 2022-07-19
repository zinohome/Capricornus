/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
export { default as CustomElement } from '../../components/tile/expandable-tile.js';
import createReactCustomElementType, { booleanSerializer } from '../../globals/wrappers/createReactCustomElementType.js';
import PropTypes from 'prop-types';
import settings from 'carbon-components/es/globals/js/settings.js';
var prefix = settings.prefix;
export var descriptor = {
  colorScheme: {
    attribute: 'color-scheme',
  },
  expanded: {
    serialize: booleanSerializer,
  },
  onBeforeToggle: {
    event: ''.concat(prefix, '-expandable-tile-beingtoggled'),
  },
  onToggle: {
    event: ''.concat(prefix, '-expandable-tile-toggled'),
  },
};
export var propTypes = {
  colorScheme: PropTypes.string,
  expanded: PropTypes.bool,
  onBeforeToggle: PropTypes.func,
  onToggle: PropTypes.func,
};
const Component = createReactCustomElementType(''.concat(prefix, '-expandable-tile'), descriptor);
Component.propTypes = propTypes;
export default Component;

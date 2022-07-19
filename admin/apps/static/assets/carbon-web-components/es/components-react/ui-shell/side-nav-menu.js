/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
export { default as CustomElement } from '../../components/ui-shell/side-nav-menu.js';
import createReactCustomElementType, { booleanSerializer } from '../../globals/wrappers/createReactCustomElementType.js';
import PropTypes from 'prop-types';
import settings from 'carbon-components/es/globals/js/settings.js';
var prefix = settings.prefix;
export var descriptor = {
  active: {
    serialize: booleanSerializer,
  },
  expanded: {
    serialize: booleanSerializer,
  },
  forceCollapsed: {
    serialize: booleanSerializer,
    attribute: 'force-collapsed',
  },
  title: {},
  onBeforeToggle: {
    event: ''.concat(prefix, '-side-nav-menu-beingtoggled'),
  },
  onToggle: {
    event: ''.concat(prefix, '-side-nav-menu-toggled'),
  },
};
export var propTypes = {
  active: PropTypes.bool,
  expanded: PropTypes.bool,
  forceCollapsed: PropTypes.bool,
  title: PropTypes.string,
  onBeforeToggle: PropTypes.func,
  onToggle: PropTypes.func,
};
const Component = createReactCustomElementType(''.concat(prefix, '-side-nav-menu'), descriptor);
Component.propTypes = propTypes;
export default Component;

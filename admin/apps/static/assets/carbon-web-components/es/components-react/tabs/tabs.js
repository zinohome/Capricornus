/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
export { NAVIGATION_DIRECTION_NARROW, TABS_COLOR_SCHEME, TABS_KEYBOARD_ACTION, TABS_TYPE } from '././defs.js';
export { NAVIGATION_DIRECTION } from '../content-switcher/content-switcher.js';
import { descriptor as parentDescriptor } from '../content-switcher/content-switcher.js';
import { propTypes as parentPropTypes } from '../content-switcher/content-switcher.js';
export { default as CustomElement } from '../../components/tabs/tabs.js';
import createReactCustomElementType from '../../globals/wrappers/createReactCustomElementType.js';
import PropTypes from 'prop-types';
import settings from 'carbon-components/es/globals/js/settings.js';
var prefix = settings.prefix;
export var descriptor = Object.assign({}, parentDescriptor, {
  colorScheme: {
    attribute: 'color-scheme',
  },
  selectingItemsAssistiveText: {
    attribute: 'selecting-items-assistive-text',
  },
  selectedItemAssistiveText: {
    attribute: 'selected-item-assistive-text',
  },
  triggerContent: {
    attribute: 'trigger-content',
  },
  type: {},
  onBeforeSelect: {
    event: ''.concat(prefix, '-tabs-beingselected'),
  },
  onSelect: {
    event: ''.concat(prefix, '-tabs-selected'),
  },
});
export var propTypes = Object.assign({}, parentPropTypes, {
  colorScheme: PropTypes.string,
  selectingItemsAssistiveText: PropTypes.string,
  selectedItemAssistiveText: PropTypes.string,
  triggerContent: PropTypes.string,
  type: PropTypes.string,
  onBeforeSelect: PropTypes.func,
  onSelect: PropTypes.func,
});
const Component = createReactCustomElementType(''.concat(prefix, '-tabs'), descriptor);
Component.propTypes = propTypes;
export default Component;

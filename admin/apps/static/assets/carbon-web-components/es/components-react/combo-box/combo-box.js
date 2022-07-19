/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
export { DROPDOWN_COLOR_SCHEME, DROPDOWN_SIZE, DROPDOWN_TYPE } from '../dropdown/dropdown.js';
import { descriptor as parentDescriptor } from '../dropdown/dropdown.js';
import { propTypes as parentPropTypes } from '../dropdown/dropdown.js';
export { default as CustomElement } from '../../components/combo-box/combo-box.js';
import createReactCustomElementType from '../../globals/wrappers/createReactCustomElementType.js';
import PropTypes from 'prop-types';
import settings from 'carbon-components/es/globals/js/settings.js';
var prefix = settings.prefix;
export var descriptor = Object.assign({}, parentDescriptor, {
  clearSelectionLabel: {
    attribute: 'clear-selection-label',
  },
  inputLabel: {
    attribute: 'input-label',
  },
  itemMatches: {
    attribute: false,
  },
  onBeforeToggle: {
    event: ''.concat(prefix, '-combo-box-beingtoggled'),
  },
  onToggle: {
    event: ''.concat(prefix, '-combo-box-toggled'),
  },
  onBeforeSelect: {
    event: ''.concat(prefix, '-combo-box-beingselected'),
  },
  onSelect: {
    event: ''.concat(prefix, '-combo-box-selected'),
  },
});
export var propTypes = Object.assign({}, parentPropTypes, {
  clearSelectionLabel: PropTypes.string,
  inputLabel: PropTypes.string,
  itemMatches: PropTypes.string,
  onBeforeToggle: PropTypes.func,
  onToggle: PropTypes.func,
  onBeforeSelect: PropTypes.func,
  onSelect: PropTypes.func,
});
const Component = createReactCustomElementType(''.concat(prefix, '-combo-box'), descriptor);
Component.propTypes = propTypes;
export default Component;

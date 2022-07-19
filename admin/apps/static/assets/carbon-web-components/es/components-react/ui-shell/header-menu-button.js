/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
export { default as CustomElement } from '../../components/ui-shell/header-menu-button.js';
import createReactCustomElementType, { booleanSerializer } from '../../globals/wrappers/createReactCustomElementType.js';
import PropTypes from 'prop-types';
import settings from 'carbon-components/es/globals/js/settings.js';
var prefix = settings.prefix;
export var descriptor = {
  active: {
    serialize: booleanSerializer,
  },
  buttonLabelActive: {
    attribute: 'button-label-active',
  },
  buttonLabelInactive: {
    attribute: 'button-label-inactive',
  },
  collapseMode: {
    attribute: 'collapse-mode',
  },
  disabled: {
    serialize: booleanSerializer,
  },
  usageMode: {
    attribute: 'usage-mode',
  },
  onToggle: {
    event: ''.concat(prefix, '-header-menu-button-toggled'),
  },
};
export var propTypes = {
  active: PropTypes.bool,
  buttonLabelActive: PropTypes.string,
  buttonLabelInactive: PropTypes.string,
  collapseMode: PropTypes.string,
  disabled: PropTypes.bool,
  usageMode: PropTypes.string,
  onToggle: PropTypes.func,
};
const Component = createReactCustomElementType(''.concat(prefix, '-header-menu-button'), descriptor);
Component.propTypes = propTypes;
export default Component;

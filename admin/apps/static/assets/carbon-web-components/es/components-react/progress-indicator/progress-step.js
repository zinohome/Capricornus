/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
export { PROGRESS_STEP_STAT } from '././defs.js';
export { default as CustomElement } from '../../components/progress-indicator/progress-step.js';
import createReactCustomElementType, { booleanSerializer } from '../../globals/wrappers/createReactCustomElementType.js';
import PropTypes from 'prop-types';
import settings from 'carbon-components/es/globals/js/settings.js';
var prefix = settings.prefix;
export var descriptor = {
  disabled: {
    serialize: booleanSerializer,
  },
  iconLabel: {
    attribute: 'icon-label',
  },
  labelText: {
    attribute: 'label-text',
  },
  secondaryLabelText: {
    attribute: 'secondary-label-text',
  },
  state: {},
  vertical: {
    serialize: booleanSerializer,
  },
};
export var propTypes = {
  disabled: PropTypes.bool,
  iconLabel: PropTypes.string,
  labelText: PropTypes.string,
  secondaryLabelText: PropTypes.string,
  state: PropTypes.string,
  vertical: PropTypes.bool,
};
const Component = createReactCustomElementType(''.concat(prefix, '-progress-step'), descriptor);
Component.propTypes = propTypes;
export default Component;

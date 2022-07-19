/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
export { default as CustomElement } from '../../components/copy-button/copy-button.js';
import createReactCustomElementType, { numberSerializer } from '../../globals/wrappers/createReactCustomElementType.js';
import PropTypes from 'prop-types';
import settings from 'carbon-components/es/globals/js/settings.js';
var prefix = settings.prefix;
export var descriptor = {
  buttonAssistiveText: {
    attribute: 'button-assistive-text',
  },
  feedbackText: {
    attribute: 'feedback-text',
  },
  feedbackTimeout: {
    serialize: numberSerializer,
    attribute: 'feedback-timeout',
  },
};
export var propTypes = {
  buttonAssistiveText: PropTypes.string,
  feedbackText: PropTypes.string,
  feedbackTimeout: PropTypes.number,
};
const Component = createReactCustomElementType(''.concat(prefix, '-copy-button'), descriptor);
Component.propTypes = propTypes;
export default Component;

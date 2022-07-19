/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
export { CODE_SNIPPET_COLOR_SCHEME, CODE_SNIPPET_TYPE } from '././defs.js';
export { default as CustomElement } from '../../components/code-snippet/code-snippet.js';
import createReactCustomElementType, { numberSerializer } from '../../globals/wrappers/createReactCustomElementType.js';
import PropTypes from 'prop-types';
import settings from 'carbon-components/es/globals/js/settings.js';
var prefix = settings.prefix;
export var descriptor = {
  codeAssistiveText: {
    attribute: 'code-assistive-text',
  },
  collapseButtonText: {
    attribute: 'collapse-button-text',
  },
  colorScheme: {
    attribute: 'color-scheme',
  },
  copyButtonAssistiveText: {
    attribute: 'copy-button-assistive-text',
  },
  copyButtonFeedbackText: {
    attribute: 'copy-button-feedback-text',
  },
  copyButtonFeedbackTimeout: {
    serialize: numberSerializer,
    attribute: 'copy-button-feedback-timeout',
  },
  expandButtonText: {
    attribute: 'expand-button-text',
  },
  type: {},
};
export var propTypes = {
  codeAssistiveText: PropTypes.string,
  collapseButtonText: PropTypes.string,
  colorScheme: PropTypes.string,
  copyButtonAssistiveText: PropTypes.string,
  copyButtonFeedbackText: PropTypes.string,
  copyButtonFeedbackTimeout: PropTypes.number,
  expandButtonText: PropTypes.string,
  type: PropTypes.string,
};
const Component = createReactCustomElementType(''.concat(prefix, '-code-snippet'), descriptor);
Component.propTypes = propTypes;
export default Component;

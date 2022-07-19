/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
export { default as CustomElement } from '../../components/pagination/pages-select.js';
import createReactCustomElementType, { numberSerializer } from '../../globals/wrappers/createReactCustomElementType.js';
import PropTypes from 'prop-types';
import settings from 'carbon-components/es/globals/js/settings.js';
var prefix = settings.prefix;
export var descriptor = {
  formatLabelText: {
    attribute: false,
  },
  formatSupplementalText: {
    attribute: false,
  },
  total: {
    serialize: numberSerializer,
  },
  value: {
    serialize: numberSerializer,
  },
  onChange: {
    event: ''.concat(prefix, '-pages-select-changed'),
  },
};
export var propTypes = {
  formatLabelText: PropTypes.string,
  formatSupplementalText: PropTypes.string,
  total: PropTypes.number,
  value: PropTypes.number,
  onChange: PropTypes.func,
};
const Component = createReactCustomElementType(''.concat(prefix, '-pages-select'), descriptor);
Component.propTypes = propTypes;
export default Component;

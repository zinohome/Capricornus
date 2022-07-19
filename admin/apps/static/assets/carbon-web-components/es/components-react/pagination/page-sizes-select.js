/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
export { default as CustomElement } from '../../components/pagination/page-sizes-select.js';
import createReactCustomElementType, { numberSerializer } from '../../globals/wrappers/createReactCustomElementType.js';
import PropTypes from 'prop-types';
import settings from 'carbon-components/es/globals/js/settings.js';
var prefix = settings.prefix;
export var descriptor = {
  labelText: {
    attribute: 'label-text',
  },
  value: {
    serialize: numberSerializer,
  },
  onChange: {
    event: ''.concat(prefix, '-page-sizes-select-changed'),
  },
};
export var propTypes = {
  labelText: PropTypes.string,
  value: PropTypes.number,
  onChange: PropTypes.func,
};
const Component = createReactCustomElementType(''.concat(prefix, '-page-sizes-select'), descriptor);
Component.propTypes = propTypes;
export default Component;

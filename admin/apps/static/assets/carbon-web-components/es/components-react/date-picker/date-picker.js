/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
export { default as CustomElement } from '../../components/date-picker/date-picker.js';
import createReactCustomElementType, { booleanSerializer } from '../../globals/wrappers/createReactCustomElementType.js';
import PropTypes from 'prop-types';
import settings from 'carbon-components/es/globals/js/settings.js';
var prefix = settings.prefix;
export var descriptor = {
  dateFormat: {
    attribute: 'date-format',
  },
  disabled: {
    serialize: booleanSerializer,
  },
  locale: {
    attribute: false,
  },
  enabledRange: {
    attribute: 'enabled-range',
  },
  name: {},
  open: {
    serialize: booleanSerializer,
  },
  value: {},
  onFlatpickrError: {
    event: ''.concat(prefix, '-date-picker-flatpickr-error'),
  },
  onChange: {
    event: ''.concat(prefix, '-date-picker-changed'),
  },
};
export var propTypes = {
  dateFormat: PropTypes.string,
  disabled: PropTypes.bool,
  locale: PropTypes.string,
  enabledRange: PropTypes.string,
  name: PropTypes.string,
  open: PropTypes.bool,
  value: PropTypes.string,
  onFlatpickrError: PropTypes.func,
  onChange: PropTypes.func,
};
const Component = createReactCustomElementType(''.concat(prefix, '-date-picker'), descriptor);
Component.propTypes = propTypes;
export default Component;

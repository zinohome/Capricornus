/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
export { default as CustomElement } from '../../components/pagination/pagination.js';
import createReactCustomElementType, {
  booleanSerializer,
  numberSerializer,
} from '../../globals/wrappers/createReactCustomElementType.js';
import PropTypes from 'prop-types';
import settings from 'carbon-components/es/globals/js/settings.js';
var prefix = settings.prefix;
export var descriptor = {
  formatStatusWithDeterminateTotal: {
    attribute: false,
  },
  formatStatusWithIndeterminateTotal: {
    attribute: false,
  },
  atLastPage: {
    serialize: booleanSerializer,
    attribute: 'at-last-page',
  },
  disabled: {
    serialize: booleanSerializer,
  },
  nextButtonText: {
    attribute: 'next-button-text',
  },
  pageSize: {
    serialize: numberSerializer,
    attribute: 'page-size',
  },
  pageSizeLabelText: {
    attribute: 'page-size-label-text',
  },
  prevButtonText: {
    attribute: 'prev-button-text',
  },
  start: {
    serialize: numberSerializer,
  },
  total: {
    serialize: numberSerializer,
  },
  onChangeCurrent: {
    event: ''.concat(prefix, '-pagination-changed-current'),
  },
  onChangePage: {
    event: ''.concat(prefix, '-pages-select-changed'),
  },
  onChangePageSize: {
    event: ''.concat(prefix, '-page-sizes-select-changed'),
  },
};
export var propTypes = {
  formatStatusWithDeterminateTotal: PropTypes.string,
  formatStatusWithIndeterminateTotal: PropTypes.string,
  atLastPage: PropTypes.bool,
  disabled: PropTypes.bool,
  nextButtonText: PropTypes.string,
  pageSize: PropTypes.number,
  pageSizeLabelText: PropTypes.string,
  prevButtonText: PropTypes.string,
  start: PropTypes.number,
  total: PropTypes.number,
  onChangeCurrent: PropTypes.func,
  onChangePage: PropTypes.func,
  onChangePageSize: PropTypes.func,
};
const Component = createReactCustomElementType(''.concat(prefix, '-pagination'), descriptor);
Component.propTypes = propTypes;
export default Component;

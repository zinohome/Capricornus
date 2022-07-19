/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
export { TAG_SIZE, TAG_TYPE } from '././defs.js';
export { default as CustomElement } from '../../components/tag/filter-tag.js';
import createReactCustomElementType, { booleanSerializer } from '../../globals/wrappers/createReactCustomElementType.js';
import PropTypes from 'prop-types';
import settings from 'carbon-components/es/globals/js/settings.js';
var prefix = settings.prefix;
export var descriptor = {
  title: {},
  disabled: {
    serialize: booleanSerializer,
  },
  open: {
    serialize: booleanSerializer,
  },
  size: {},
  type: {},
  onBeforeClose: {
    event: ''.concat(prefix, '-filter-tag-beingclosed'),
  },
  onClose: {
    event: ''.concat(prefix, '-filter-tag-closed'),
  },
};
export var propTypes = {
  title: PropTypes.string,
  disabled: PropTypes.bool,
  open: PropTypes.bool,
  size: PropTypes.string,
  type: PropTypes.string,
  onBeforeClose: PropTypes.func,
  onClose: PropTypes.func,
};
const Component = createReactCustomElementType(''.concat(prefix, '-filter-tag'), descriptor);
Component.propTypes = propTypes;
export default Component;

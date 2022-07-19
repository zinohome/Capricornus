/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
export { MODAL_SIZE } from '././defs.js';
export { default as CustomElement } from '../../components/modal/modal.js';
import createReactCustomElementType, { booleanSerializer } from '../../globals/wrappers/createReactCustomElementType.js';
import PropTypes from 'prop-types';
import settings from 'carbon-components/es/globals/js/settings.js';
var prefix = settings.prefix;
export var descriptor = {
  containerClass: {
    attribute: 'container-class',
  },
  open: {
    serialize: booleanSerializer,
  },
  size: {},
  onBeforeClose: {
    event: ''.concat(prefix, '-modal-beingclosed'),
  },
  onClose: {
    event: ''.concat(prefix, '-modal-closed'),
  },
};
export var propTypes = {
  containerClass: PropTypes.string,
  open: PropTypes.bool,
  size: PropTypes.string,
  onBeforeClose: PropTypes.func,
  onClose: PropTypes.func,
};
const Component = createReactCustomElementType(''.concat(prefix, '-modal'), descriptor);
Component.propTypes = propTypes;
export default Component;

/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
export { NOTIFICATION_KIND, NOTIFICATION_TYPE } from '././defs.js';
export { default as CustomElement } from '../../components/notification/inline-notification.js';
import createReactCustomElementType, {
  booleanSerializer,
  numberSerializer,
} from '../../globals/wrappers/createReactCustomElementType.js';
import PropTypes from 'prop-types';
import settings from 'carbon-components/es/globals/js/settings.js';
var prefix = settings.prefix;
export var descriptor = {
  closeButtonLabel: {
    attribute: 'close-button-label',
  },
  hideCloseButton: {
    serialize: booleanSerializer,
    attribute: 'hide-close-button',
  },
  iconLabel: {
    attribute: 'icon-label',
  },
  kind: {},
  lowContrast: {
    serialize: booleanSerializer,
    attribute: 'low-contrast',
  },
  open: {
    serialize: booleanSerializer,
  },
  timeout: {
    serialize: numberSerializer,
  },
  subtitle: {},
  title: {},
  onBeforeClose: {
    event: ''.concat(prefix, '-notification-beingclosed'),
  },
  onClose: {
    event: ''.concat(prefix, '-notification-closed'),
  },
};
export var propTypes = {
  closeButtonLabel: PropTypes.string,
  hideCloseButton: PropTypes.bool,
  iconLabel: PropTypes.string,
  kind: PropTypes.string,
  lowContrast: PropTypes.bool,
  open: PropTypes.bool,
  timeout: PropTypes.number,
  subtitle: PropTypes.string,
  title: PropTypes.string,
  onBeforeClose: PropTypes.func,
  onClose: PropTypes.func,
};
const Component = createReactCustomElementType(''.concat(prefix, '-inline-notification'), descriptor);
Component.propTypes = propTypes;
export default Component;

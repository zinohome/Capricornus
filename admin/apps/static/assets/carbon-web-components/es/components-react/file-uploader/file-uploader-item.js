/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
export { FILE_UPLOADER_ITEM_SIZE, FILE_UPLOADER_ITEM_STATE } from '././defs.js';
export { default as CustomElement } from '../../components/file-uploader/file-uploader-item.js';
import createReactCustomElementType, { booleanSerializer } from '../../globals/wrappers/createReactCustomElementType.js';
import PropTypes from 'prop-types';
import settings from 'carbon-components/es/globals/js/settings.js';
var prefix = settings.prefix;
export var descriptor = {
  deleteAssistiveText: {
    attribute: 'delete-assistive-text',
  },
  invalid: {
    serialize: booleanSerializer,
  },
  size: {},
  state: {},
  uploadingAssistiveText: {
    attribute: 'uploading-assistive-text',
  },
  uploadedAssistiveText: {
    attribute: 'uploaded-assistive-text',
  },
  validityMessage: {
    attribute: 'validity-message',
  },
  onBeforeDelete: {
    event: ''.concat(prefix, '-file-uploader-item-beingdeleted'),
  },
  onDelete: {
    event: ''.concat(prefix, '-file-uploader-item-deleted'),
  },
};
export var propTypes = {
  deleteAssistiveText: PropTypes.string,
  invalid: PropTypes.bool,
  size: PropTypes.string,
  state: PropTypes.string,
  uploadingAssistiveText: PropTypes.string,
  uploadedAssistiveText: PropTypes.string,
  validityMessage: PropTypes.string,
  onBeforeDelete: PropTypes.func,
  onDelete: PropTypes.func,
};
const Component = createReactCustomElementType(''.concat(prefix, '-file-uploader-item'), descriptor);
Component.propTypes = propTypes;
export default Component;

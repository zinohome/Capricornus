import _decorate from "@babel/runtime/helpers/esm/decorate";

let _ = t => t,
    _t,
    _t2,
    _t3;

/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { html, property, customElement, LitElement } from 'lit-element';
import CheckmarkFilled16 from "../../icons/checkmark--filled/16";
import Close16 from "../../icons/close/16";
import WarningFilled16 from "../../icons/warning--filled/16";
import settings from 'carbon-components/es/globals/js/settings';
import { LOADING_TYPE } from '../loading/loading';
import { FILE_UPLOADER_ITEM_SIZE, FILE_UPLOADER_ITEM_STATE } from './defs';
import styles from "././file-uploader.css.js";
export { FILE_UPLOADER_ITEM_SIZE, FILE_UPLOADER_ITEM_STATE };
const {
  prefix
} = settings;
/**
 * File uploader item.
 * @element bx-file-uploader-item
 * @slot validity-message The validity message.
 * @slot validity-message-supplement The supplemental validity message.
 * @fires bx-file-uploader-item-beingdeleted
 *   The custom event fired before this file uploader item is being deleted upon a user gesture.
 *   Cancellation of this event stops the user-initiated action of deleting this file uploader item.
 * @fires bx-file-uploader-item-deleted - The custom event fired after this file uploader item is deleted upon a user gesture.
 */

let BXFileUploaderItem = _decorate([customElement(`${prefix}-file-uploader-item`)], function (_initialize, _LitElement) {
  class BXFileUploaderItem extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXFileUploaderItem,
    d: [{
      kind: "method",
      key: "_handleClickDeleteButton",
      value:
      /**
       * Handles `click` event on the delete button.
       */
      function _handleClickDeleteButton() {
        const init = {
          bubbles: true,
          cancelable: true,
          composed: true
        };
        const {
          eventBeforeDelete,
          eventDelete
        } = this.constructor;

        if (this.dispatchEvent(new CustomEvent(eventBeforeDelete, init))) {
          this.dispatchEvent(new CustomEvent(eventDelete, init));
        }
      }
      /**
       * @returns The content showing the editing UI of this file uploader item.
       */

    }, {
      kind: "method",
      key: "_renderEditing",
      value: function _renderEditing() {
        const {
          deleteAssistiveText,
          invalid,
          _handleClickDeleteButton: handleClickDeleteButton
        } = this;
        return html(_t || (_t = _` ${0} <button type="button" aria-label="${0}" class="${0}--file-close" @click="${0}"> ${0} </button> `), !invalid ? undefined : WarningFilled16({
          class: `${prefix}--file-invalid`
        }), deleteAssistiveText, prefix, handleClickDeleteButton, Close16());
      }
      /**
       * @returns The content showing this file uploader's file uploading status as in progress.
       */

    }, {
      kind: "method",
      key: "_renderUploading",
      value: function _renderUploading() {
        const {
          uploadingAssistiveText
        } = this;
        return html(_t2 || (_t2 = _` <bx-loading assistive-text="${0}" type="${0}"></bx-loading> `), uploadingAssistiveText, LOADING_TYPE.SMALL);
      }
      /**
       * @returns The content showing this file uploader's file uploading status as complete.
       */

    }, {
      kind: "method",
      key: "_renderUploaded",
      value: function _renderUploaded() {
        const {
          uploadedAssistiveText
        } = this;
        return CheckmarkFilled16({
          class: `${prefix}--file-complete`,
          'aria-label': uploadedAssistiveText
        });
      }
      /**
       * @returns The content showing this file uploader's status.
       */

    }, {
      kind: "method",
      key: "_renderStatus",
      value: function _renderStatus() {
        const {
          state
        } = this;

        switch (state) {
          case FILE_UPLOADER_ITEM_STATE.EDITING:
            return this._renderEditing();

          case FILE_UPLOADER_ITEM_STATE.UPLOADING:
            return this._renderUploading();

          case FILE_UPLOADER_ITEM_STATE.UPLOADED:
            return this._renderUploaded();

          default:
            return undefined;
        }
      }
      /**
       * The `aria-label` attribute for the icon to delete this file uploader item.
       */

    }, {
      kind: "field",
      decorators: [property({
        attribute: 'delete-assistive-text'
      })],
      key: "deleteAssistiveText",

      value() {
        return 'Delete this file';
      }

    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "invalid",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [property({
        reflect: true
      })],
      key: "size",

      value() {
        return FILE_UPLOADER_ITEM_SIZE.REGULAR;
      }

    }, {
      kind: "field",
      decorators: [property({
        reflect: true
      })],
      key: "state",

      value() {
        return FILE_UPLOADER_ITEM_STATE.UPLOADING;
      }

    }, {
      kind: "field",
      decorators: [property({
        attribute: 'uploading-assistive-text'
      })],
      key: "uploadingAssistiveText",

      value() {
        return 'Uploading';
      }

    }, {
      kind: "field",
      decorators: [property({
        attribute: 'uploaded-assistive-text'
      })],
      key: "uploadedAssistiveText",

      value() {
        return 'Uploaded';
      }

    }, {
      kind: "field",
      decorators: [property({
        attribute: 'validity-message'
      })],
      key: "validityMessage",

      value() {
        return '';
      }

    }, {
      kind: "method",
      key: "render",
      value:
      /**
       * Controls the invalid state and visibility of the `validityMessage`.
       */

      /**
       * The size of this file uploader item.
       */

      /**
       * The state of this file uploader item.
       */

      /**
       * The `aria-label` attribute for the icon to indicate file uploading is in progress.
       */

      /**
       * The `aria-label` attribute for the icon to indicate file uploading is complete.
       */

      /**
       * The validity message.
       */
      function render() {
        const {
          validityMessage
        } = this;
        return html(_t3 || (_t3 = _` <p class="${0}--file-filename"><slot></slot></p> <span class="${0}--file__state-container">${0}</span> <div class="${0}--form-requirement"> <div class="${0}--form-requirement__title"> <slot name="validity-message">${0}</slot> </div> <p class="${0}--form-requirement__supplement"> <slot name="validity-message-supplement"></slot> </p> </div> `), prefix, prefix, this._renderStatus(), prefix, prefix, validityMessage, prefix);
      }
      /**
       * The name of the custom event fired before this file uplodaer item is being deleted upon a user gesture.
       * Cancellation of this event stops the user-initiated action of deleting this file uploader item.
       */

    }, {
      kind: "get",
      static: true,
      key: "eventBeforeDelete",
      value: function eventBeforeDelete() {
        return `${prefix}-file-uploader-item-beingdeleted`;
      }
      /**
       * The name of the custom event fired after this file uplodaer item is deleted upon a user gesture.
       */

    }, {
      kind: "get",
      static: true,
      key: "eventDelete",
      value: function eventDelete() {
        return `${prefix}-file-uploader-item-deleted`;
      }
    }, {
      kind: "field",
      static: true,
      key: "styles",

      value() {
        return styles;
      }

    }]
  };
}, LitElement);

export default BXFileUploaderItem;
//# sourceMappingURL=file-uploader-item.js.map

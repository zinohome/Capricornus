import _decorate from "@babel/runtime/helpers/esm/decorate";

let _ = t => t,
    _t;

/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { classMap } from 'lit-html/directives/class-map';
import { html, property, customElement, LitElement } from 'lit-element';
import settings from 'carbon-components/es/globals/js/settings';
import HostListenerMixin from '../../globals/mixins/host-listener';
import HostListener from '../../globals/decorators/host-listener';
import ifNonEmpty from '../../globals/directives/if-non-empty';
import styles from "././file-uploader.css.js";
export { FORM_ELEMENT_COLOR_SCHEME as TILE_COLOR_SCHEME } from '../../globals/shared-enums';
const {
  prefix
} = settings;
/**
 * The value to set to `event.dataTransfer.dropEffect`, keyed by the event nane.
 */

const dropEffects = {
  dragover: 'copy',
  dragleave: 'move'
};
/**
 * File drop container.
 * @element bx-file-drop-container
 * @fires bx-file-drop-container-changed The custom event fired when there is a user gesture to select files to upload.
 */

let BXFileDropContainer = _decorate([customElement(`${prefix}-file-drop-container`)], function (_initialize, _HostListenerMixin) {
  class BXFileDropContainer extends _HostListenerMixin {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXFileDropContainer,
    d: [{
      kind: "field",
      key: "_active",

      value() {
        return false;
      }

    }, {
      kind: "method",
      key: "_handleChange",
      value:
      /**
       * `true` to show the active state of this UI.
       */

      /**
       * Handles user gesture to select files to upload.
       * @param event The event.
       */
      function _handleChange(event) {
        var _this$shadowRoot;

        const addedFiles = this._getFiles(event);

        const {
          eventChange,
          selectorInput
        } = this.constructor;
        this.dispatchEvent(new CustomEvent(eventChange, {
          bubbles: true,
          composed: true,
          detail: {
            addedFiles
          }
        }));
        const fileInput = this === null || this === void 0 ? void 0 : (_this$shadowRoot = this.shadowRoot) === null || _this$shadowRoot === void 0 ? void 0 : _this$shadowRoot.querySelector(selectorInput);

        if (fileInput) {
          fileInput.value = ''; // carbon-web-components#904
        }
      }
      /**
       * Handles `dragover`, `dragleave` and `drop` events.
       * @param event The event.
       */

    }, {
      kind: "method",
      decorators: [HostListener('dragover'), HostListener('dragleave'), HostListener('drop')],
      key: "_handleDrag",
      value: function _handleDrag(event) {
        event.preventDefault(); // Prevents page navigation upon dropping

        if (this.disabled) {
          return;
        }

        const {
          dataTransfer,
          type
        } = event;
        const dropEffect = dropEffects[type];

        if (dataTransfer && dropEffect) {
          dataTransfer.dropEffect = dropEffect;
        }

        this._active = type === 'dragover';

        if (type === 'drop') {
          this._handleChange(event);
        }

        this.requestUpdate();
      }
      /**
       * @param event The event.
       * @returns The list of files user chose to upload.
       */

    }, {
      kind: "method",
      key: "_getFiles",
      value: function _getFiles(event) {
        var _ref;

        const {
          files
        } = (_ref = event.type === 'drop' ? event.dataTransfer : event.target) !== null && _ref !== void 0 ? _ref : {};
        const {
          accept
        } = this;

        if (!accept || !/^(change|drop)$/.test(event.type)) {
          return Array.from(files !== null && files !== void 0 ? files : []);
        }

        const acceptedTypes = new Set(accept.split(' '));
        return Array.prototype.filter.call(files, ({
          name,
          type: mimeType = ''
        }) => {
          var _fileExtensionRegExp$;

          const fileExtensionRegExp = /\.[^.]+$/;
          const hasFileExtension = fileExtensionRegExp.test(name);
          const [fileExtension] = !hasFileExtension ? [undefined] : (_fileExtensionRegExp$ = fileExtensionRegExp.exec(name)) !== null && _fileExtensionRegExp$ !== void 0 ? _fileExtensionRegExp$ : [];
          return acceptedTypes.has(mimeType) || fileExtension && acceptedTypes.has(fileExtension);
        });
      }
      /**
       * The file types the file input should accept, separated by space.
       */

    }, {
      kind: "field",
      decorators: [property()],
      key: "accept",

      value() {
        return '';
      }

    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "disabled",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "multiple",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [property({
        reflect: true
      })],
      key: "slot",

      value() {
        return 'drop-container';
      }

    }, {
      kind: "method",
      key: "render",
      value:
      /**
       * `true` if this drop container should be disabled.
       */

      /**
       * `true` if this drop container should accept more than one files at once.
       * Note that even with `false` set here, user _can_ select multiple files one by one.
       */

      /**
       * The shadow DOM slot to put this drop container in.
       */
      function render() {
        const {
          accept,
          disabled,
          multiple,
          _active: active,
          _handleChange: handleChange
        } = this;
        const labelClasses = classMap({
          [`${prefix}--file-browse-btn`]: true,
          [`${prefix}--file-browse-btn--disabled`]: disabled
        });
        const dropareaClasses = classMap({
          [`${prefix}--file__drop-container`]: true,
          [`${prefix}--file__drop-container--drag-over`]: active
        });
        return html(_t || (_t = _` <label class="${0}" for="file" tabindex="0"> <div class="${0}" role="button"> <slot></slot> <input id="file" type="file" class="${0}--file-input" tabindex="-1" accept="${0}" ?disabled="${0}" ?multiple="${0}" @change="${0}"> </div> </label> `), labelClasses, dropareaClasses, prefix, ifNonEmpty(accept), disabled, multiple, handleChange);
      }
      /**
       * The name of the custom event fired when there is a user gesture to select files to upload.
       */

    }, {
      kind: "get",
      static: true,
      key: "eventChange",
      value: function eventChange() {
        return `${prefix}-file-drop-container-changed`;
      }
      /**
       * A selector that will return the file `<input>`.
       */

    }, {
      kind: "get",
      static: true,
      key: "selectorInput",
      value: function selectorInput() {
        return `.${prefix}--file-input`;
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
}, HostListenerMixin(LitElement));

export default BXFileDropContainer;
//# sourceMappingURL=drop-container.js.map

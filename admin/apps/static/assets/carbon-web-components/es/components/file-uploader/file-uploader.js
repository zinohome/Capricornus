import _decorate from "@babel/runtime/helpers/esm/decorate";

let _ = t => t,
    _t;

/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { html, property, customElement, LitElement } from 'lit-element';
import settings from 'carbon-components/es/globals/js/settings';
import styles from "././file-uploader.css.js";
const {
  prefix
} = settings;
/**
 * The shell UI for file uploader.
 * @element bx-file-uploader
 * @slot helper-text The helper text.
 * @slot label-text The label text.
 */

let BXFileUploader = _decorate([customElement(`${prefix}-file-uploader`)], function (_initialize, _LitElement) {
  class BXFileUploader extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXFileUploader,
    d: [{
      kind: "field",
      decorators: [property({
        attribute: 'helper-text'
      })],
      key: "helperText",

      value() {
        return '';
      }

    }, {
      kind: "field",
      decorators: [property({
        attribute: 'label-text'
      })],
      key: "labelText",

      value() {
        return '';
      }

    }, {
      kind: "method",
      key: "render",
      value:
      /**
       * The helper text.
       */

      /**
       * The label text.
       */
      function render() {
        const {
          helperText,
          labelText
        } = this;
        return html(_t || (_t = _` <strong class="${0}--file--label"><slot name="label-text">${0}</slot></strong> <p class="${0}--label-description"><slot name="helperText-text">${0}</slot></p> <slot name="drop-container"></slot> <div class="${0}--file-container"> <slot></slot> </div> `), prefix, labelText, prefix, helperText, prefix);
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

export default BXFileUploader;
//# sourceMappingURL=file-uploader.js.map

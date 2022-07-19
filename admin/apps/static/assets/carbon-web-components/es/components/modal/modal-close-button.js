import _decorate from "@babel/runtime/helpers/esm/decorate";

let _ = t => t,
    _t;

/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { html, property, customElement, LitElement } from 'lit-element';
import Close20 from "../../icons/close/20";
import settings from 'carbon-components/es/globals/js/settings';
import ifNonNull from '../../globals/directives/if-non-null';
import FocusMixin from '../../globals/mixins/focus';
import styles from "././modal.css.js";
const {
  prefix
} = settings;
/**
 * Modal close button.
 * @element bx-modal-close-button
 * @csspart button The button.
 * @csspart close-icon The close icon.
 */

let BXModalCloseButton = _decorate([customElement(`${prefix}-modal-close-button`)], function (_initialize, _FocusMixin) {
  class BXModalCloseButton extends _FocusMixin {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXModalCloseButton,
    d: [{
      kind: "field",
      decorators: [property({
        attribute: 'assistive-text'
      })],
      key: "assistiveText",

      value() {
        return 'Close';
      }

    }, {
      kind: "method",
      key: "createRenderRoot",
      value:
      /**
       * The assistive text for the button.
       */
      function createRenderRoot() {
        var _$exec;

        return this.attachShadow({
          mode: 'open',
          delegatesFocus: Number(((_$exec = /Safari\/(\d+)/.exec(navigator.userAgent)) !== null && _$exec !== void 0 ? _$exec : ['', 0])[1]) <= 537
        });
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const {
          assistiveText
        } = this;
        return html(_t || (_t = _` <button part="button" aria-label="${0}" class="${0}--modal-close" title="${0}"> ${0} </button> `), ifNonNull(assistiveText), prefix, ifNonNull(assistiveText), Close20({
          part: 'close-icon',
          class: `${prefix}--modal-close__icon`
        }));
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
}, FocusMixin(LitElement));

export default BXModalCloseButton;
//# sourceMappingURL=modal-close-button.js.map

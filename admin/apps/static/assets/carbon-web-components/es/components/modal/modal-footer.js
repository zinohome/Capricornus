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
import { classMap } from 'lit-html/directives/class-map';
import { html, customElement, LitElement } from 'lit-element';
import settings from 'carbon-components/es/globals/js/settings';
import styles from "././modal.css.js";
const {
  prefix
} = settings;
/**
 * Modal footer.
 * @element bx-modal-footer
 */

let BXModalFooter = _decorate([customElement(`${prefix}-modal-footer`)], function (_initialize, _LitElement) {
  class BXModalFooter extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXModalFooter,
    d: [{
      kind: "field",
      key: "_hasMoreThanTwoButtons",

      value() {
        return false;
      }

    }, {
      kind: "method",
      key: "_handleSlotChange",
      value:
      /**
       * `true` if this modal footer has more than two buttons.
       */

      /**
       * Handles `slotchange` event.
       */
      function _handleSlotChange(event) {
        const {
          selectorButtons
        } = this.constructor;
        this._hasMoreThanTwoButtons = event.target.assignedNodes().filter(node => node.nodeType === Node.ELEMENT_NODE && node.matches(selectorButtons)).length > 2;
        this.requestUpdate();
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const {
          _hasMoreThanTwoButtons: hasMoreThanTwoButtons,
          _handleSlotChange: handleSlotChange
        } = this;
        const classes = classMap({
          [`${prefix}--modal-footer`]: true,
          [`${prefix}--modal-footer--three-button`]: hasMoreThanTwoButtons
        });
        return html(_t || (_t = _` <div class="${0}"> <slot @slotchange="${0}"></slot> </div> `), classes, handleSlotChange);
      }
      /**
       * A selector that selects the child buttons.
       */

    }, {
      kind: "get",
      static: true,
      key: "selectorButtons",
      value: function selectorButtons() {
        return `${prefix}-btn,${prefix}-modal-footer-button`;
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

export default BXModalFooter;
//# sourceMappingURL=modal-footer.js.map

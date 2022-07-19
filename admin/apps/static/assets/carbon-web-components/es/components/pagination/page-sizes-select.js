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
import { html, property, query, customElement, LitElement } from 'lit-element';
import ChevronDown16 from "../../icons/chevron--down/16";
import settings from 'carbon-components/es/globals/js/settings';
import FocusMixin from '../../globals/mixins/focus';
import styles from "././pagination.css.js";
const {
  prefix
} = settings;
/**
 * The select box for page sizes.
 * @element bx-page-sizes-select
 * @slot label-text - The label text.
 * @fires bx-page-sizes-select-changed - The custom event fired after the page size is changed.
 */

let BXPageSizesSelect = _decorate([customElement(`${prefix}-page-sizes-select`)], function (_initialize, _FocusMixin) {
  class BXPageSizesSelect extends _FocusMixin {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXPageSizesSelect,
    d: [{
      kind: "field",
      decorators: [query('select')],
      key: "_selectNode",
      value: void 0
    }, {
      kind: "method",
      key: "_handleChange",
      value:
      /**
       * Handles `change` event on the `<select>` to select page size.
       */
      function _handleChange({
        target
      }) {
        const value = Number(target.value);
        this.dispatchEvent(new CustomEvent(this.constructor.eventChange, {
          bubbles: true,
          composed: true,
          detail: {
            value
          }
        }));
        this.value = value;
      }
      /**
       * Handles `slotchange` event for the `<slot>` for `<options>`.
       * @param event The event.
       */

    }, {
      kind: "method",
      key: "_handleSlotChange",
      value: function _handleSlotChange({
        target
      }) {
        const {
          _selectNode: selectNode
        } = this;

        while (selectNode.firstChild) {
          selectNode.removeChild(selectNode.firstChild);
        }

        target.assignedNodes().forEach(item => {
          selectNode === null || selectNode === void 0 ? void 0 : selectNode.appendChild(item.cloneNode(true));
        });
      }
      /**
       * The label text.
       */

    }, {
      kind: "field",
      decorators: [property({
        attribute: 'label-text'
      })],
      key: "labelText",

      value() {
        return 'Items per page:';
      }

    }, {
      kind: "field",
      decorators: [property({
        type: Number
      })],
      key: "value",
      value: void 0
    }, {
      kind: "method",
      key: "createRenderRoot",
      value:
      /**
       * The value, working as the current page size.
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
          labelText,
          value,
          _handleChange: handleChange,
          _handleSlotChange: handleSlotChange
        } = this;
        return html(_t || (_t = _` <label for="select" class="${0}--pagination__text"><slot name="label-text">${0}</slot></label> <div class="${0}--select__item-count"> <select id="select" class="${0}--select-input" .value="${0}" @change="${0}"></select> ${0} </div> <div hidden><slot @slotchange="${0}"></slot></div> `), prefix, labelText, prefix, prefix, value, handleChange, ChevronDown16({
          class: `${prefix}--select__arrow`
        }), handleSlotChange);
      }
      /**
       * The name of the custom event fired after the page size is changed.
       */

    }, {
      kind: "get",
      static: true,
      key: "eventChange",
      value: function eventChange() {
        return `${prefix}-page-sizes-select-changed`;
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

export default BXPageSizesSelect;
//# sourceMappingURL=page-sizes-select.js.map

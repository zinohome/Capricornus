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
import settings from 'carbon-components/es/globals/js/settings';
import { ifDefined } from 'lit-html/directives/if-defined';
import { html, property, customElement } from 'lit-element';
import BXDropdownItem from '../dropdown/dropdown-item';
import styles from "././multi-select.css.js";
const {
  prefix
} = settings;
/**
 * Multi select item.
 * @element bx-multi-select-item
 */

let BXMultiSelectItem = _decorate([customElement(`${prefix}-multi-select-item`)], function (_initialize, _BXDropdownItem) {
  class BXMultiSelectItem extends _BXDropdownItem {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXMultiSelectItem,
    d: [{
      kind: "field",
      decorators: [property({
        type: Boolean
      })],
      key: "filtered",
      value: void 0
    }, {
      kind: "field",
      decorators: [property({
        attribute: 'selection-name'
      })],
      key: "selectionName",

      value() {
        return '';
      }

    }, {
      kind: "method",
      key: "render",
      value:
      /**
       * The property to hide when item is filtered from input
       */

      /**
       * The `name` attribute for the `<input>` for selection.
       */
      function render() {
        const {
          disabled,
          selected,
          selectionName,
          value
        } = this;
        return html(_t || (_t = _` <div class="${0}--list-box__menu-item__option"> <div class="${0}--form-item ${0}--checkbox-wrapper"> <input id="input" type="checkbox" class="${0}--checkbox" tabindex="-1" readonly="readonly" ?disabled="${0}" .checked="${0}" name="${0}" value="${0}"> <label for="input" class="${0}--checkbox-label"> <span class="${0}--checkbox-label-text"><slot></slot></span> </label> </div> </div> `), prefix, prefix, prefix, prefix, disabled, selected, ifDefined(selectionName || undefined), value, prefix, prefix);
      }
      /**
       * A selector that will return multi select.
       */

    }, {
      kind: "get",
      static: true,
      key: "selectorList",
      value: function selectorList() {
        return `${prefix}-multi-select`;
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
}, BXDropdownItem);

export default BXMultiSelectItem;
//# sourceMappingURL=multi-select-item.js.map

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
import settings from 'carbon-components/es/globals/js/settings';
import { html, property, customElement, LitElement } from 'lit-element';
import Checkmark16 from "../../icons/checkmark/16";
import { DROPDOWN_SIZE } from './dropdown';
import styles from "././dropdown.css.js";
const {
  prefix
} = settings;
/**
 * Dropdown item.
 * @element bx-dropdown-item
 * @csspart selected-icon The selected icon.
 */

let BXDropdownItem = _decorate([customElement(`${prefix}-dropdown-item`)], function (_initialize, _LitElement) {
  class BXDropdownItem extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXDropdownItem,
    d: [{
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
      key: "highlighted",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "selected",

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
        return DROPDOWN_SIZE.REGULAR;
      }

    }, {
      kind: "field",
      decorators: [property()],
      key: "value",

      value() {
        return '';
      }

    }, {
      kind: "method",
      key: "render",
      value:
      /**
       * `true` if this dropdown item should be disabled.
       */

      /**
       * `true` if this dropdown item should be highlighted.
       * If `true`, parent `<dropdown>` selects/deselects this dropdown item upon keyboard interaction.
       * @private
       */

      /**
       * `true` if this dropdown item should be selected.
       * @private
       */

      /**
       * Dropdown size.
       */

      /**
       * The `value` attribute that is set to the parent `<bx-dropdown>` when this dropdown item is selected.
       */
      function render() {
        const {
          selected
        } = this;
        return html(_t || (_t = _` <div class="${0}--list-box__menu-item__option"> <slot></slot> ${0} </div> `), prefix, !selected ? undefined : Checkmark16({
          part: 'selected-icon',
          class: `${prefix}--list-box__menu-item__selected-icon`
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
}, LitElement);

export default BXDropdownItem;
//# sourceMappingURL=dropdown-item.js.map

import _decorate from "@babel/runtime/helpers/esm/decorate";
import _get from "@babel/runtime/helpers/esm/get";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

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
import { html, customElement, LitElement, property } from 'lit-element';
import settings from 'carbon-components/es/globals/js/settings';
import styles from "././list.css.js";
const {
  prefix
} = settings;
/**
 * Ordered list.
 */

let BXUnorderedList = _decorate([customElement(`${prefix}-unordered-list`)], function (_initialize, _LitElement) {
  class BXUnorderedList extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXUnorderedList,
    d: [{
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "isExpressive",

      value() {
        return false;
      }

    }, {
      kind: "method",
      key: "connectedCallback",
      value:
      /**
       * `true` if expressive theme enabled.
       */
      function connectedCallback() {
        // Uses attribute for lookup from child
        if (this.closest(this.constructor.selectorListItem)) {
          this.setAttribute('slot', 'nested');
        } else {
          this.removeAttribute('slot');
        }

        _get(_getPrototypeOf(BXUnorderedList.prototype), "connectedCallback", this).call(this);
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const classes = classMap({
          [`${prefix}--list--unordered`]: true,
          [`${prefix}--list--nested`]: this.getAttribute('slot') === 'nested',
          [`${prefix}--list--expressive`]: this.isExpressive
        });
        return html(_t || (_t = _` <ul class="${0}"> <slot></slot> </ul> `), classes);
      }
      /**
       * A selector that will return list item.
       */

    }, {
      kind: "get",
      static: true,
      key: "selectorListItem",
      value: function selectorListItem() {
        return `${prefix}-list-item`;
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

export default BXUnorderedList;
//# sourceMappingURL=unordered-list.js.map

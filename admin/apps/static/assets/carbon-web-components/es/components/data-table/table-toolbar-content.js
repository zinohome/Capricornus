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
import settings from 'carbon-components/es/globals/js/settings';
import styles from "././data-table.css.js";
const {
  prefix
} = settings;
/**
 * Table toolbar content.
 * @element bx-table-toolbar-content
 */

let BXTableToolbarContent = _decorate([customElement(`${prefix}-table-toolbar-content`)], function (_initialize, _LitElement) {
  class BXTableToolbarContent extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXTableToolbarContent,
    d: [{
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true,
        attribute: 'has-batch-actions'
      })],
      key: "hasBatchActions",

      value() {
        return false;
      }

    }, {
      kind: "method",
      key: "updated",
      value:
      /**
       * `true` if this batch actions bar is active.
       */
      function updated(changedProperties) {
        if (changedProperties.has('hasBatchActions')) {
          this.setAttribute('tabindex', `${this.hasBatchActions ? '-1' : ''}`);
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return html(_t || (_t = _`<slot></slot>`));
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

export default BXTableToolbarContent;
//# sourceMappingURL=table-toolbar-content.js.map

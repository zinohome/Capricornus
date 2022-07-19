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
import { html, property, customElement, LitElement } from 'lit-element';
import settings from 'carbon-components/es/globals/js/settings';
import { forEach } from '../../globals/internal/collection-helpers';
import { ACCORDION_SIZE } from './defs';
import styles from "././accordion.css.js";
export { ACCORDION_SIZE };
const {
  prefix
} = settings;
/**
 * Accordion container.
 * @element bx-accordion
 */

let BXAccordion = _decorate([customElement(`${prefix}-accordion`)], function (_initialize, _LitElement) {
  class BXAccordion extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXAccordion,
    d: [{
      kind: "field",
      decorators: [property({
        reflect: true
      })],
      key: "size",

      value() {
        return ACCORDION_SIZE.REGULAR;
      }

    }, {
      kind: "method",
      key: "connectedCallback",
      value:
      /**
       * Accordion size.
       */
      function connectedCallback() {
        if (!this.hasAttribute('role')) {
          this.setAttribute('role', 'list');
        }

        _get(_getPrototypeOf(BXAccordion.prototype), "connectedCallback", this).call(this);
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProperties) {
        if (changedProperties.has('size')) {
          // Propagate `size` attribute to descendants until `:host-context()` gets supported in all major browsers
          forEach(this.querySelectorAll(this.constructor.selectorAccordionItems), elem => {
            elem.setAttribute('size', this.size);
          });
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return html(_t || (_t = _`<slot></slot>`));
      }
    }, {
      kind: "get",
      static: true,
      key: "selectorAccordionItems",
      value: function selectorAccordionItems() {
        return `${prefix}-accordion-item`;
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

export default BXAccordion;
//# sourceMappingURL=accordion.js.map

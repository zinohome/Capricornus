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
import styles from "././progress-indicator.css.js";
const {
  prefix
} = settings;
/**
 * Progress indicator.
 * @element bx-progress-indicator
 */

let BXProgressIndicator = _decorate([customElement(`${prefix}-progress-indicator`)], function (_initialize, _LitElement) {
  class BXProgressIndicator extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXProgressIndicator,
    d: [{
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "vertical",

      value() {
        return false;
      }

    }, {
      kind: "method",
      key: "connectedCallback",
      value:
      /**
       * `true` if the progress indicator should be vertical.
       */
      function connectedCallback() {
        if (!this.hasAttribute('role')) {
          this.setAttribute('role', 'list');
        }

        _get(_getPrototypeOf(BXProgressIndicator.prototype), "connectedCallback", this).call(this);
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProperties) {
        if (changedProperties.has('vertical')) {
          // Propagate `vertical` attribute to descendants until `:host-context()` gets supported in all major browsers
          forEach(this.querySelectorAll(this.constructor.selectorStep), item => {
            item.vertical = this.vertical;
          });
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return html(_t || (_t = _`<slot></slot>`));
      }
      /**
       * A selector that will return progress steps.
       */

    }, {
      kind: "get",
      static: true,
      key: "selectorStep",
      value: function selectorStep() {
        return `${prefix}-progress-step`;
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

export default BXProgressIndicator;
//# sourceMappingURL=progress-indicator.js.map

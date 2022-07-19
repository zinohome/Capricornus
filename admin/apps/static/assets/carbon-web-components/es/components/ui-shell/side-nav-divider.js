import _decorate from "@babel/runtime/helpers/esm/decorate";
import _get from "@babel/runtime/helpers/esm/get";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

/**
 * @license
 *
 * Copyright IBM Corp. 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import settings from 'carbon-components/es/globals/js/settings';
import { customElement, LitElement } from 'lit-element';
import styles from "././side-nav.css.js";
const {
  prefix
} = settings;
/**
 * A divider in side nav.
 * @element bx-side-nav-divider
 */

let BXSideNavDivider = _decorate([customElement(`${prefix}-side-nav-divider`)], function (_initialize, _LitElement) {
  class BXSideNavDivider extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXSideNavDivider,
    d: [{
      kind: "method",
      key: "connectedCallback",
      value: function connectedCallback() {
        if (!this.hasAttribute('role')) {
          this.setAttribute('role', 'separator');
        }

        _get(_getPrototypeOf(BXSideNavDivider.prototype), "connectedCallback", this).call(this);
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

export default BXSideNavDivider;
//# sourceMappingURL=side-nav-divider.js.map

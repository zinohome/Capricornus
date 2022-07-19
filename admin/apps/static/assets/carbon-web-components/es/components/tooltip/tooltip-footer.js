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
import { html, customElement, LitElement } from 'lit-element';
import styles from "././tooltip.css.js";
const {
  prefix
} = settings;
/**
 * Tooltip footer.
 */

let BXTooltipFooter = _decorate([customElement(`${prefix}-tooltip-footer`)], function (_initialize, _LitElement) {
  class BXTooltipFooter extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXTooltipFooter,
    d: [{
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

export default BXTooltipFooter;
//# sourceMappingURL=tooltip-footer.js.map

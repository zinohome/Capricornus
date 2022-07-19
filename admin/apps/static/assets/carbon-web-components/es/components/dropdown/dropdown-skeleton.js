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
import { html, customElement, LitElement } from 'lit-element';
import settings from 'carbon-components/es/globals/js/settings';
import styles from "././dropdown.css.js";
const {
  prefix
} = settings;
/**
 * Skeleton version of dropdown.
 */

let BXDropdownSkeleton = _decorate([customElement(`${prefix}-dropdown-skeleton`)], function (_initialize, _LitElement) {
  class BXDropdownSkeleton extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXDropdownSkeleton,
    d: [{
      kind: "method",
      key: "render",
      value: function render() {
        return html(_t || (_t = _` <div class="${0}--skeleton ${0}--dropdown-v2 ${0}--list-box ${0}--form-item"> <div class="${0}--list-box__field"> <span class="${0}--list-box__label"></span> </div> </div> `), prefix, prefix, prefix, prefix, prefix, prefix);
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

export default BXDropdownSkeleton;
//# sourceMappingURL=dropdown-skeleton.js.map

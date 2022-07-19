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
import { html, customElement, LitElement } from 'lit-element';
import settings from 'carbon-components/es/globals/js/settings';
import styles from "././skeleton-placeholder.css.js";
const {
  prefix
} = settings;
/**
 * Skeleton placeholder.
 * @element bx-skeleton-placeholder
 */

let BXSkeletonPlaceholder = _decorate([customElement(`${prefix}-skeleton-placeholder`)], function (_initialize, _LitElement) {
  class BXSkeletonPlaceholder extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXSkeletonPlaceholder,
    d: [{
      kind: "method",
      key: "render",
      value: function render() {
        return html(_t || (_t = _` <div class="${0}--skeleton__placeholder"></div> `), prefix);
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

export default BXSkeletonPlaceholder;
//# sourceMappingURL=skeleton-placeholder.js.map

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
import styles from "././structured-list.css.js";
const {
  prefix
} = settings;
/**
 * Skeleton of structured list header cell.
 */

let BXStructuredListHeaderCellSkeleton = _decorate([customElement(`${prefix}-structured-list-header-cell-skeleton`)], function (_initialize, _LitElement) {
  class BXStructuredListHeaderCellSkeleton extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXStructuredListHeaderCellSkeleton,
    d: [{
      kind: "method",
      key: "render",
      value: function render() {
        return html(_t || (_t = _` <span></span> `));
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

export default BXStructuredListHeaderCellSkeleton;
//# sourceMappingURL=structured-list-header-cell-skeleton.js.map

import _decorate from "@babel/runtime/helpers/esm/decorate";

let _ = t => t,
    _t;

/**
 * @license
 *
 * Copyright IBM Corp. 2019
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { html, customElement, LitElement } from 'lit-element';
import settings from 'carbon-components/es/globals/js/settings';
import styles from "././textarea.css.js";
const {
  prefix
} = settings;
/**
 * Skeleton of text area.
 */

let BXTextareaSkeleton = _decorate([customElement(`${prefix}-textarea-skeleton`)], function (_initialize, _LitElement) {
  class BXTextareaSkeleton extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXTextareaSkeleton,
    d: [{
      kind: "method",
      key: "render",
      value: function render() {
        return html(_t || (_t = _` <span class="${0}--label ${0}--skeleton"></span> <div class="${0}--skeleton ${0}--text-area"></div> `), prefix, prefix, prefix, prefix);
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

export default BXTextareaSkeleton;
//# sourceMappingURL=textarea-skeleton.js.map

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
import styles from "././radio-button.css.js";
const {
  prefix
} = settings;
/**
 * Skeleton of radio button.
 */

let BXRadioButtonSkeleton = _decorate([customElement(`${prefix}-radio-button-skeleton`)], function (_initialize, _LitElement) {
  class BXRadioButtonSkeleton extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXRadioButtonSkeleton,
    d: [{
      kind: "method",
      key: "render",
      value: function render() {
        return html(_t || (_t = _` <div class="${0}--radio-button ${0}--skeleton"></div> <span class="${0}--radio-button__label ${0}--skeleton"></span> `), prefix, prefix, prefix, prefix);
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

export default BXRadioButtonSkeleton;
//# sourceMappingURL=radio-button-skeleton.js.map

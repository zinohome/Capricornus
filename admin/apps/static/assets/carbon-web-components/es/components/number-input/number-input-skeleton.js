import _decorate from "@babel/runtime/helpers/esm/decorate";

let _ = t => t,
    _t,
    _t2;

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
import styles from "././number-input.css.js";
const {
  prefix
} = settings;
/**
 * Skeleton of number input.
 */

let BXNumberInputSkeleton = _decorate([customElement(`${prefix}-number-input-skeleton`)], function (_initialize, _LitElement) {
  class BXNumberInputSkeleton extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXNumberInputSkeleton,
    d: [{
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true,
        attribute: 'hide-label'
      })],
      key: "hideLabel",

      value() {
        return false;
      }

    }, {
      kind: "method",
      key: "render",
      value:
      /**
       * `true` if the label should be hidden. Corresponds to the attribute with the same name.
       */
      function render() {
        const {
          hideLabel
        } = this;
        return html(_t || (_t = _` ${0} <div class="${0}--number ${0}--skeleton"></div> `), !hideLabel && html(_t2 || (_t2 = _` <span class="${0}--label ${0}--skeleton"></span> `), prefix, prefix), prefix, prefix);
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

export default BXNumberInputSkeleton;
//# sourceMappingURL=number-input-skeleton.js.map

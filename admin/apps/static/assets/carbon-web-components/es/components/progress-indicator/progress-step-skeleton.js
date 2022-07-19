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
import { html, property, customElement, LitElement } from 'lit-element';
import settings from 'carbon-components/es/globals/js/settings';
import styles from "././progress-indicator.css.js";
const {
  prefix
} = settings;
/**
 * Skeleton of progress step.
 */

let BXProgressStepSkeleton = _decorate([customElement(`${prefix}-progress-step-skeleton`)], function (_initialize, _LitElement) {
  class BXProgressStepSkeleton extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXProgressStepSkeleton,
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
      key: "render",
      value:
      /**
       * `true` if the progress indicator should be vertical. Corresponds to the attribute with the same name.
       */
      function render() {
        return html(_t || (_t = _` <div class="${0}--progress-step-button ${0}--progress-step-button--unclickable"> <svg> <path d="M 7, 7 m -7, 0 a 7,7 0 1,0 14,0 a 7,7 0 1,0 -14,0"/> </svg> <p class="${0}--progress-label"></p> <span class="${0}--progress-line"></span> </div> `), prefix, prefix, prefix, prefix);
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

export default BXProgressStepSkeleton;
//# sourceMappingURL=progress-step-skeleton.js.map

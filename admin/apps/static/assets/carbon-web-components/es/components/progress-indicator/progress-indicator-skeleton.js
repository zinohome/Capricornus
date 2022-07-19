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
import { html, property, customElement, LitElement } from 'lit-element';
import settings from 'carbon-components/es/globals/js/settings';
import { forEach } from '../../globals/internal/collection-helpers';
import styles from "././progress-indicator.css.js";
const {
  prefix
} = settings;
/**
 * Skeleton of progress indicator.
 */

let BXProgressIndicatorSkeleton = _decorate([customElement(`${prefix}-progress-indicator-skeleton`)], function (_initialize, _LitElement) {
  class BXProgressIndicatorSkeleton extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXProgressIndicatorSkeleton,
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
      key: "updated",
      value:
      /**
       * `true` if the progress indicator should be vertical. Corresponds to the attribute with the same name.
       */
      function updated(changedProperties) {
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
        return `${prefix}-progress-step-skeleton`;
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

export default BXProgressIndicatorSkeleton;
//# sourceMappingURL=progress-indicator-skeleton.js.map

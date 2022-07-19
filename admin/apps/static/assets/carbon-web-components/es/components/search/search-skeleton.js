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
import { html, property, customElement, LitElement } from 'lit-element';
import settings from 'carbon-components/es/globals/js/settings';
import { INPUT_SIZE } from '../input/input';
import styles from "././search.css.js";
const {
  prefix
} = settings;
/**
 * Skeleton of search.
 */

let BXSearchSkeleton = _decorate([customElement(`${prefix}-search-skeleton`)], function (_initialize, _LitElement) {
  class BXSearchSkeleton extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXSearchSkeleton,
    d: [{
      kind: "field",
      decorators: [property({
        reflect: true
      })],
      key: "size",

      value() {
        return INPUT_SIZE.REGULAR;
      }

    }, {
      kind: "method",
      key: "render",
      value:
      /**
       * The search box size. Corresponds to the attribute with the same name.
       */
      function render() {
        return html(_t || (_t = _` <span class="${0}--label"></span> <div class="${0}--search-input"></div> `), prefix, prefix);
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

export default BXSearchSkeleton;
//# sourceMappingURL=search-skeleton.js.map

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
import { classMap } from 'lit-html/directives/class-map';
import { html, property, customElement, LitElement } from 'lit-element';
import settings from 'carbon-components/es/globals/js/settings';
import { SKELETON_TEXT_TYPE } from './defs';
import styles from "././skeleton-text.css.js";
export { SKELETON_TEXT_TYPE };
const {
  prefix
} = settings;
/**
 * Skeleton text.
 * @element bx-skeleton-text
 */

let BXSkeletonText = _decorate([customElement(`${prefix}-skeleton-text`)], function (_initialize, _LitElement) {
  class BXSkeletonText extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXSkeletonText,
    d: [{
      kind: "field",
      decorators: [property({
        reflect: true
      })],
      key: "type",

      value() {
        return SKELETON_TEXT_TYPE.REGULAR;
      }

    }, {
      kind: "method",
      key: "render",
      value:
      /**
       * The type of skeleton text.
       */
      function render() {
        const {
          type
        } = this;
        const classes = classMap({
          [`${prefix}--skeleton__text`]: true,
          [`${prefix}--skeleton__heading`]: type === SKELETON_TEXT_TYPE.HEADING
        });
        return html(_t || (_t = _` <p class="${0}"></p> `), classes);
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

export default BXSkeletonText;
//# sourceMappingURL=skeleton-text.js.map

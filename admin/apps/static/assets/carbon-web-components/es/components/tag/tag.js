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
import { TAG_SIZE, TAG_TYPE } from './defs';
import styles from "././tag.css.js";
export { TAG_SIZE, TAG_TYPE };
const {
  prefix
} = settings;
/**
 * Tag.
 * @element bx-tag
 */

let BXTag = _decorate([customElement(`${prefix}-tag`)], function (_initialize, _LitElement) {
  class BXTag extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXTag,
    d: [{
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "disabled",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [property({
        reflect: true
      })],
      key: "size",

      value() {
        return TAG_SIZE.REGULAR;
      }

    }, {
      kind: "field",
      decorators: [property({
        reflect: true
      })],
      key: "type",

      value() {
        return TAG_TYPE.GRAY;
      }

    }, {
      kind: "method",
      key: "render",
      value:
      /**
       * `true` if the tag should be disabled
       */

      /**
       * The size of the tag.
       */

      /**
       * The type of the tag.
       */
      function render() {
        return html(_t || (_t = _`<slot></slot>`));
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

export { BXTag as default };
//# sourceMappingURL=tag.js.map

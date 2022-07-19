import _decorate from "@babel/runtime/helpers/esm/decorate";

/**
 * @license
 *
 * Copyright IBM Corp. 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { property, customElement, LitElement } from 'lit-element';
import settings from 'carbon-components/es/globals/js/settings';
const {
  prefix
} = settings;
/**
 * An option in select box.
 * @element bx-select-item
 */

let BXSelectItem = _decorate([customElement(`${prefix}-select-item`)], function (_initialize, _LitElement) {
  class BXSelectItem extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXSelectItem,
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
      key: "label",

      value() {
        return '';
      }

    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "selected",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [property({
        reflect: true
      })],
      key: "value",

      value() {
        return '';
      }

    }]
  };
}, LitElement);

export default BXSelectItem;
//# sourceMappingURL=select-item.js.map

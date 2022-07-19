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
 * An option group in select box.
 * @element bx-select-item-group
 */

let BXSelectItemGroup = _decorate([customElement(`${prefix}-select-item-group`)], function (_initialize, _LitElement) {
  class BXSelectItemGroup extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXSelectItemGroup,
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

    }]
  };
}, LitElement);

export default BXSelectItemGroup;
//# sourceMappingURL=select-item-group.js.map

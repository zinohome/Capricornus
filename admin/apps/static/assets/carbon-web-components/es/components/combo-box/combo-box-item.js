import _decorate from "@babel/runtime/helpers/esm/decorate";

/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import settings from 'carbon-components/es/globals/js/settings';
import { customElement } from 'lit-element';
import BXDropdownItem from '../dropdown/dropdown-item';
import styles from "././combo-box.css.js";
const {
  prefix
} = settings;
/**
 * Combo box item.
 * @element bx-combo-box-item
 */

let BXComboBoxItem = _decorate([customElement(`${prefix}-combo-box-item`)], function (_initialize, _BXDropdownItem) {
  class BXComboBoxItem extends _BXDropdownItem {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXComboBoxItem,
    d: [{
      kind: "field",
      static: true,
      key: "styles",

      value() {
        return styles;
      }

    }]
  };
}, BXDropdownItem);

export default BXComboBoxItem;
//# sourceMappingURL=combo-box-item.js.map

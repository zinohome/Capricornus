import _decorate from "@babel/runtime/helpers/esm/decorate";

/**
 * @license
 *
 * Copyright IBM Corp. 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { customElement } from 'lit-element';
import settings from 'carbon-components/es/globals/js/settings';
import BXButton from '../button/button';
import buttonStyles from "./../button/button.css.js";
import styles from "././modal.css.js";
const {
  prefix
} = settings;
/**
 * Modal footer button.
 * @element bx-modal-footer-button
 */

let BXModalFooterButton = _decorate([customElement(`${prefix}-modal-footer-button`)], function (_initialize, _BXButton) {
  class BXModalFooterButton extends _BXButton {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXModalFooterButton,
    d: [{
      kind: "field",
      static: true,
      key: "styles",

      value() {
        return [buttonStyles, styles];
      }

    }]
  };
}, BXButton);

export default BXModalFooterButton;
//# sourceMappingURL=modal-footer-button.js.map

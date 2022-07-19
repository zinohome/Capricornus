import _decorate from "@babel/runtime/helpers/esm/decorate";
import _get from "@babel/runtime/helpers/esm/get";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

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
import settings from 'carbon-components/es/globals/js/settings';
import { html, property, customElement } from 'lit-element';
import BXFloatingMenu, { FLOATING_MENU_ALIGNMENT, FLOATING_MENU_DIRECTION } from '../floating-menu/floating-menu';
import { OVERFLOW_MENU_COLOR_SCHEME } from './defs';
import styles from "././overflow-menu.css.js";
const {
  prefix
} = settings;
/**
 * Overflow menu body.
 * @element bx-overflow-menu-body
 */

let BXOverflowMenuBody = _decorate([customElement(`${prefix}-overflow-menu-body`)], function (_initialize, _BXFloatingMenu) {
  class BXOverflowMenuBody extends _BXFloatingMenu {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXOverflowMenuBody,
    d: [{
      kind: "field",
      decorators: [property()],
      key: "alignment",

      value() {
        return FLOATING_MENU_ALIGNMENT.START;
      }

    }, {
      kind: "field",
      decorators: [property({
        attribute: 'color-scheme',
        reflect: true
      })],
      key: "colorScheme",

      value() {
        return OVERFLOW_MENU_COLOR_SCHEME.REGULAR;
      }

    }, {
      kind: "field",
      decorators: [property()],
      key: "direction",

      value() {
        return FLOATING_MENU_DIRECTION.BOTTOM;
      }

    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "open",

      value() {
        return false;
      }

    }, {
      kind: "method",
      key: "connectedCallback",
      value:
      /**
       * How the menu is aligned to the trigger button.
       */

      /**
       * The color scheme.
       */

      /**
       * The menu direction.
       */

      /**
       * `true` if the menu should be open.
       * @private
       */
      function connectedCallback() {
        if (!this.hasAttribute('role')) {
          this.setAttribute('role', 'menu');
        }

        if (!this.hasAttribute('tabindex')) {
          // TODO: Should we use a property?
          this.setAttribute('tabindex', '-1');
        }

        _get(_getPrototypeOf(BXOverflowMenuBody.prototype), "connectedCallback", this).call(this);
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
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
}, BXFloatingMenu);

export default BXOverflowMenuBody;
//# sourceMappingURL=overflow-menu-body.js.map

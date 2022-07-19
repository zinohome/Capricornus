import _decorate from "@babel/runtime/helpers/esm/decorate";
import _get from "@babel/runtime/helpers/esm/get";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

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
import settings from 'carbon-components/es/globals/js/settings';
import { html, property, customElement, LitElement } from 'lit-element';
import OverflowMenuVertical16 from "../../icons/overflow-menu--vertical/16";
import HostListener from '../../globals/decorators/host-listener';
import FocusMixin from '../../globals/mixins/focus';
import HostListenerMixin from '../../globals/mixins/host-listener';
import { find } from '../../globals/internal/collection-helpers';
import { OVERFLOW_MENU_COLOR_SCHEME, OVERFLOW_MENU_SIZE } from './defs';
import styles from "././overflow-menu.css.js";
export { OVERFLOW_MENU_COLOR_SCHEME, OVERFLOW_MENU_SIZE };
const {
  prefix
} = settings;
/**
 * Overflow menu.
 * @element bx-overflow-menu
 * @slot icon - The icon for the trigger button.
 */

let BXOverflowMenu = _decorate([customElement(`${prefix}-overflow-menu`)], function (_initialize, _HostListenerMixin) {
  class BXOverflowMenu extends _HostListenerMixin {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXOverflowMenu,
    d: [{
      kind: "field",
      key: "_menuBody",

      value() {
        return null;
      }

    }, {
      kind: "method",
      key: "_handleUserInitiatedToggle",
      value:
      /**
       * The menu body.
       */

      /**
       * Handles user-initiated toggling of the menu.
       */
      async function _handleUserInitiatedToggle() {
        this.open = !this.open;
        const {
          open,
          updateComplete
        } = this;

        if (open) {
          await updateComplete;
          const {
            _menuBody: menuBody
          } = this;
          menuBody === null || menuBody === void 0 ? void 0 : menuBody.focus();
        }
      }
      /**
       * Handles `click` event on the trigger button.
       */

    }, {
      kind: "field",
      decorators: [HostListener('click')],
      key: "_handleClickTrigger",

      value() {
        return async () => {
          this._handleUserInitiatedToggle();
        };
      }

    }, {
      kind: "field",
      decorators: [HostListener('keydown')],
      key: "_handleKeydownTrigger",

      value() {
        return async ({
          key
        }) => {
          if (key === ' ' || key === 'Enter') {
            this._handleUserInitiatedToggle();
          }
        };
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
        type: Boolean,
        reflect: true
      })],
      key: "open",

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
        return OVERFLOW_MENU_SIZE.REGULAR;
      }

    }, {
      kind: "get",
      key: "triggerPosition",
      value:
      /**
       * Handles `keydown` event on the trigger button.
       */

      /**
       * The color scheme.
       */

      /**
       * `true` if this overflow menu should be disabled.
       */

      /**
       * `true` if the dropdown should be open.
       */

      /**
       * Overflow menu size.
       */

      /**
       * @returns The position of the trigger button in the viewport.
       */
      function triggerPosition() {
        return this.getBoundingClientRect();
      }
    }, {
      kind: "method",
      key: "connectedCallback",
      value: function connectedCallback() {
        if (!this.hasAttribute('role')) {
          this.setAttribute('role', 'button');
        }

        if (!this.hasAttribute('tabindex')) {
          // TODO: Should we use a property?
          this.setAttribute('tabindex', '0');
        }

        if (!this.hasAttribute('aria-haspopup')) {
          this.setAttribute('aria-haspopup', 'true');
        }

        if (!this.hasAttribute('aria-expanded')) {
          this.setAttribute('aria-expanded', 'false');
        }

        if (!this.shadowRoot) {
          this.attachShadow({
            mode: 'open'
          });
        }

        _get(_getPrototypeOf(BXOverflowMenu.prototype), "connectedCallback", this).call(this);
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProperties) {
        if (changedProperties.has('open')) {
          const {
            colorScheme,
            open
          } = this;

          if (open && !this._menuBody) {
            this._menuBody = find(this.childNodes, elem => elem.constructor.FLOATING_MENU);
          }

          const {
            _menuBody: menuBody
          } = this;

          if (menuBody) {
            menuBody.colorScheme = colorScheme;
            menuBody.open = open;
            this.setAttribute('aria-expanded', String(Boolean(open)));
          }
        }

        if (changedProperties.has('colorScheme')) {
          const {
            colorScheme
          } = this;
          const {
            _menuBody: menuBody
          } = this;

          if (menuBody) {
            menuBody.colorScheme = colorScheme;
          }
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return html(_t || (_t = _` <slot name="icon"> ${0} </slot> `), OverflowMenuVertical16({
          class: `${prefix}--overflow-menu__icon`
        }));
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
}, HostListenerMixin(FocusMixin(LitElement)));

export default BXOverflowMenu;
//# sourceMappingURL=overflow-menu.js.map

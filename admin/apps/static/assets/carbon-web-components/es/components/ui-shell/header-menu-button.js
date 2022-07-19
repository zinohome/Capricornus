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
import settings from 'carbon-components/es/globals/js/settings';
import { classMap } from 'lit-html/directives/class-map';
import { html, property, customElement, LitElement } from 'lit-element';
import Close20 from "../../icons/close/20";
import Menu20 from "../../icons/menu/20";
import ifNonNull from '../../globals/directives/if-non-null';
import FocusMixin from '../../globals/mixins/focus';
import { SIDE_NAV_COLLAPSE_MODE, SIDE_NAV_USAGE_MODE } from './side-nav';
import styles from "././header.css.js";
const {
  prefix
} = settings;
/**
 * The trigger button for side nav in header nav.
 * @element bx-header-menu-button
 * @csspart button The button.
 * @csspart toggle-icon The toggle icon.
 * @fires bx-header-menu-button-toggled - The custom event fired after this header menu button is toggled upon a user gesture.
 */

let BXHeaderMenuButton = _decorate([customElement(`${prefix}-header-menu-button`)], function (_initialize, _FocusMixin) {
  class BXHeaderMenuButton extends _FocusMixin {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXHeaderMenuButton,
    d: [{
      kind: "method",
      key: "_handleClick",
      value: function _handleClick() {
        const active = !this.active;
        this.active = active;
        this.dispatchEvent(new CustomEvent(this.constructor.eventToggle, {
          bubbles: true,
          cancelable: true,
          composed: true,
          detail: {
            active
          }
        }));
      }
      /**
       * `true` if the button should represent its active state.
       */

    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "active",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [property({
        attribute: 'button-label-active'
      })],
      key: "buttonLabelActive",

      value() {
        return 'Close navigation menu';
      }

    }, {
      kind: "field",
      decorators: [property({
        attribute: 'button-label-inactive'
      })],
      key: "buttonLabelInactive",

      value() {
        return 'Open navigation menu';
      }

    }, {
      kind: "field",
      decorators: [property({
        reflect: true,
        attribute: 'collapse-mode'
      })],
      key: "collapseMode",

      value() {
        return SIDE_NAV_COLLAPSE_MODE.RESPONSIVE;
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
        reflect: true,
        attribute: 'usage-mode'
      })],
      key: "usageMode",

      value() {
        return SIDE_NAV_USAGE_MODE.REGULAR;
      }

    }, {
      kind: "method",
      key: "createRenderRoot",
      value:
      /**
       * The `aria-label` attribute for the button in its active state.
       */

      /**
       * The `aria-label` attribute for the button in its inactive state.
       */

      /**
       * Collapse mode of the side nav.
       */

      /**
       * `true` if the button should be disabled.
       */

      /**
       * Usage mode of the side nav.
       */
      function createRenderRoot() {
        var _$exec;

        return this.attachShadow({
          mode: 'open',
          delegatesFocus: Number(((_$exec = /Safari\/(\d+)/.exec(navigator.userAgent)) !== null && _$exec !== void 0 ? _$exec : ['', 0])[1]) <= 537
        });
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const {
          active,
          buttonLabelActive,
          buttonLabelInactive,
          disabled,
          _handleClick: handleClick
        } = this;
        const buttonLabel = active ? buttonLabelActive : buttonLabelInactive;
        const classes = classMap({
          [`${prefix}--header__action`]: true,
          [`${prefix}--header__menu-trigger`]: true,
          [`${prefix}--header__menu-toggle`]: true,
          [`${prefix}--header__action--active`]: active
        });
        return html(_t || (_t = _` <button part="button" class="${0}" ?disabled="${0}" aria-label="${0}" @click="${0}"> ${0} </button> `), classes, disabled, ifNonNull(buttonLabel), handleClick, (active ? Close20 : Menu20)({
          slot: 'toggle-icon'
        }));
      }
      /**
       * The name of the custom event fired after this header menu button is toggled upon a user gesture.
       */

    }, {
      kind: "get",
      static: true,
      key: "eventToggle",
      value: function eventToggle() {
        return `${prefix}-header-menu-button-toggled`;
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
}, FocusMixin(LitElement));

export default BXHeaderMenuButton;
//# sourceMappingURL=header-menu-button.js.map

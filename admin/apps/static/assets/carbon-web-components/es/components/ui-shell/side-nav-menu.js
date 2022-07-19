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
import { html, property, query, customElement, LitElement } from 'lit-element';
import ChevronDown20 from "../../icons/chevron--down/20";
import { forEach } from '../../globals/internal/collection-helpers';
import FocusMixin from '../../globals/mixins/focus';
import styles from "././side-nav.css.js";
const {
  prefix
} = settings;
/**
 * Side nav menu.
 * @element bx-side-nav-menu
 * @slot title-icon - The icon.
 * @csspart expando The expando.
 * @csspart expando-icon-container The expando icon container.
 * @csspart expando-icon The expando icon.
 * @csspart title The title.
 * @csspart title-icon-container The title icon container.
 * @csspart menu-body The menu body.
 */

let BXSideNavMenu = _decorate([customElement(`${prefix}-side-nav-menu`)], function (_initialize, _FocusMixin) {
  class BXSideNavMenu extends _FocusMixin {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXSideNavMenu,
    d: [{
      kind: "field",
      key: "_hasIcon",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [query('#title-icon-container')],
      key: "_titleIconContainerNode",
      value: void 0
    }, {
      kind: "method",
      key: "_handleUserInitiatedToggle",
      value:
      /**
       * `true` if this menu has an icon.
       */

      /**
       * The container for the title icon.
       */

      /**
       * Handles user-initiated toggle request of this side nav menu.
       * @param expanded The new expanded state.
       */
      function _handleUserInitiatedToggle(expanded = !this.expanded) {
        const {
          eventBeforeToggle,
          eventToggle
        } = this.constructor;
        const init = {
          bubbles: true,
          cancelable: true,
          composed: true,
          detail: {
            expanded
          }
        };

        if (this.dispatchEvent(new CustomEvent(eventBeforeToggle, init))) {
          this.expanded = expanded;
          this.dispatchEvent(new CustomEvent(eventToggle, init));
        }
      }
      /**
       * Handler for the `click` event on the expando button.
       */

    }, {
      kind: "method",
      key: "_handleClickExpando",
      value: function _handleClickExpando() {
        this._handleUserInitiatedToggle();
      }
      /**
       * Handles `slotchange` event on the non-named `<slot>`.
       */

    }, {
      kind: "method",
      key: "_handleSlotChange",
      value: function _handleSlotChange({
        target
      }) {
        const {
          _hasIcon: hasIcon
        } = this;
        forEach(target.assignedNodes(), item => {
          if (item.nodeType === Node.ELEMENT_NODE) {
            item.toggleAttribute(this.constructor.attribItemHasIcon, hasIcon);
          }
        });
      }
      /**
       * Handles `slotchange` event on the `<slot>` for the title icon.
       */

    }, {
      kind: "method",
      key: "_handleSlotChangeTitleIcon",
      value: function _handleSlotChangeTitleIcon({
        target
      }) {
        var _this$_titleIconConta;

        const constructor = this.constructor;
        const hasIcon = target.assignedNodes().length > 0;
        this._hasIcon = hasIcon;
        (_this$_titleIconConta = this._titleIconContainerNode) === null || _this$_titleIconConta === void 0 ? void 0 : _this$_titleIconConta.toggleAttribute('hidden', !hasIcon);
        forEach(this.querySelectorAll(constructor.selectorItem), item => {
          item.toggleAttribute(constructor.attribItemHasIcon, hasIcon);
        });
      }
      /**
       * `true` if the menu has active menu item.
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
        type: Boolean,
        reflect: true
      })],
      key: "expanded",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true,
        attribute: 'force-collapsed'
      })],
      key: "forceCollapsed",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [property()],
      key: "title",

      value() {
        return '';
      }

    }, {
      kind: "method",
      key: "createRenderRoot",
      value:
      /**
       * `true` if the menu should be open.
       */

      /**
       * `true` if the menu should be forced collapsed upon side nav's expanded state.
       */

      /**
       * The title text.
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
      key: "connectedCallback",
      value: function connectedCallback() {
        if (!this.hasAttribute('role')) {
          this.setAttribute('role', 'listitem');
        }

        _get(_getPrototypeOf(BXSideNavMenu.prototype), "connectedCallback", this).call(this);
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProperties) {
        if (changedProperties.has('expanded')) {
          const {
            selectorItem
          } = this.constructor;
          const {
            expanded
          } = this;
          forEach(this.querySelectorAll(selectorItem), elem => {
            elem.tabIndex = expanded ? 0 : -1;
          });
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const {
          expanded,
          forceCollapsed,
          title,
          _handleClickExpando: handleClickExpando,
          _handleSlotChange: handleSlotChange,
          _handleSlotChangeTitleIcon: handleSlotChangeTitleIcon
        } = this;
        return html(_t || (_t = _` <button type="button" part="expando" aria-haspopup="true" aria-expanded="${0}" class="${0}--side-nav__submenu" @click="${0}"> <div id="title-icon-container" part="title-icon-container" hidden class="${0}--side-nav__icon"> <slot name="title-icon" @slotchange="${0}"></slot> </div> <span part="title" class="${0}--side-nav__submenu-title">${0}</span> <div part="expando-icon-container" class="${0}--side-nav__icon ${0}--side-nav__icon--small ${0}--side-nav__submenu-chevron"> ${0} </div> </button> <ul part="menu-body" class="${0}--side-nav__menu"> <slot @slotchange="${0}"></slot> </ul> `), String(Boolean(expanded && !forceCollapsed)), prefix, handleClickExpando, prefix, handleSlotChangeTitleIcon, prefix, title, prefix, prefix, prefix, ChevronDown20({
          part: 'expando-icon'
        }), prefix, handleSlotChange);
      }
      /**
       * The attribute name of the menu items, that is set if this menu has an icon.
       */

    }, {
      kind: "field",
      static: true,
      key: "attribItemHasIcon",

      value() {
        return 'parent-has-icon';
      }

    }, {
      kind: "get",
      static: true,
      key: "selectorItem",
      value:
      /**
       * A selector that will return the menu items.
       */
      function selectorItem() {
        return `${prefix}-side-nav-menu-item`;
      }
      /**
       * The name of the custom event fired before this side nav menu is being toggled upon a user gesture.
       * Cancellation of this event stops the user-initiated action of toggling this side nav menu.
       */

    }, {
      kind: "get",
      static: true,
      key: "eventBeforeToggle",
      value: function eventBeforeToggle() {
        return `${prefix}-side-nav-menu-beingtoggled`;
      }
      /**
       * The name of the custom event fired after this side nav menu is toggled upon a user gesture.
       */

    }, {
      kind: "get",
      static: true,
      key: "eventToggle",
      value: function eventToggle() {
        return `${prefix}-side-nav-menu-toggled`;
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

export default BXSideNavMenu;
//# sourceMappingURL=side-nav-menu.js.map

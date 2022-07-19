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
import { ifDefined } from 'lit-html/directives/if-defined';
import { html, property, query, customElement, LitElement } from 'lit-element';
import ChevronDownGlyph from "../../icons/chevron--down/16";
import FocusMixin from '../../globals/mixins/focus';
import HostListenerMixin from '../../globals/mixins/host-listener';
import HostListener from '../../globals/decorators/host-listener';
import { forEach } from '../../globals/internal/collection-helpers';
import styles from "././header.css.js";
const {
  prefix
} = settings;
/**
 * Header menu.
 * @element bx-header-menu
 * @csspart trigger The trigger button.
 * @csspart trigger-icon The trigger button icon.
 * @csspart menu-body The menu body.
 */

let BXHeaderMenu = _decorate([customElement(`${prefix}-header-menu`)], function (_initialize, _HostListenerMixin) {
  class BXHeaderMenu extends _HostListenerMixin {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXHeaderMenu,
    d: [{
      kind: "field",
      decorators: [query('a')],
      key: "_trigger",
      value: void 0
    }, {
      kind: "method",
      key: "_handleClick",
      value:
      /**
       * The trigger button.
       */

      /**
       * Handles `click` event handler on this element.
       */
      function _handleClick() {
        this._handleUserInitiatedToggle();
      }
      /**
       * Handler for the `keydown` event on the trigger button.
       */

    }, {
      kind: "method",
      key: "_handleKeydownTrigger",
      value: function _handleKeydownTrigger({
        key
      }) {
        if (key === 'Esc' || key === 'Escape') {
          this._handleUserInitiatedToggle(false);
        }
      }
      /**
       * Handles user-initiated toggling the open state.
       * @param [force] If specified, forces the open state to the given one.
       */

    }, {
      kind: "method",
      key: "_handleUserInitiatedToggle",
      value: function _handleUserInitiatedToggle(force = !this.expanded) {
        this.expanded = force;

        if (!force) {
          this._trigger.focus();
        }
      }
      /**
       * Handles `blur` event handler on this element.
       */

    }, {
      kind: "method",
      decorators: [HostListener('focusout')],
      key: "_handleBlur",
      value: function _handleBlur({
        relatedTarget
      }) {
        if (!this.contains(relatedTarget)) {
          this.expanded = false;
        }
      }
      /**
       * `true` if the menu should be expanded.
       */

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
        attribute: 'trigger-content'
      })],
      key: "triggerContent",

      value() {
        return '';
      }

    }, {
      kind: "field",
      decorators: [property({
        attribute: 'menu-label'
      })],
      key: "menuLabel",
      value: void 0
    }, {
      kind: "method",
      key: "createRenderRoot",
      value:
      /**
       * The content of the trigger button.
       */

      /**
       * The `aria-label` attribute for the menu UI.
       */
      function createRenderRoot() {
        return this.attachShadow({
          mode: 'open',
          delegatesFocus: true
        });
      }
    }, {
      kind: "method",
      key: "connectedCallback",
      value: function connectedCallback() {
        if (!this.hasAttribute('role')) {
          this.setAttribute('role', 'listitem');
        }

        _get(_getPrototypeOf(BXHeaderMenu.prototype), "connectedCallback", this).call(this);
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
          triggerContent,
          menuLabel,
          _handleClick: handleClick,
          _handleKeydownTrigger: handleKeydownTrigger
        } = this;
        return html(_t || (_t = _` <a part="trigger" tabindex="0" class="${0}--header__menu-item ${0}--header__menu-title" href="javascript:void 0" aria-haspopup="menu" aria-expanded="${0}" @click="${0}" @keydown="${0}"> ${0}${0} </a> <ul part="menu-body" class="${0}--header__menu" aria-label="${0}"> <slot></slot> </ul> `), prefix, prefix, String(Boolean(expanded)), handleClick, handleKeydownTrigger, triggerContent, ChevronDownGlyph({
          part: 'trigger-icon',
          class: `${prefix}--header__menu-arrow`
        }), prefix, ifDefined(menuLabel));
      }
      /**
       * A selector that will return the menu items.
       */

    }, {
      kind: "get",
      static: true,
      key: "selectorItem",
      value: function selectorItem() {
        return `${prefix}-header-menu-item`;
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

export default BXHeaderMenu;
//# sourceMappingURL=header-menu.js.map

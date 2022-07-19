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
import { html, property, customElement, LitElement } from 'lit-element';
import settings from 'carbon-components/es/globals/js/settings';
import on from 'carbon-components/es/globals/js/misc/on';
import HostListenerMixin from '../../globals/mixins/host-listener';
import HostListener from '../../globals/decorators/host-listener';
import { forEach } from '../../globals/internal/collection-helpers';
import { SIDE_NAV_COLLAPSE_MODE, SIDE_NAV_USAGE_MODE } from './defs';
import styles from "././side-nav.css.js";
export { SIDE_NAV_COLLAPSE_MODE, SIDE_NAV_USAGE_MODE };
const {
  prefix
} = settings;
/**
 * Side nav.
 * @element bx-side-nav
 */

let BXSideNav = _decorate([customElement(`${prefix}-side-nav`)], function (_initialize, _HostListenerMixin) {
  class BXSideNav extends _HostListenerMixin {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXSideNav,
    d: [{
      kind: "field",
      key: "_hovered",

      value() {
        return false;
      }

    }, {
      kind: "field",
      key: "_hTransition",

      value() {
        return null;
      }

    }, {
      kind: "field",
      key: "_transitionPromise",

      value() {
        return Promise.resolve();
      }

    }, {
      kind: "get",
      key: "_updateAndTransitionPromise",
      value:
      /**
       * `true` if this side nav is hovered.
       */

      /**
       * The handle for `transitionend` event listener.
       */

      /**
       * A promise that is resolved when the transition is complete.
       */

      /**
       * A promise that is resolved when the transition upon proprety update is complete.
       */
      function _updateAndTransitionPromise() {
        return this.updateComplete.then(() => this._transitionPromise);
      }
      /**
       * Cleans the handle for `transitionend` event listener.
       */

    }, {
      kind: "method",
      key: "_cleanHTransition",
      value: function _cleanHTransition() {
        if (this._hTransition) {
          this._hTransition = this._hTransition.release();
        }
      }
      /**
       * Handles `${prefix}-header-menu-button-toggle` event on the document.
       */

    }, {
      kind: "field",
      decorators: [HostListener('parentRoot:eventButtonToggle')],
      key: "_handleButtonToggle",

      value() {
        return async event => {
          this.expanded = event.detail.active;

          if (this.expanded) {
            await this._updateAndTransitionPromise; // Checks if the side nav is not collapsed during the animation

            if (this.expanded) {
              var _this$querySelector;

              (_this$querySelector = this.querySelector(this.constructor.selectorNavItems)) === null || _this$querySelector === void 0 ? void 0 : _this$querySelector.focus();
            }
          }
        };
      }

    }, {
      kind: "method",
      key: "_updatedSideNavMenuForceCollapsedState",
      value:
      /**
       * Force child side nav menus collapsed upon the hover/expanded state of this side nav.
       */
      function _updatedSideNavMenuForceCollapsedState() {
        const {
          expanded,
          _hovered: hovered
        } = this;
        forEach(this.querySelectorAll(this.constructor.selectorMenu), item => {
          item.forceCollapsed = !expanded && !hovered;
        });
      }
      /**
       * Handles `mouseover` event handler.
       */

    }, {
      kind: "method",
      decorators: [HostListener('mouseover')],
      key: "_handleMouseover",
      value: function _handleMouseover() {
        this._hovered = true;

        this._updatedSideNavMenuForceCollapsedState();
      }
      /**
       * Handles `mouseout` event handler.
       */

    }, {
      kind: "method",
      decorators: [HostListener('mouseout')],
      key: "_handleMouseout",
      value: function _handleMouseout() {
        this._hovered = false;

        this._updatedSideNavMenuForceCollapsedState();
      }
      /**
       * Collapse mode of the side nav.
       */

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
      key: "expanded",

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
      key: "connectedCallback",
      value:
      /**
       * `true` to expand the side nav.
       */

      /**
       * Usage mode of the side nav.
       */
      function connectedCallback() {
        if (!this.hasAttribute('role')) {
          this.setAttribute('role', 'navigation');
        }

        _get(_getPrototypeOf(BXSideNav.prototype), "connectedCallback", this).call(this);
      }
    }, {
      kind: "method",
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        this._cleanHTransition();

        _get(_getPrototypeOf(BXSideNav.prototype), "disconnectedCallback", this).call(this);
      }
    }, {
      kind: "method",
      key: "shouldUpdate",
      value: function shouldUpdate(changedProperties) {
        if (changedProperties.has('expanded')) {
          this._transitionPromise = new Promise(resolve => {
            this._cleanHTransition();

            this._hTransition = on(this, 'transitionend', () => {
              this._cleanHTransition();

              resolve();
            });
          });
        }

        return true;
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProperties) {
        if (changedProperties.has('collapseMode') || changedProperties.has('usageMode')) {
          const {
            collapseMode,
            usageMode
          } = this;

          if ((collapseMode === SIDE_NAV_COLLAPSE_MODE.FIXED || collapseMode === SIDE_NAV_COLLAPSE_MODE.RAIL) && usageMode === SIDE_NAV_USAGE_MODE.HEADER_NAV) {
            console.warn('Fixed/rail modes of side nav cannot be used with header nav mode.'); // eslint-disable-line no-console
          }
        }

        const doc = this.getRootNode();

        if (changedProperties.has('collapseMode')) {
          forEach(doc.querySelectorAll(this.constructor.selectorButtonToggle), item => {
            item.collapseMode = this.collapseMode;
          });
        }

        if (changedProperties.has('expanded')) {
          this._updatedSideNavMenuForceCollapsedState();

          forEach(doc.querySelectorAll(this.constructor.selectorButtonToggle), item => {
            item.active = this.expanded;
          });
        }

        if (changedProperties.has('usageMode')) {
          forEach(doc.querySelectorAll(this.constructor.selectorButtonToggle), item => {
            item.usageMode = this.usageMode;
          });
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return html(_t || (_t = _`<slot></slot>`));
      }
      /**
       * A selector that will return the toggle buttons.
       */

    }, {
      kind: "get",
      static: true,
      key: "selectorButtonToggle",
      value: function selectorButtonToggle() {
        return `${prefix}-header-menu-button`;
      }
      /**
       * A selector that will return side nav focusable items.
       */

    }, {
      kind: "get",
      static: true,
      key: "selectorNavItems",
      value: function selectorNavItems() {
        return `${prefix}-side-nav-menu, ${prefix}-side-nav-menu-item, ${prefix}-side-nav-link`;
      }
      /**
       * A selector that will return side nav menus.
       */

    }, {
      kind: "get",
      static: true,
      key: "selectorMenu",
      value: function selectorMenu() {
        return `${prefix}-side-nav-menu`;
      }
      /**
       * The name of the custom event fired after the header menu button in the document is toggled upon a user gesture.
       */

    }, {
      kind: "get",
      static: true,
      key: "eventButtonToggle",
      value: function eventButtonToggle() {
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
}, HostListenerMixin(LitElement));

export default BXSideNav;
//# sourceMappingURL=side-nav.js.map

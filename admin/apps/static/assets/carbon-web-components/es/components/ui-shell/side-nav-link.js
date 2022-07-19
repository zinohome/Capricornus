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
import { classMap } from 'lit-html/directives/class-map';
import { html, property, query, customElement, LitElement } from 'lit-element';
import FocusMixin from '../../globals/mixins/focus';
import styles from "././side-nav.css.js";
const {
  prefix
} = settings;
/**
 * Side nav menu item.
 * @element bx-side-nav-link
 * @slot link - The link.
 * @slot title - The title.
 * @slot title-icon-container - The title icon container.
 */

let BXSideNavLink = _decorate([customElement(`${prefix}-side-nav-link`)], function (_initialize, _FocusMixin) {
  class BXSideNavLink extends _FocusMixin {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXSideNavLink,
    d: [{
      kind: "field",
      decorators: [query('#title-icon-container')],
      key: "_titleIconContainerNode",
      value: void 0
    }, {
      kind: "method",
      key: "_handleSlotChangeTitleIcon",
      value:
      /**
       * The container for the title icon.
       */

      /**
       * Handles `slotchange` event on the `<slot>` for the title icon.
       */
      function _handleSlotChangeTitleIcon({
        target
      }) {
        var _this$_titleIconConta;

        (_this$_titleIconConta = this._titleIconContainerNode) === null || _this$_titleIconConta === void 0 ? void 0 : _this$_titleIconConta.toggleAttribute('hidden', target.assignedNodes().length === 0);
      }
      /**
       * `true` if the menu item should be active.
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
      decorators: [property()],
      key: "href",

      value() {
        return '';
      }

    }, {
      kind: "field",
      decorators: [property()],
      key: "title",
      value: void 0
    }, {
      kind: "method",
      key: "createRenderRoot",
      value:
      /**
       * Link `href`.
       */

      /**
       * The title.
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

        _get(_getPrototypeOf(BXSideNavLink.prototype), "connectedCallback", this).call(this);
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const {
          active,
          href,
          title,
          _handleSlotChangeTitleIcon: handleSlotChangeTitleIcon
        } = this;
        const classes = classMap({
          [`${prefix}--side-nav__link`]: true,
          [`${prefix}--side-nav__link--current`]: active
        });
        return html(_t || (_t = _` <a part="link" class="${0}" href="${0}"> <div id="title-icon-container" part="title-icon-container" hidden class="${0}--side-nav__icon"> <slot name="title-icon" @slotchange="${0}"></slot> </div> <span part="title" class="${0}--side-nav__link-text"> <slot>${0}</slot> </span> </a> `), classes, href, prefix, handleSlotChangeTitleIcon, prefix, title);
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

export default BXSideNavLink;
//# sourceMappingURL=side-nav-link.js.map

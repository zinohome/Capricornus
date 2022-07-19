import _decorate from "@babel/runtime/helpers/esm/decorate";

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
import { classMap } from 'lit-html/directives/class-map';
import { html, property, customElement, LitElement } from 'lit-element';
import FocusMixin from '../../globals/mixins/focus';
import styles from "././side-nav.css.js";
const {
  prefix
} = settings;
/**
 * Side nav menu item.
 * @element bx-side-nav-menu-item
 * @csspart link The link.
 * @csspart title The title.
 */

let BXSideNavMenuItem = _decorate([customElement(`${prefix}-side-nav-menu-item`)], function (_initialize, _FocusMixin) {
  class BXSideNavMenuItem extends _FocusMixin {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXSideNavMenuItem,
    d: [{
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
       * `true` if the menu item should be active.
       */

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
      key: "shouldUpdate",
      value: function shouldUpdate(changedProperties) {
        if (changedProperties.has('active') && this.active) {
          const {
            selectorMenu
          } = this.constructor;
          const parent = this.closest(selectorMenu);

          if (parent) {
            parent.active = true;
          }
        }

        return true;
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const {
          active,
          href,
          title
        } = this;
        const classes = classMap({
          [`${prefix}--side-nav__link`]: true,
          [`${prefix}--side-nav__link--current`]: active
        });
        return html(_t || (_t = _` <a part="link" class="${0}" href="${0}"> <span part="title" class="${0}--side-nav__link-text"> <slot>${0}</slot> </span> </a> `), classes, href, prefix, title);
      }
      /**
       * A selector that will return the parent menu.
       */

    }, {
      kind: "get",
      static: true,
      key: "selectorMenu",
      value: function selectorMenu() {
        return `${prefix}-side-nav-menu`;
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

export default BXSideNavMenuItem;
//# sourceMappingURL=side-nav-menu-item.js.map

import _decorate from "@babel/runtime/helpers/esm/decorate";
import _get from "@babel/runtime/helpers/esm/get";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

let _ = t => t,
    _t,
    _t2;

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
import FocusMixin from '../../globals/mixins/focus';
import styles from "././overflow-menu.css.js";
const {
  prefix
} = settings;
/**
 * Overflow menu item.
 * @element bx-overflow-menu-item
 */

let BXOverflowMenuItem = _decorate([customElement(`${prefix}-overflow-menu-item`)], function (_initialize, _FocusMixin) {
  class BXOverflowMenuItem extends _FocusMixin {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXOverflowMenuItem,
    d: [{
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "danger",

      value() {
        return false;
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
      decorators: [property()],
      key: "href",

      value() {
        return '';
      }

    }, {
      kind: "method",
      key: "createRenderRoot",
      value:
      /**
       * `true` if the action is danger.
       */

      /**
       * `true` if the overflow menu item should be disabled.
       */

      /**
       * The link href of the overflow menu item.
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
          this.setAttribute('role', 'menuitem');
        }

        _get(_getPrototypeOf(BXOverflowMenuItem.prototype), "connectedCallback", this).call(this);
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return this.href ? html(_t || (_t = _` <a class="${0}--overflow-menu-options__btn" ?disabled="${0}" href="${0}" tabindex="${0}"><slot></slot></a> `), prefix, this.disabled, this.href, this.disabled ? -1 : 0) : html(_t2 || (_t2 = _` <button class="${0}--overflow-menu-options__btn" ?disabled="${0}" tabindex="${0}"> <slot></slot> </button> `), prefix, this.disabled, this.disabled ? -1 : 0);
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

export default BXOverflowMenuItem;
//# sourceMappingURL=overflow-menu-item.js.map

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
import { ifDefined } from 'lit-html/directives/if-defined';
import { html, property, customElement, LitElement } from 'lit-element';
import FocusMixin from '../../globals/mixins/focus';
import styles from "././header.css.js";
const {
  prefix
} = settings;
/**
 * Header nav item.
 * @element bx-header-nav-item
 * @csspart link The link.
 * @csspart title The title.
 */

let BXHeaderNavItem = _decorate([customElement(`${prefix}-header-nav-item`)], function (_initialize, _FocusMixin) {
  class BXHeaderNavItem extends _FocusMixin {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXHeaderNavItem,
    d: [{
      kind: "field",
      decorators: [property()],
      key: "href",
      value: void 0
    }, {
      kind: "field",
      decorators: [property()],
      key: "title",
      value: void 0
    }, {
      kind: "field",
      decorators: [property({
        reflect: true
      })],
      key: "role",

      value() {
        return 'listitem';
      }

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

      /**
       * As child of <ul>, this element must have role of listitem
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
          href,
          title
        } = this;
        return html(_t || (_t = _` <a part="link" class="${0}--header__menu-item" tabindex="0" href="${0}"> <span part="title" class="${0}--text-truncate--end"><slot>${0}</slot></span> </a> `), prefix, ifDefined(href), prefix, title);
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

export default BXHeaderNavItem;
//# sourceMappingURL=header-nav-item.js.map

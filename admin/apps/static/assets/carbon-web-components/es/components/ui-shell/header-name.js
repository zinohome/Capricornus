import _decorate from "@babel/runtime/helpers/esm/decorate";

let _ = t => t,
    _t,
    _t2;

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
 * The product name UI in header nav.
 * @element bx-header-name
 * @csspart link The link.
 * @csspart prefix The prefix content.
 */

let BXHeaderName = _decorate([customElement(`${prefix}-header-name`)], function (_initialize, _FocusMixin) {
  class BXHeaderName extends _FocusMixin {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXHeaderName,
    d: [{
      kind: "field",
      decorators: [property()],
      key: "href",
      value: void 0
    }, {
      kind: "field",
      decorators: [property()],
      key: "prefix",
      value: void 0
    }, {
      kind: "method",
      key: "createRenderRoot",
      value:
      /**
       * Link `href`.
       */

      /**
       * The product name prefix.
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
          prefix: namePrefix
        } = this;
        const namePrefixPart = !namePrefix ? undefined : html(_t || (_t = _` <span part="prefix" class="${0}--header__name--prefix">${0}</span> `), prefix, namePrefix);
        return html(_t2 || (_t2 = _` <a part="link" class="${0}--header__name" href="${0}">${0}&nbsp;<slot></slot></a> `), prefix, ifDefined(href), namePrefixPart);
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

export default BXHeaderName;
//# sourceMappingURL=header-name.js.map

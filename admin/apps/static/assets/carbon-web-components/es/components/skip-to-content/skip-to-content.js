import _decorate from "@babel/runtime/helpers/esm/decorate";
import _get from "@babel/runtime/helpers/esm/get";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

let _ = t => t,
    _t;

/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { html, property, customElement, LitElement } from 'lit-element';
import settings from 'carbon-components/es/globals/js/settings.js';
import ifNonNull from '../../globals/directives/if-non-null';
import FocusMixin from '../../globals/mixins/focus';
import styles from "././skip-to-content.css.js";
const {
  prefix
} = settings;
/**
 * Skip-to-content link.
 * @element bx-skip-to-content
 */

let BXSkipToContent = _decorate([customElement(`${prefix}-skip-to-content`)], function (_initialize, _FocusMixin) {
  class BXSkipToContent extends _FocusMixin {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXSkipToContent,
    d: [{
      kind: "field",
      decorators: [property({
        attribute: 'link-assistive-text'
      })],
      key: "linkAssisstiveText",

      value() {
        return 'Skip to main content';
      }

    }, {
      kind: "field",
      decorators: [property()],
      key: "href",
      value: void 0
    }, {
      kind: "method",
      key: "createRenderRoot",
      value:
      /**
       * The assistive text for the link,
       */

      /**
       * The skip link href.
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
          this.setAttribute('role', 'navigation');
        }

        _get(_getPrototypeOf(BXSkipToContent.prototype), "connectedCallback", this).call(this);
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const {
          linkAssisstiveText
        } = this;
        return html(_t || (_t = _` <a class="${0}--skip-to-content" href="${0}"><slot>${0}</slot></a> `), prefix, ifNonNull(this.href), linkAssisstiveText);
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProperties) {
        if (changedProperties.has('linkAssisstiveText')) {
          const {
            linkAssisstiveText
          } = this;
          this.setAttribute('aria-label', linkAssisstiveText);
        }
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

export default BXSkipToContent;
//# sourceMappingURL=skip-to-content.js.map

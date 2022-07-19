import _decorate from "@babel/runtime/helpers/esm/decorate";

let _2 = t => t,
    _t,
    _t2,
    _t3;

/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { classMap } from 'lit-html/directives/class-map';
import { html, property, customElement, LitElement, query } from 'lit-element';
import settings from 'carbon-components/es/globals/js/settings';
import ifNonNull from '../../globals/directives/if-non-null';
import FocusMixin from '../../globals/mixins/focus';
import styles from "././link.css.js";
const {
  prefix
} = settings;
/**
 * Link size.
 */

export let LINK_SIZE;
/**
 * Link.
 * @element bx-link
 * @csspart link The link.
 */

(function (LINK_SIZE) {
  LINK_SIZE["REGULAR"] = "";
  LINK_SIZE["SMALL"] = "sm";
  LINK_SIZE["LARGE"] = "lg";
})(LINK_SIZE || (LINK_SIZE = {}));

let BXLink = _decorate([customElement(`${prefix}-link`)], function (_initialize, _FocusMixin) {
  class BXLink extends _FocusMixin {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXLink,
    d: [{
      kind: "field",
      key: "_hasIcon",

      value() {
        return false;
      }

    }, {
      kind: "method",
      key: "_handleSlotChange",
      value:
      /**
       * `true` if there is an icon.
       */

      /**
       * Handles `slotchange` event.
       */
      function _handleSlotChange({
        target
      }) {
        const {
          name
        } = target;
        const hasContent = target.assignedNodes().some(node => node.nodeType !== Node.TEXT_NODE || node.textContent.trim());
        this[name === 'icon' ? '_hasIcon' : ''] = hasContent;
        this.requestUpdate();
      }
    }, {
      kind: "field",
      decorators: [query('#link')],
      key: "_linkNode",
      value: void 0
    }, {
      kind: "get",
      key: "_classes",
      value:
      /**
       * The CSS class list for the link node.
       */
      function _classes() {
        const {
          disabled,
          size
        } = this;
        return classMap({
          [`${prefix}--link`]: true,
          [`${prefix}--link--disabled`]: disabled,
          [`${prefix}--link--${size}`]: size
        });
      }
      /**
       * Handles `click` event on the `<a>`.
       */
      // eslint-disable-next-line class-methods-use-this, @typescript-eslint/no-unused-vars

    }, {
      kind: "method",
      key: "_handleClick",
      value: function _handleClick(_) {}
      /**
       * @returns The inner content.
       */
      // eslint-disable-next-line class-methods-use-this

    }, {
      kind: "method",
      key: "_renderInner",
      value: function _renderInner() {
        const {
          _hasIcon: hasIcon,
          _handleSlotChange: handleSlotChange
        } = this;
        return html(_t || (_t = _2` <slot @slotchange="${0}"></slot> <div ?hidden="${0}" class="${0}--link__icon"><slot name="icon" @slotchange="${0}"></slot></div> `), handleSlotChange, !hasIcon, prefix, handleSlotChange);
      }
      /**
       * @returns The disabled link content.
       */

    }, {
      kind: "method",
      key: "_renderDisabledLink",
      value: function _renderDisabledLink() {
        const {
          _classes: classes
        } = this;
        return html(_t2 || (_t2 = _2` <p id="link" part="link" class="${0}">${0}</p> `), classes, this._renderInner());
      }
      /**
       * @returns The link content.
       */

    }, {
      kind: "method",
      key: "_renderLink",
      value: function _renderLink() {
        const {
          download,
          href,
          hreflang,
          linkRole,
          ping,
          rel,
          target,
          type,
          _classes: classes,
          _handleClick: handleClick
        } = this;
        return html(_t3 || (_t3 = _2` <a id="link" role="${0}" class="${0}" part="link" download="${0}" href="${0}" hreflang="${0}" ping="${0}" rel="${0}" target="${0}" type="${0}" @click="${0}"> ${0} </a> `), ifNonNull(linkRole), classes, ifNonNull(download), ifNonNull(href), ifNonNull(hreflang), ifNonNull(ping), ifNonNull(rel), ifNonNull(target), ifNonNull(type), handleClick, this._renderInner());
      }
      /**
       * `true` if the button should be disabled.
       */

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
        reflect: true
      })],
      key: "download",
      value: void 0
    }, {
      kind: "field",
      decorators: [property({
        reflect: true
      })],
      key: "href",
      value: void 0
    }, {
      kind: "field",
      decorators: [property({
        reflect: true
      })],
      key: "hreflang",
      value: void 0
    }, {
      kind: "field",
      decorators: [property({
        attribute: 'link-role'
      })],
      key: "linkRole",
      value: void 0
    }, {
      kind: "field",
      decorators: [property({
        reflect: true
      })],
      key: "ping",
      value: void 0
    }, {
      kind: "field",
      decorators: [property({
        reflect: true
      })],
      key: "rel",
      value: void 0
    }, {
      kind: "field",
      decorators: [property({
        reflect: true
      })],
      key: "size",

      value() {
        return LINK_SIZE.REGULAR;
      }

    }, {
      kind: "field",
      decorators: [property({
        reflect: true
      })],
      key: "target",
      value: void 0
    }, {
      kind: "field",
      decorators: [property({
        reflect: true
      })],
      key: "type",
      value: void 0
    }, {
      kind: "method",
      key: "createRenderRoot",
      value:
      /**
       * The default file name.
       */

      /**
       * Link `href`.
       */

      /**
       * The language of what `href` points to.
       */

      /**
       * The a11y role for `<a>`.
       */

      /**
       * URLs to ping.
       */

      /**
       * The link type.
       */

      /**
       * Link size.
       */

      /**
       * The link target.
       */

      /**
       * MIME type of the `target`.
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
          disabled
        } = this;
        return disabled ? this._renderDisabledLink() : this._renderLink();
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

export default BXLink;
//# sourceMappingURL=link.js.map

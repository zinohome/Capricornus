import _decorate from "@babel/runtime/helpers/esm/decorate";

let _ = t => t,
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
import settings from 'carbon-components/es/globals/js/settings';
import { classMap } from 'lit-html/directives/class-map';
import { html, property, customElement, LitElement } from 'lit-element';
import ifNonNull from '../../globals/directives/if-non-null';
import FocusMixin from '../../globals/mixins/focus';
import { BUTTON_KIND, BUTTON_SIZE, BUTTON_ICON_LAYOUT } from './defs';
import styles from "././button.css.js";
import HostListener from '../../globals/decorators/host-listener';
import HostListenerMixin from '../../globals/mixins/host-listener';
export { BUTTON_KIND, BUTTON_SIZE, BUTTON_ICON_LAYOUT };
const {
  prefix
} = settings;
/**
 * Button.
 * @element bx-btn
 * @csspart button The button.
 */

let BXButton = _decorate([customElement(`${prefix}-btn`)], function (_initialize, _HostListenerMixin) {
  class BXButton extends _HostListenerMixin {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXButton,
    d: [{
      kind: "field",
      key: "_hasIcon",

      value() {
        return false;
      }

    }, {
      kind: "field",
      key: "_hasMainContent",

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
       * `true` if there is a non-icon content.
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
        this[name === 'icon' ? '_hasIcon' : '_hasMainContent'] = hasContent;
        this.requestUpdate();
      }
    }, {
      kind: "method",
      decorators: [HostListener('click', {
        capture: true
      })],
      key: "_handleDisabledClick",
      value: function _handleDisabledClick(event) {
        const {
          disabled
        } = this;

        if (disabled) {
          event.stopPropagation();
        }
      }
      /**
       * `true` if the button should have input focus when the page loads.
       */

    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "autofocus",

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
        reflect: true,
        attribute: 'icon-layout'
      })],
      key: "iconLayout",

      value() {
        return BUTTON_ICON_LAYOUT.REGULAR;
      }

    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "isExpressive",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [property({
        reflect: true
      })],
      key: "kind",

      value() {
        return BUTTON_KIND.PRIMARY;
      }

    }, {
      kind: "field",
      decorators: [property({
        attribute: 'link-role'
      })],
      key: "linkRole",

      value() {
        return 'button';
      }

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
        return BUTTON_SIZE.REGULAR;
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
       * `true` if the button should be disabled.
       */

      /**
       * The default file name, used if this button is rendered as `<a>`.
       */

      /**
       * Link `href`. If present, this button is rendered as `<a>`.
       */

      /**
       * The language of what `href` points to, if this button is rendered as `<a>`.
       */

      /**
       * Button icon layout.
       */

      /**
       * `true` if expressive theme enabled.
       */

      /**
       * Button kind.
       */

      /**
       * The a11y role for `<a>`.
       */

      /**
       * URLs to ping, if this button is rendered as `<a>`.
       */

      /**
       * The link type, if this button is rendered as `<a>`.
       */

      /**
       * Button size.
       */

      /**
       * The link target, if this button is rendered as `<a>`.
       */

      /**
       * The default behavior if the button is rendered as `<button>`. MIME type of the `target`if this button is rendered as `<a>`.
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
          autofocus,
          disabled,
          download,
          href,
          hreflang,
          isExpressive,
          linkRole,
          kind,
          ping,
          rel,
          size,
          target,
          type,
          _hasIcon: hasIcon,
          _hasMainContent: hasMainContent,
          _handleSlotChange: handleSlotChange
        } = this;
        const classes = classMap({
          [`${prefix}--btn`]: true,
          [`${prefix}--btn--${kind}`]: kind,
          [`${prefix}--btn--disabled`]: disabled,
          [`${prefix}--btn--icon-only`]: hasIcon && !hasMainContent,
          [`${prefix}--btn--sm`]: size === 'sm' && !isExpressive,
          [`${prefix}--btn--xl`]: size === 'xl',
          [`${prefix}--btn--field`]: size === 'field' && !isExpressive,
          [`${prefix}-ce--btn--has-icon`]: hasIcon,
          [`${prefix}--btn--expressive`]: isExpressive
        });

        if (href) {
          return disabled ? html(_t || (_t = _` <p id="button" part="button" class="${0}"> <slot @slotchange="${0}"></slot> <slot name="icon" @slotchange="${0}"></slot> </p> `), classes, handleSlotChange, handleSlotChange) : html(_t2 || (_t2 = _` <a id="button" part="button" role="${0}" class="${0}" download="${0}" href="${0}" hreflang="${0}" ping="${0}" rel="${0}" target="${0}" type="${0}"> <slot @slotchange="${0}"></slot> <slot name="icon" @slotchange="${0}"></slot> </a> `), ifNonNull(linkRole), classes, ifNonNull(download), ifNonNull(href), ifNonNull(hreflang), ifNonNull(ping), ifNonNull(rel), ifNonNull(target), ifNonNull(type), handleSlotChange, handleSlotChange);
        }

        return html(_t3 || (_t3 = _` <button id="button" part="button" class="${0}" ?autofocus="${0}" ?disabled="${0}" type="${0}"> <slot @slotchange="${0}"></slot> <slot name="icon" @slotchange="${0}"></slot> </button> `), classes, autofocus, disabled, ifNonNull(type), handleSlotChange, handleSlotChange);
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

export default BXButton;
//# sourceMappingURL=button.js.map

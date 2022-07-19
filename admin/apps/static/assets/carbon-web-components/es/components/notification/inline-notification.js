import _decorate from "@babel/runtime/helpers/esm/decorate";
import _get from "@babel/runtime/helpers/esm/get";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

let _ = t => t,
    _t,
    _t2,
    _t3,
    _t4;

/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import CheckmarkFilled20 from "../../icons/checkmark--filled/20";
import Close20 from "../../icons/close/20";
import ErrorFilled20 from "../../icons/error--filled/20";
import WarningFilled20 from "../../icons/warning--filled/20";
import settings from 'carbon-components/es/globals/js/settings';
import { customElement, html, LitElement, property, svg } from 'lit-element';
import { ifDefined } from 'lit-html/directives/if-defined';
import FocusMixin from '../../globals/mixins/focus';
import { NOTIFICATION_KIND, NOTIFICATION_TYPE } from './defs';
import styles from "././inline-notification.css.js";
export { NOTIFICATION_KIND, NOTIFICATION_TYPE };
const {
  prefix
} = settings;
/**
 * The default icons, keyed by notification kind.
 */

const iconsForKinds = {
  [NOTIFICATION_KIND.SUCCESS]: CheckmarkFilled20,
  [NOTIFICATION_KIND.INFO]: undefined,
  [NOTIFICATION_KIND.WARNING]: WarningFilled20,
  [NOTIFICATION_KIND.ERROR]: ErrorFilled20
};
/**
 * Inline notification.
 * @element bx-inline-notification
 * @slot subtitle - The subtitle.
 * @slot title - The title.
 * @fires bx-notification-beingclosed
 *   The custom event fired before this notification is being closed upon a user gesture.
 *   Cancellation of this event stops the user-initiated action of closing this notification.
 * @fires bx-notification-closed - The custom event fired after this notification is closed upon a user gesture.
 */

let BXInlineNotification = _decorate([customElement(`${prefix}-inline-notification`)], function (_initialize, _FocusMixin) {
  class BXInlineNotification extends _FocusMixin {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXInlineNotification,
    d: [{
      kind: "field",
      key: "_timeoutID",

      value() {
        return null;
      }

    }, {
      kind: "field",
      key: "_type",

      value() {
        return NOTIFICATION_TYPE.INLINE;
      }

    }, {
      kind: "method",
      key: "_cancelTimeout",
      value:
      /**
       * Current timeout identifier
       */

      /**
       * Notification type.
       */

      /**
       * Cancels the current timeout configured for the notification
       * @param timeoutID current timeout's identifier
       */
      function _cancelTimeout(timeoutID) {
        clearTimeout(timeoutID);
        this._timeoutID = null;
      }
      /**
       * Overrides (if exists) the timeout to close the notification
       * @param timeout the time in ms
       */

    }, {
      kind: "method",
      key: "_initializeTimeout",
      value: function _initializeTimeout(timeout) {
        if (this._timeoutID) {
          this._cancelTimeout(this._timeoutID);
        }

        this._timeoutID = setTimeout(this._handleUserOrTimerInitiatedClose.bind(this, null), timeout);
      }
      /**
       * Handles `click` event on the close button.
       * @param event The event.
       */

    }, {
      kind: "method",
      key: "_handleClickCloseButton",
      value: function _handleClickCloseButton({
        target
      }) {
        this._handleUserOrTimerInitiatedClose(target);
      }
      /**
       * Handles user-initiated or through timer close request of this modal.
       * @param triggeredBy The element that triggered this close request, if there is one.
       */

    }, {
      kind: "method",
      key: "_handleUserOrTimerInitiatedClose",
      value: function _handleUserOrTimerInitiatedClose(triggeredBy) {
        if (this.open) {
          const init = {
            bubbles: true,
            cancelable: true,
            composed: true,
            detail: {
              triggeredBy
            }
          };

          if (this.dispatchEvent(new CustomEvent(this.constructor.eventBeforeClose, init))) {
            this.open = false;
            this.dispatchEvent(new CustomEvent(this.constructor.eventClose, init));
          }
        }
      }
      /**
       * @returns The template part for the close button.
       */

    }, {
      kind: "method",
      key: "_renderButton",
      value: function _renderButton() {
        const {
          closeButtonLabel,
          _type: type,
          _handleClickCloseButton: handleClickCloseButton
        } = this;
        return html(_t || (_t = _` <button type="button" class="${0}--${0}-notification__close-button" aria-label="${0}" title="${0}" @click="${0}"> ${0} </button> `), prefix, type, ifDefined(closeButtonLabel), ifDefined(closeButtonLabel), handleClickCloseButton, Close20({
          class: `${prefix}--${type}-notification__close-icon`
        }));
      }
      /**
       * @returns The template part for the text contents.
       */

    }, {
      kind: "method",
      key: "_renderText",
      value: function _renderText() {
        const {
          subtitle,
          title,
          _type: type
        } = this;
        return html(_t2 || (_t2 = _` <div class="${0}--${0}-notification__text-wrapper"> <p class="${0}--${0}-notification__title">${0}<slot name="title"></slot></p> <div class="${0}--${0}-notification__subtitle">${0}<slot name="subtitle"></slot></div> <slot></slot> </div> `), prefix, type, prefix, type, title, prefix, type, subtitle);
      }
      /**
       * @returns The template part for the icon.
       */

    }, {
      kind: "method",
      key: "_renderIcon",
      value: function _renderIcon() {
        const {
          iconLabel,
          kind,
          _type: type
        } = this;
        const {
          [kind]: icon
        } = iconsForKinds;
        return !icon ? undefined : icon({
          class: `${prefix}--${type}-notification__icon`,
          children: !iconLabel ? undefined : svg(_t3 || (_t3 = _`<title>${0}</title>`), iconLabel)
        });
      }
      /**
       * The a11y text for the close button.
       */

    }, {
      kind: "field",
      decorators: [property({
        attribute: 'close-button-label'
      })],
      key: "closeButtonLabel",
      value: void 0
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true,
        attribute: 'hide-close-button'
      })],
      key: "hideCloseButton",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [property({
        attribute: 'icon-label'
      })],
      key: "iconLabel",
      value: void 0
    }, {
      kind: "field",
      decorators: [property({
        reflect: true
      })],
      key: "kind",

      value() {
        return NOTIFICATION_KIND.SUCCESS;
      }

    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true,
        attribute: 'low-contrast'
      })],
      key: "lowContrast",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "open",

      value() {
        return true;
      }

    }, {
      kind: "field",
      decorators: [property({
        type: Number,
        reflect: true
      })],
      key: "timeout",

      value() {
        return null;
      }

    }, {
      kind: "field",
      decorators: [property()],
      key: "subtitle",

      value() {
        return '';
      }

    }, {
      kind: "field",
      decorators: [property()],
      key: "title",

      value() {
        return '';
      }

    }, {
      kind: "method",
      key: "connectedCallback",
      value:
      /**
       * `true` to hide the close button.
       */

      /**
       * The a11y text for the icon.
       */

      /**
       * Notification kind.
       */

      /**
       * Low contrast mode
       */

      /**
       * `true` if the notification should be open.
       */

      /**
       * Notification time in ms until gets closed.
       */

      /**
       * The subtitle.
       */

      /**
       * The title.
       */
      function connectedCallback() {
        if (!this.hasAttribute('role')) {
          this.setAttribute('role', 'alert');
        }

        _get(_getPrototypeOf(BXInlineNotification.prototype), "connectedCallback", this).call(this);
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProperties) {
        const openChanged = changedProperties.has('open');
        const timeoutChanged = changedProperties.has('timeout');

        if (openChanged || timeoutChanged) {
          if (this.open && this.timeout) {
            this._initializeTimeout(this.timeout);
          } else if (!this.open && this._timeoutID) {
            this._cancelTimeout(this._timeoutID);
          }
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const {
          _type: type
        } = this;
        return html(_t4 || (_t4 = _` <div class="${0}--${0}-notification__details">${0}${0}</div> ${0} `), prefix, type, this._renderIcon(), this._renderText(), this._renderButton());
      }
      /**
       * The name of the custom event fired before this notification is being closed upon a user gesture.
       * Cancellation of this event stops the user-initiated action of closing this notification.
       */

    }, {
      kind: "get",
      static: true,
      key: "eventBeforeClose",
      value: function eventBeforeClose() {
        return `${prefix}-notification-beingclosed`;
      }
      /**
       * The name of the custom event fired after this notification is closed upon a user gesture.
       */

    }, {
      kind: "get",
      static: true,
      key: "eventClose",
      value: function eventClose() {
        return `${prefix}-notification-closed`;
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

export default BXInlineNotification;
//# sourceMappingURL=inline-notification.js.map

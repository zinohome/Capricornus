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
import { html, property, customElement } from 'lit-element';
import { NOTIFICATION_TYPE } from './defs';
import BXInlineNotification from './inline-notification';
import styles from "././toast-notification.css.js";
const {
  prefix
} = settings;
/**
 * Toast notification.
 * @element bx-toast-notification
 * @slot subtitle - The subtitle.
 * @slot title - The title.
 * @fires bx-notification-beingclosed
 *   The custom event fired before this notification is being closed upon a user gesture.
 *   Cancellation of this event stops the user-initiated action of closing this notification.
 * @fires bx-notification-closed - The custom event fired after this notification is closed upon a user gesture.
 */

let BXToastNotification = _decorate([customElement(`${prefix}-toast-notification`)], function (_initialize, _BXInlineNotification) {
  class BXToastNotification extends _BXInlineNotification {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXToastNotification,
    d: [{
      kind: "field",
      key: "_type",

      value() {
        return NOTIFICATION_TYPE.TOAST;
      }

    }, {
      kind: "method",
      key: "_renderText",
      value: function _renderText() {
        const {
          caption,
          subtitle,
          title,
          _type: type
        } = this;
        return html(_t || (_t = _` <div class="${0}--${0}-notification__details"> <h3 class="${0}--${0}-notification__title">${0}<slot name="title"></slot></h3> <div class="${0}--${0}-notification__subtitle">${0}<slot name="subtitle"></slot></div> <div class="${0}--${0}-notification__caption">${0}<slot name="caption"></slot></div> <slot></slot> </div> `), prefix, type, prefix, type, title, prefix, type, subtitle, prefix, type, caption);
      }
      /**
       * The caption.
       */

    }, {
      kind: "field",
      decorators: [property()],
      key: "caption",

      value() {
        return '';
      }

    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const {
          _type: type
        } = this;
        return html(_t2 || (_t2 = _` ${0} <div class="${0}--${0}-notification__details">${0}</div> ${0} `), this._renderIcon(), prefix, type, this._renderText(), this._renderButton());
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
}, BXInlineNotification);

export default BXToastNotification;
//# sourceMappingURL=toast-notification.js.map

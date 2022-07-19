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
import { html, property, query, customElement, LitElement } from 'lit-element';
import settings from 'carbon-components/es/globals/js/settings';
import Close16 from "../../icons/close/16";
import FocusMixin from '../../globals/mixins/focus';
import HostListener from '../../globals/decorators/host-listener';
import HostListenerMixin from '../../globals/mixins/host-listener';
import { TAG_SIZE, TAG_TYPE } from './defs';
import styles from "././tag.css.js";
export { TAG_SIZE, TAG_TYPE };
const {
  prefix
} = settings;
/**
 * Filter tag.
 * @element bx-filter-tag
 */

let BXFilterTag = _decorate([customElement(`${prefix}-filter-tag`)], function (_initialize, _HostListenerMixin) {
  class BXFilterTag extends _HostListenerMixin {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXFilterTag,
    d: [{
      kind: "field",
      decorators: [query('button')],
      key: "_buttonNode",
      value: void 0
    }, {
      kind: "field",
      decorators: [HostListener('shadowRoot:click')],
      key: "_handleClick",

      value() {
        return event => {
          if (event.composedPath().indexOf(this._buttonNode) >= 0) {
            if (this.disabled) {
              event.stopPropagation();
            } else if (this.open) {
              const init = {
                bubbles: true,
                cancelable: true,
                composed: true,
                detail: {
                  triggeredBy: event.target
                }
              };

              if (this.dispatchEvent(new CustomEvent(this.constructor.eventBeforeClose, init))) {
                this.open = false;
                this.dispatchEvent(new CustomEvent(this.constructor.eventClose, init));
              }
            }
          }
        };
      }

    }, {
      kind: "field",
      decorators: [property({
        type: String,
        reflect: true
      })],
      key: "title",

      value() {
        return 'Clear filter';
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
        reflect: true
      })],
      key: "size",

      value() {
        return TAG_SIZE.REGULAR;
      }

    }, {
      kind: "field",
      decorators: [property({
        reflect: true
      })],
      key: "type",

      value() {
        return TAG_TYPE.RED;
      }

    }, {
      kind: "method",
      key: "render",
      value:
      /**
       * Handles `click` event on this element.
       * @param event The event.
       */

      /**
       * Text to show on filter tag "clear" buttons. Corresponds to the attribute with the same name
       */

      /**
       * `true` if the tag should be disabled
       */

      /**
       * `true` if the tag should be open.
       */

      /**
       * The size of the tag.
       */

      /**
       * The type of the tag.
       */
      function render() {
        const {
          disabled
        } = this;
        return html(_t || (_t = _` <slot></slot> <button class="${0}--tag__close-icon" ?disabled="${0}">${0}</button> `), prefix, disabled, Close16({
          'aria-label': this.title
        }));
      }
      /**
       * The name of the custom event fired before this tag is being closed upon a user gesture.
       * Cancellation of this event stops the user-initiated action of closing this tag.
       */

    }, {
      kind: "get",
      static: true,
      key: "eventBeforeClose",
      value: function eventBeforeClose() {
        return `${prefix}-filter-tag-beingclosed`;
      }
      /**
       * The name of the custom event fired after this tag is closed upon a user gesture.
       */

    }, {
      kind: "get",
      static: true,
      key: "eventClose",
      value: function eventClose() {
        return `${prefix}-filter-tag-closed`;
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

export { BXFilterTag as default };
//# sourceMappingURL=filter-tag.js.map

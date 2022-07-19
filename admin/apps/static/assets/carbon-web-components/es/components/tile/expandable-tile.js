import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
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
import { html, property, customElement, LitElement } from 'lit-element';
import { ifDefined } from 'lit-html/directives/if-defined';
import ChevronDown16 from "../../icons/chevron--down/16";
import settings from 'carbon-components/es/globals/js/settings';
import HostListener from '../../globals/decorators/host-listener';
import FocusMixin from '../../globals/mixins/focus';
import HostListenerMixin from '../../globals/mixins/host-listener';
import { TILE_COLOR_SCHEME } from './defs';
import styles from "././tile.css.js";
const {
  prefix
} = settings;
/**
 * Expandable tile.
 * @element bx-expandable-tile
 * @fires bx-expandable-tile-beingtoggled
 *   The custom event fired before the expanded state is changed upon a user gesture.
 *   Cancellation of this event stops changing the user-initiated change in expanded state.
 * @fires bx-expandable-tile-toggled - The custom event fired after a the expanded state is changed upon a user gesture.
 */

let BXExpandableTile = _decorate([customElement(`${prefix}-expandable-tile`)], function (_initialize, _HostListenerMixin) {
  class BXExpandableTile extends _HostListenerMixin {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXExpandableTile,
    d: [{
      kind: "field",
      key: "_belowTheContentHeight",

      value() {
        return 0;
      }

    }, {
      kind: "method",
      key: "_handleSlotChangeBelowTheFoldContent",
      value:
      /**
       * The computed height of the below-the-fold content.
       */

      /**
       * Handles `slotchange` event on the below-the-fold content.
       * @param event The event.
       */
      function _handleSlotChangeBelowTheFoldContent(event) {
        this._belowTheContentHeight = event.target.assignedNodes().reduce((acc, item) => {
          var _offsetHeight;

          return acc + ((_offsetHeight = item.offsetHeight) !== null && _offsetHeight !== void 0 ? _offsetHeight : 0);
        }, 0);
        this.requestUpdate();
      }
    }, {
      kind: "field",
      decorators: [HostListener('click')],
      key: "_handleClick",

      value() {
        return () => {
          const expanded = !this.expanded;
          const init = {
            bubbles: true,
            composed: true,
            detail: {
              expanded
            }
          };
          const constructor = this.constructor;
          const beforeChangeEvent = new CustomEvent(constructor.eventBeforeToggle, _objectSpread(_objectSpread({}, init), {}, {
            cancelable: true
          }));

          if (this.dispatchEvent(beforeChangeEvent)) {
            this.expanded = expanded;
            const afterChangeEvent = new CustomEvent(constructor.eventToggle, init);
            this.dispatchEvent(afterChangeEvent);
          }
        };
      }

    }, {
      kind: "field",
      decorators: [property({
        attribute: 'color-scheme',
        reflect: true
      })],
      key: "colorScheme",

      value() {
        return TILE_COLOR_SCHEME.REGULAR;
      }

    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "expanded",

      value() {
        return false;
      }

    }, {
      kind: "method",
      key: "createRenderRoot",
      value:
      /**
       * The color scheme.
       */

      /**
       * `true` to expand this expandable tile.
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
          expanded,
          _belowTheContentHeight: belowTheContentHeight,
          _handleSlotChangeBelowTheFoldContent: handleSlotChangeBelowTheFoldContent
        } = this;
        return html(_t || (_t = _` <button class="${0}--tile__chevron" aria-labelledby="above-the-fold-content" aria-controls="below-the-fold-content" aria-expanded="${0}"> ${0} </button> <div id="content" class="${0}--tile-content"> <div><slot name="above-the-fold-content"></slot></div> <div class="${0}-ce--expandable-tile--below-the-fold-content" style="${0}"> <slot @slotchange="${0}"></slot> </div> </div> `), prefix, String(Boolean(expanded)), ChevronDown16({
          id: 'icon'
        }), prefix, prefix, ifDefined(!expanded ? undefined : `max-height: ${belowTheContentHeight}px`), handleSlotChangeBelowTheFoldContent);
      }
      /**
       * The name of the custom event fired before the expanded state is changed upon a user gesture.
       * Cancellation of this event stops changing the user-initiated change in expanded state.
       */

    }, {
      kind: "get",
      static: true,
      key: "eventBeforeToggle",
      value: function eventBeforeToggle() {
        return `${prefix}-expandable-tile-beingtoggled`;
      }
      /**
       * The name of the custom event fired after a the expanded state is changed upon a user gesture.
       */

    }, {
      kind: "get",
      static: true,
      key: "eventToggle",
      value: function eventToggle() {
        return `${prefix}-expandable-tile-toggled`;
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

export default BXExpandableTile;
//# sourceMappingURL=expandable-tile.js.map

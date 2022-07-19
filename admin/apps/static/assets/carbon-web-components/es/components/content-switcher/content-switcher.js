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
import settings from 'carbon-components/es/globals/js/settings';
import { forEach, indexOf } from '../../globals/internal/collection-helpers';
import { NAVIGATION_DIRECTION, CONTENT_SWITCHER_SIZE } from './defs';
import styles from "././content-switcher.css.js";
export { NAVIGATION_DIRECTION, CONTENT_SWITCHER_SIZE };
const {
  prefix
} = settings;
/**
 * @param index The index
 * @param length The length of the array.
 * @returns The new index, adjusting overflow/underflow.
 */

const capIndex = (index, length) => {
  if (index < 0) {
    return length - 1;
  }

  if (index >= length) {
    return 0;
  }

  return index;
};
/**
 * Content switcher.
 * @element bx-content-switcher
 * @fires bx-content-switcher-beingselected
 *   The custom event fired before a content switcher item is selected upon a user gesture.
 *   Cancellation of this event stops changing the user-initiated selection.
 * @fires bx-content-switcher-selected - The custom event fired after a a content switcher item is selected upon a user gesture.
 */


let BXContentSwitcher = _decorate([customElement(`${prefix}-content-switcher`)], function (_initialize, _LitElement) {
  class BXContentSwitcher extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXContentSwitcher,
    d: [{
      kind: "method",
      key: "_handleHover",
      value:
      /**
       * Handles `mouseover`/`mouseout` events on `<slot>`.
       * @param event The event.
       */
      function _handleHover({
        target,
        type
      }) {
        const {
          selectorItem
        } = this.constructor;
        const items = this.querySelectorAll(selectorItem);
        const index = type !== 'mouseover' ? -1 : indexOf(items, target.closest(selectorItem));
        const nextIndex = index < 0 ? index : index + 1;
        forEach(this.querySelectorAll(selectorItem), (elem, i) => {
          // Specifies child `<bx-content-switcher-item>` to hide its divider instead of using CSS,
          // until `:host-context()` gets supported in all major browsers
          elem.hideDivider = i === nextIndex;
        });
      }
      /**
       * @param currentItem The currently selected item.
       * @param direction The navigation direction.
       * @returns The item to be selected.
       */

    }, {
      kind: "method",
      key: "_getNextItem",
      value: function _getNextItem(currentItem, direction) {
        const items = this.querySelectorAll(this.constructor.selectorItemEnabled);
        const currentIndex = indexOf(items, currentItem);
        const nextIndex = capIndex(currentIndex + direction, items.length);
        return nextIndex === currentIndex ? null : items[nextIndex];
      }
      /**
       * Handles `click` event on the top-level element in the shadow DOM.
       * @param event The event.
       */

    }, {
      kind: "method",
      key: "_handleClick",
      value: function _handleClick({
        target
      }) {
        this._handleUserInitiatedSelectItem(target);
      }
      /**
       * Handles `keydown` event on the top-level element in the shadow DOM.
       * @param event The event.
       */

    }, {
      kind: "method",
      key: "_handleKeydown",
      value: function _handleKeydown({
        key
      }) {
        if (key in NAVIGATION_DIRECTION) {
          this._navigate(NAVIGATION_DIRECTION[key]);
        }
      }
      /**
       * Handles user-initiated selection of a content switcher item.
       * @param [item] The content switcher item user wants to select.
       */

    }, {
      kind: "method",
      key: "_handleUserInitiatedSelectItem",
      value: function _handleUserInitiatedSelectItem(item) {
        if (!item.disabled && item.value !== this.value) {
          const init = {
            bubbles: true,
            composed: true,
            detail: {
              item
            }
          };
          const constructor = this.constructor;
          const beforeSelectEvent = new CustomEvent(constructor.eventBeforeSelect, _objectSpread(_objectSpread({}, init), {}, {
            cancelable: true
          }));

          if (this.dispatchEvent(beforeSelectEvent)) {
            this._selectionDidChange(item);

            const afterSelectEvent = new CustomEvent(constructor.eventSelect, init);
            this.dispatchEvent(afterSelectEvent);
          }
        }
      }
      /**
       * Navigates through content switcher items.
       * @param direction `-1` to navigate backward, `1` to navigate forward.
       */

    }, {
      kind: "method",
      key: "_navigate",
      value: function _navigate(direction) {
        const {
          selectorItemSelected
        } = this.constructor;

        const nextItem = this._getNextItem(this.querySelector(selectorItemSelected), direction);

        if (nextItem) {
          this._handleUserInitiatedSelectItem(nextItem);

          this.requestUpdate();
        }
      }
      /**
       * A callback that runs after change in content switcher selection upon user interaction is confirmed.
       * @param itemToSelect A content switcher item.
       */

    }, {
      kind: "method",
      key: "_selectionDidChange",
      value: function _selectionDidChange(itemToSelect) {
        this.value = itemToSelect.value;
        forEach(this.querySelectorAll(this.constructor.selectorItemSelected), item => {
          item.selected = false;
        });
        itemToSelect.selected = true; // Waits for rendering with the new state that updates `tabindex`

        Promise.resolve().then(() => {
          itemToSelect.focus();
        });
      }
      /**
       * The value of the selected item.
       */

    }, {
      kind: "field",
      decorators: [property({
        reflect: true
      })],
      key: "value",

      value() {
        return '';
      }

    }, {
      kind: "field",
      decorators: [property({
        reflect: true
      })],
      key: "size",

      value() {
        return CONTENT_SWITCHER_SIZE.REGULAR;
      }

    }, {
      kind: "method",
      key: "shouldUpdate",
      value:
      /**
       * Content switcher size.
       */
      function shouldUpdate(changedProperties) {
        if (changedProperties.has('value')) {
          const {
            selectorItem
          } = this.constructor;
          forEach(this.querySelectorAll(selectorItem), elem => {
            elem.selected = elem.value === this.value;
          });
        }

        return true;
      }
      /**
       * A selector that will return content switcher items.
       */

    }, {
      kind: "get",
      static: true,
      key: "selectorItem",
      value: function selectorItem() {
        return `${prefix}-content-switcher-item`;
      }
      /**
       * A selector that will return enabled content switcher items.
       */

    }, {
      kind: "get",
      static: true,
      key: "selectorItemEnabled",
      value: function selectorItemEnabled() {
        return `${prefix}-content-switcher-item:not([disabled])`;
      }
      /**
       * A selector that will return selected items.
       */

    }, {
      kind: "get",
      static: true,
      key: "selectorItemSelected",
      value: function selectorItemSelected() {
        return `${prefix}-content-switcher-item[selected]`;
      }
      /**
       * The name of the custom event fired before a content switcher item is selected upon a user gesture.
       * Cancellation of this event stops changing the user-initiated selection.
       */

    }, {
      kind: "get",
      static: true,
      key: "eventBeforeSelect",
      value: function eventBeforeSelect() {
        return `${prefix}-content-switcher-beingselected`;
      }
      /**
       * The name of the custom event fired after a a content switcher item is selected upon a user gesture.
       */

    }, {
      kind: "get",
      static: true,
      key: "eventSelect",
      value: function eventSelect() {
        return `${prefix}-content-switcher-selected`;
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const {
          _handleHover: handleHover,
          _handleKeydown: handleKeydown
        } = this;
        return html(_t || (_t = _` <slot @click="${0}" @keydown="${0}" @mouseover="${0}" @mouseout="${0}"></slot> `), this._handleClick, handleKeydown, handleHover, handleHover);
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
}, LitElement);

export default BXContentSwitcher;
//# sourceMappingURL=content-switcher.js.map

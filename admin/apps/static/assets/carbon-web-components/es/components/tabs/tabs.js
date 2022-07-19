import _decorate from "@babel/runtime/helpers/esm/decorate";
import _get from "@babel/runtime/helpers/esm/get";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

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
import { classMap } from 'lit-html/directives/class-map';
import { html, property, query, customElement } from 'lit-element';
import ChevronDown16 from "../../icons/chevron--down/16";
import settings from 'carbon-components/es/globals/js/settings';
import HostListenerMixin from '../../globals/mixins/host-listener';
import HostListener from '../../globals/decorators/host-listener';
import { find, forEach } from '../../globals/internal/collection-helpers';
import BXContentSwitcher, { NAVIGATION_DIRECTION } from '../content-switcher/content-switcher';
import { NAVIGATION_DIRECTION_NARROW, TABS_COLOR_SCHEME, TABS_KEYBOARD_ACTION, TABS_TYPE } from './defs';
import styles from "././tabs.css.js";
const {
  prefix
} = settings;
export { NAVIGATION_DIRECTION, NAVIGATION_DIRECTION_NARROW, TABS_COLOR_SCHEME, TABS_KEYBOARD_ACTION, TABS_TYPE };
/**
 * Tabs.
 * @element bx-tabs
 * @fires bx-tabs-beingselected
 *   The custom event fired before a tab is selected upon a user gesture.
 *   Cancellation of this event stops changing the user-initiated selection.
 * @fires bx-tabs-selected - The custom event fired after a a tab is selected upon a user gesture.
 */

let BXTabs = _decorate([customElement(`${prefix}-tabs`)], function (_initialize, _HostListenerMixin) {
  class BXTabs extends _HostListenerMixin {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXTabs,
    d: [{
      kind: "field",
      key: "_open",

      value() {
        return false;
      }

    }, {
      kind: "field",
      key: "_selectedItemContent",

      value() {
        return null;
      }

    }, {
      kind: "field",
      decorators: [query('#trigger')],
      key: "_triggerNode",
      value: void 0
    }, {
      kind: "method",
      decorators: [HostListener('focusin')],
      key: "_handleFocusIn",
      value:
      /**
       * The latest status of this dropdown, for screen reader to accounce.
       */

      /**
       * `true` if the narrow mode dropdown should be open.
       */

      /**
       * The content of the selected item, used in the narrow mode.
       */

      /**
       * The DOM element for the trigger button in narrow mode.
       */

      /**
       * Handles `focus` event handler on this element.
       */
      function _handleFocusIn() {
        const {
          selectorItem
        } = this.constructor;
        forEach(this.querySelectorAll(selectorItem), item => {
          item.inFocus = true;
        });
      }
      /**
       * Handles `blur` event handler on this element.
       * @param event The event.
       */

    }, {
      kind: "method",
      decorators: [HostListener('focusout')],
      key: "_handleFocusOut",
      value: function _handleFocusOut({
        relatedTarget
      }) {
        if (!this.contains(relatedTarget)) {
          const {
            selectorItem
          } = this.constructor;
          forEach(this.querySelectorAll(selectorItem), item => {
            item.inFocus = false;
          });

          this._handleUserInitiatedToggle(false);
        }
      }
      /**
       * Handles user-initiated toggling the open state.
       * @param [force] If specified, forces the open state to the given one.
       */

    }, {
      kind: "method",
      key: "_handleUserInitiatedToggle",
      value: function _handleUserInitiatedToggle(force = !this._open) {
        this._open = force;

        if (this._open) {
          this._assistiveStatusText = this.selectingItemsAssistiveText;
        } else {
          const {
            selectedItemAssistiveText,
            triggerContent,
            _assistiveStatusText: assistiveStatusText,
            _selectedItemContent: selectedItemContent
          } = this;
          const selectedItemText = selectedItemContent && selectedItemContent.textContent || triggerContent;

          if (selectedItemText && assistiveStatusText !== selectedItemAssistiveText) {
            this._assistiveStatusText = selectedItemText;
          }
        }

        this.requestUpdate();
      }
      /**
       * Clears the selection of tabs.
       */

    }, {
      kind: "method",
      key: "_clearHighlight",
      value: function _clearHighlight() {
        forEach(this.querySelectorAll(this.constructor.selectorItem), item => {
          item.highlighted = false;
        });
      }
      /**
       * Navigates through tabs.
       * @param direction `-1` to navigate backward, `1` to navigate forward.
       * @param [options] The options.
       * @param [options.immediate]
       *   `true` to make it "immediate selection change" mode, which does:
       *
       *   * Starts with the selected item
       *   * Going prev/next item immediately changes the selection
       */

    }, {
      kind: "method",
      key: "_navigate",
      value: function _navigate(direction, {
        immediate
      } = {}) {
        const {
          selectorItem,
          selectorItemHighlighted,
          selectorItemSelected
        } = this.constructor;

        const nextItem = this._getNextItem(this.querySelector(immediate ? selectorItemSelected : selectorItemHighlighted), direction);

        if (!nextItem) {
          return;
        }

        if (immediate) {
          this._handleUserInitiatedSelectItem(nextItem);
        } else {
          forEach(this.querySelectorAll(selectorItem), item => {
            item[immediate ? 'selected' : 'highlighted'] = nextItem === item;
          });
        } // Using `{ block: 'nearest' }` to prevent scrolling unless scrolling is absolutely necessary.
        // `scrollIntoViewOptions` seems to work in latest Safari despite of MDN/caniuse table.
        // IE falls back to the old behavior.


        nextItem.scrollIntoView({
          block: 'nearest'
        });
        const nextItemText = nextItem.textContent;

        if (nextItemText) {
          this._assistiveStatusText = nextItemText;
        }

        this.requestUpdate();
      }
    }, {
      kind: "method",
      decorators: [HostListener('click')],
      key: "_handleClick",
      value: function _handleClick(event) {
        const {
          target
        } = event;

        if (this === target) {
          this._handleUserInitiatedToggle();
        } else if (target.value === this.value) {
          // Clicking on selected item, simply closes the narrow mode dropdown
          this._handleUserInitiatedToggle(false);
        } else {
          // Trying to select the item
          // If the custom event of the selection is canceled, we don't close the narrow mode dropdown
          _get(_getPrototypeOf(BXTabs.prototype), "_handleClick", this).call(this, event);
        }
      }
    }, {
      kind: "method",
      decorators: [HostListener('keydown')],
      key: "_handleKeydown",
      value: function _handleKeydown({
        key
      }) {
        const {
          _open: open,
          _triggerNode: triggerNode
        } = this;
        const narrowMode = Boolean(triggerNode.offsetParent);
        const action = this.constructor.getAction(key, {
          narrowMode
        });

        if (!open && narrowMode) {
          // Menu closed in narrow mode
          switch (action) {
            case TABS_KEYBOARD_ACTION.NAVIGATING:
              this._handleUserInitiatedToggle(true); // If this menu gets open with an arrow key, resets the highlight


              this._clearHighlight();

              break;

            case TABS_KEYBOARD_ACTION.TRIGGERING:
              this._handleUserInitiatedToggle(true);

              break;

            default:
              break;
          }
        } else {
          switch (action) {
            case TABS_KEYBOARD_ACTION.CLOSING:
              this._handleUserInitiatedToggle(false);

              break;

            case TABS_KEYBOARD_ACTION.NAVIGATING:
              {
                const direction = narrowMode ? NAVIGATION_DIRECTION_NARROW[key] : NAVIGATION_DIRECTION[key];

                if (direction) {
                  this._navigate(direction, {
                    immediate: !narrowMode
                  });
                }
              }
              break;

            case TABS_KEYBOARD_ACTION.TRIGGERING:
              {
                const {
                  selectorItemHighlighted
                } = this.constructor;
                const highlightedItem = this.querySelector(selectorItemHighlighted);

                if (highlightedItem) {
                  if (highlightedItem.value === this.value) {
                    // Selecting an already-selected item, simply closes the narrow mode dropdown
                    this._handleUserInitiatedToggle(false);
                  } else {
                    // Trying to select the item
                    // If the custom event of the selection is canceled, we don't close the narrow mode dropdown
                    this._handleUserInitiatedSelectItem(highlightedItem);
                  }
                } else {
                  this._handleUserInitiatedToggle();
                }
              }
              break;

            default:
              break;
          }
        }
      }
    }, {
      kind: "method",
      key: "_selectionDidChange",
      value: function _selectionDidChange(itemToSelect) {
        _get(_getPrototypeOf(BXTabs.prototype), "_selectionDidChange", this).call(this, itemToSelect);

        this._assistiveStatusText = this.selectedItemAssistiveText;

        this._handleUserInitiatedToggle(false);
      }
      /**
       * The color scheme.
       */

    }, {
      kind: "field",
      decorators: [property({
        attribute: 'color-scheme',
        reflect: true
      })],
      key: "colorScheme",

      value() {
        return TABS_COLOR_SCHEME.REGULAR;
      }

    }, {
      kind: "field",
      decorators: [property({
        attribute: 'selecting-items-assistive-text'
      })],
      key: "selectingItemsAssistiveText",

      value() {
        return 'Selecting items. Use up and down arrow keys to navigate.';
      }

    }, {
      kind: "field",
      decorators: [property({
        attribute: 'selected-item-assistive-text'
      })],
      key: "selectedItemAssistiveText",

      value() {
        return 'Selected an item.';
      }

    }, {
      kind: "field",
      decorators: [property({
        attribute: 'trigger-content'
      })],
      key: "triggerContent",

      value() {
        return '';
      }

    }, {
      kind: "field",
      decorators: [property({
        reflect: true
      })],
      key: "type",

      value() {
        return TABS_TYPE.REGULAR;
      }

    }, {
      kind: "method",
      key: "shouldUpdate",
      value:
      /**
       * An assistive text for screen reader to announce, telling the open state.
       */

      /**
       * An assistive text for screen reader to announce, telling that an item is selected.
       */

      /**
       * The content of the trigger button for narrow mode.
       */

      /**
       * Tabs type.
       */
      function shouldUpdate(changedProperties) {
        _get(_getPrototypeOf(BXTabs.prototype), "shouldUpdate", this).call(this, changedProperties);

        const {
          selectorItem
        } = this.constructor;

        if (changedProperties.has('type')) {
          forEach(this.querySelectorAll(selectorItem), elem => {
            elem.type = this.type;
          });
        }

        if (changedProperties.has('value')) {
          const item = find(this.querySelectorAll(selectorItem), elem => elem.value === this.value);

          if (item) {
            const range = this.ownerDocument.createRange();
            range.selectNodeContents(item);
            this._selectedItemContent = range.cloneContents();
          } else {
            this._selectedItemContent = null;
          }
        }

        return true;
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const {
          triggerContent,
          _assistiveStatusText: assistiveStatusText,
          _open: open,
          _selectedItemContent: selectedItemContent
        } = this;
        const triggerClasses = classMap({
          [`${prefix}--tabs-trigger`]: true,
          [`${prefix}--tabs-trigger--open`]: open
        });
        const listClasses = classMap({
          [`${prefix}--tabs__nav`]: true,
          [`${prefix}--tabs__nav--hidden`]: !open
        });
        return html(_t || (_t = _` <div id="trigger" role="button" class="${0}" aria-labelledby="trigger-label" aria-expanded="${0}" aria-haspopup="listbox" aria-owns="tablist" aria-controls="tablist"> <span id="trigger-label" class="${0}--tabs-trigger-text"> ${0} </span> ${0} </div> <ul id="tablist" role="tablist" class="${0}"> <slot></slot> </ul> <div class="${0}--assistive-text" role="status" aria-live="assertive" aria-relevant="additions text"> ${0} </div> `), triggerClasses, String(open), prefix, selectedItemContent || triggerContent, ChevronDown16({
          'aria-hidden': 'true'
        }), listClasses, prefix, assistiveStatusText);
      }
      /**
       * Symbols of keys that triggers opening/closing menu and selecting/deselecting menu item.
       */

    }, {
      kind: "field",
      static: true,
      key: "TRIGGER_KEYS",

      value() {
        return new Set([' ', 'Enter']);
      }

    }, {
      kind: "get",
      static: true,
      key: "selectorItem",
      value:
      /**
       * A selector that will return tabs.
       */
      function selectorItem() {
        return `${prefix}-tab`;
      }
      /**
       * A selector that will return enabled tabs.
       */

    }, {
      kind: "get",
      static: true,
      key: "selectorItemEnabled",
      value: function selectorItemEnabled() {
        return `${prefix}-tab:not([disabled])`;
      }
      /**
       * A selector that will return highlighted tabs.
       */

    }, {
      kind: "get",
      static: true,
      key: "selectorItemHighlighted",
      value: function selectorItemHighlighted() {
        return `${prefix}-tab[highlighted]`;
      }
      /**
       * A selector that will return selected tabs.
       */

    }, {
      kind: "get",
      static: true,
      key: "selectorItemSelected",
      value: function selectorItemSelected() {
        return `${prefix}-tab[selected]`;
      }
      /**
       * The name of the custom event fired before a tab is selected upon a user gesture.
       * Cancellation of this event stops changing the user-initiated selection.
       */

    }, {
      kind: "get",
      static: true,
      key: "eventBeforeSelect",
      value: function eventBeforeSelect() {
        return `${prefix}-tabs-beingselected`;
      }
      /**
       * The name of the custom event fired after a a tab is selected upon a user gesture.
       */

    }, {
      kind: "get",
      static: true,
      key: "eventSelect",
      value: function eventSelect() {
        return `${prefix}-tabs-selected`;
      }
    }, {
      kind: "field",
      static: true,
      key: "styles",

      value() {
        return styles;
      }

    }, {
      kind: "method",
      static: true,
      key: "getAction",
      value:
      /**
       * @param key The key symbol.
       * @param [options] The options.
       * @param [options.narrowMode] `true` to get the action for narrow mode.
       * @returns A action for dropdown for the given key symbol.
       */
      function getAction(key, {
        narrowMode
      }) {
        if (key === 'Escape') {
          return TABS_KEYBOARD_ACTION.CLOSING;
        }

        if (key in (narrowMode ? NAVIGATION_DIRECTION_NARROW : NAVIGATION_DIRECTION)) {
          return TABS_KEYBOARD_ACTION.NAVIGATING;
        }

        if (narrowMode && this.TRIGGER_KEYS.has(key)) {
          return TABS_KEYBOARD_ACTION.TRIGGERING;
        }

        return TABS_KEYBOARD_ACTION.NONE;
      }
    }]
  };
}, HostListenerMixin(BXContentSwitcher));

export default BXTabs;
//# sourceMappingURL=tabs.js.map

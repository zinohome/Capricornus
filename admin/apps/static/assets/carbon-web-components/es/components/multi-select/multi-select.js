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
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import settings from 'carbon-components/es/globals/js/settings';
import { html, property, query, customElement } from 'lit-element';
import Close16 from "../../icons/close/16";
import { filter, forEach, indexOf } from '../../globals/internal/collection-helpers';
import BXDropdown, { DROPDOWN_KEYBOARD_ACTION } from '../dropdown/dropdown';
import styles from "././multi-select.css.js";
export { DROPDOWN_COLOR_SCHEME, DROPDOWN_SIZE, DROPDOWN_TYPE } from '../dropdown/dropdown';
const {
  prefix
} = settings;
/**
 * Multi select.
 * @element bx-multi-select
 * @fires bx-multi-select-beingselected
 *   The custom event fired before a multi select item is selected upon a user gesture.
 *   Cancellation of this event stops changing the user-initiated selection.
 * @fires bx-multi-select-selected - The custom event fired after a multi select item is selected upon a user gesture.
 * @fires bx-multi-select-beingtoggled
 *   The custom event fired before the open state of this multi select is toggled upon a user gesture.
 *   Cancellation of this event stops the user-initiated toggling.
 * @fires bx-multi-select-toggled
 *   The custom event fired after the open state of this multi select is toggled upon a user gesture.
 */

let BXMultiSelect = _decorate([customElement(`${prefix}-multi-select`)], function (_initialize, _BXDropdown) {
  class BXMultiSelect extends _BXDropdown {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXMultiSelect,
    d: [{
      kind: "field",
      decorators: [property({
        type: Boolean
      })],
      key: "filterable",
      value: void 0
    }, {
      kind: "field",
      key: "_selectedItemsCount",

      value() {
        return 0;
      }

    }, {
      kind: "field",
      decorators: [query('#clear-button')],
      key: "_clearButtonNode",
      value: void 0
    }, {
      kind: "field",
      decorators: [query('#selection-button')],
      key: "_selectionButtonNode",
      value: void 0
    }, {
      kind: "field",
      decorators: [query('input')],
      key: "_filterInputNode",
      value: void 0
    }, {
      kind: "field",
      decorators: [query(`.${prefix}--list-box__field`)],
      key: "_triggerNode",
      value: void 0
    }, {
      kind: "method",
      key: "_selectionShouldChange",
      value:
      /**
       * The count of selected items.
       */

      /**
       * The clear button.
       */

      /**
       * The selection button.
       */

      /**
       * The `<input>` for filtering.
       */

      /**
       * The trigger button.
       */
      function _selectionShouldChange(itemToSelect) {
        // If we are selecting an item, assumes we always toggle
        return Boolean(this.value || itemToSelect);
      }
    }, {
      kind: "method",
      key: "_selectionDidChange",
      value: function _selectionDidChange(itemToSelect) {
        if (itemToSelect) {
          itemToSelect.selected = !itemToSelect.selected;
          this._assistiveStatusText = itemToSelect.selected ? this.selectedItemAssistiveText : this.unselectedItemAssistiveText;
        } else {
          forEach(this.querySelectorAll(this.constructor.selectorItemSelected), item => {
            item.selected = false;
          });

          this._handleUserInitiatedToggle(false);

          this._assistiveStatusText = this.unselectedAllAssistiveText;
        } // Change in `.selected` hasn't been reflected to the corresponding attribute yet


        this.value = filter(this.querySelectorAll(this.constructor.selectorItem), item => item.selected).map(item => item.value).join(',');
      }
    }, {
      kind: "method",
      key: "_handleClickInner",
      value: function _handleClickInner(event) {
        var _this$_selectionButto, _this$_clearButtonNod;

        if ((_this$_selectionButto = this._selectionButtonNode) !== null && _this$_selectionButto !== void 0 && _this$_selectionButto.contains(event.target)) {
          this._handleUserInitiatedSelectItem();

          if (this.filterable) {
            this._filterInputNode.focus();
          } else {
            this._triggerNode.focus();
          }
        } else if ((_this$_clearButtonNod = this._clearButtonNode) !== null && _this$_clearButtonNod !== void 0 && _this$_clearButtonNod.contains(event.target)) {
          this._handleUserInitiatedClearInput();
        } else {
          const shouldIgnoreClickInner = elem => elem.closest && elem.closest(this.constructor.selectorIgnoreClickInner);

          if (!event.composedPath().some(shouldIgnoreClickInner)) {
            _get(_getPrototypeOf(BXMultiSelect.prototype), "_handleClickInner", this).call(this, event);
          }

          if (this.filterable) this._filterInputNode.focus();
        }
      }
      /**
       * Handler for the `keypress` event, ensures filter still works upon entering space
       */

    }, {
      kind: "method",
      key: "_handleKeypressInner",
      value: function _handleKeypressInner(event) {
        var _this$_clearButtonNod2, _this$_selectionButto2;

        const {
          key
        } = event;
        const action = this.constructor.getAction(key);
        const {
          TRIGGERING
        } = DROPDOWN_KEYBOARD_ACTION;

        if ((_this$_clearButtonNod2 = this._clearButtonNode) !== null && _this$_clearButtonNod2 !== void 0 && _this$_clearButtonNod2.contains(event.target) && ( // Space key should be handled by `<input>` unless "clear selection" button has focus
        action === TRIGGERING || key === ' ')) {
          this._handleUserInitiatedClearInput();
        } else if ((_this$_selectionButto2 = this._selectionButtonNode) !== null && _this$_selectionButto2 !== void 0 && _this$_selectionButto2.contains(event.target)) {
          this._handleUserInitiatedSelectItem();

          this.open = true;

          if (this.filterable) {
            this._filterInputNode.focus();
          } else {
            this._triggerNode.focus();
          }
        } else if (this.filterable) {
          this._handleKeypressInnerFlterable(event);
        } else {
          _get(_getPrototypeOf(BXMultiSelect.prototype), "_handleKeypressInner", this).call(this, event);
        }
      }
      /**
       * Special andler for the `keypress` event, ensures space selection for filterable
       * variation is disabled
       */

    }, {
      kind: "method",
      key: "_handleKeypressInnerFlterable",
      value: function _handleKeypressInnerFlterable(event) {
        const {
          key
        } = event;
        const action = this.constructor.getAction(key);

        if (!this.open) {
          switch (action) {
            case DROPDOWN_KEYBOARD_ACTION.TRIGGERING:
              this._handleUserInitiatedToggle(true);

              break;

            default:
              break;
          }
        } else {
          switch (key) {
            case 'Enter':
              {
                const constructor = this.constructor;
                const highlightedItem = this.querySelector(constructor.selectorItemHighlighted);

                if (highlightedItem) {
                  this._handleUserInitiatedSelectItem(highlightedItem);
                } else {
                  this._handleUserInitiatedToggle(false);
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
      key: "_renderPrecedingTriggerContent",
      value: function _renderPrecedingTriggerContent() {
        const {
          clearSelectionLabel,
          _selectedItemsCount: selectedItemsCount
        } = this;
        return selectedItemsCount === 0 ? undefined : html(_t || (_t = _` <div id="selection-button" role="button" class="${0}--list-box__selection ${0}--list-box__selection--multi ${0}--tag--filter" tabindex="0" title="${0}"> ${0} ${0} </div> `), prefix, prefix, prefix, clearSelectionLabel, selectedItemsCount, Close16({
          'aria-label': clearSelectionLabel
        }));
      }
      /**
        @returns The main content of the trigger button.
       */

    }, {
      kind: "method",
      key: "_renderTriggerContent",
      value: function _renderTriggerContent() {
        const {
          triggerContent,
          _selectedItemContent: selectedItemContent
        } = this;
        return !this.filterable ? html(_t2 || (_t2 = _` <span id="trigger-label" class="${0}--list-box__label">${0}</span> `), prefix, selectedItemContent || triggerContent) : html(_t3 || (_t3 = _` <input id="trigger-label" class="${0}--text-input" placeholder="${0}" role="combobox" aria-controls="menu-body" aria-autocomplete="list" @input="${0}"> `), prefix, triggerContent, this._handleInput);
      }
    }, {
      kind: "method",
      key: "_renderFollowingTriggerContent",
      value: function _renderFollowingTriggerContent() {
        const {
          clearSelectionLabel,
          _filterInputNode: filterInputNode
        } = this;
        return filterInputNode && filterInputNode.value.length > 0 && this.filterable ? html(_t4 || (_t4 = _` <div id="clear-button" role="button" class="${0}--list-box__selection" tabindex="0" title="${0}"> ${0} </div> `), prefix, clearSelectionLabel, Close16({
          'aria-label': clearSelectionLabel
        })) : undefined;
      }
      /**
       * Handles `input` event on the `<input>` for filtering.
       */

    }, {
      kind: "method",
      key: "_handleInput",
      value: function _handleInput() {
        const items = this.querySelectorAll(this.constructor.selectorItem);

        const inputValue = this._filterInputNode.value.toLocaleLowerCase();

        if (!this.open) this.open = true;
        forEach(items, item => {
          const itemValue = item.innerText.toLocaleLowerCase();

          if (!itemValue.includes(inputValue)) {
            item.setAttribute('filtered', '');
            item.removeAttribute('highlighted');
          } else {
            item.removeAttribute('filtered');
          }
        });
        this.requestUpdate();
      }
      /**
       * Navigate through dropdown items.
       * @param direction `-1` to navigate backward, `1` to navigate forward.
       */

    }, {
      kind: "method",
      key: "_navigate",
      value: function _navigate(direction) {
        if (!this.filterable) {
          this._triggerNode.focus();

          _get(_getPrototypeOf(BXMultiSelect.prototype), "_navigate", this).call(this, direction);
        } else {
          // only navigate through remaining item
          const constructor = this.constructor;
          const items = this.querySelectorAll(constructor.selectorItemResults);
          const highlightedItem = this.querySelector(constructor.selectorItemHighlighted);
          const highlightedIndex = indexOf(items, highlightedItem);
          let nextIndex = highlightedIndex + direction;

          if (nextIndex < 0) {
            nextIndex = items.length - 1;
          }

          if (nextIndex >= items.length) {
            nextIndex = 0;
          }

          forEach(items, (item, i) => {
            item.highlighted = i === nextIndex;
          });
        }
      }
      /**
       * Handles user-initiated clearing the `<input>` for filtering.
       */

    }, {
      kind: "method",
      key: "_handleUserInitiatedClearInput",
      value: function _handleUserInitiatedClearInput() {
        const constructor = this.constructor;
        const items = this.querySelectorAll(constructor.selectorItemFiltered);
        this._filterInputNode.value = '';
        this.open = true;

        this._filterInputNode.focus();

        forEach(items, item => {
          item.removeAttribute('filtered');
        });
      }
      /**
       * The `aria-label` attribute for the icon to clear selection.
       */

    }, {
      kind: "field",
      decorators: [property({
        attribute: 'clear-selection-label'
      })],
      key: "clearSelectionLabel",

      value() {
        return '';
      }

    }, {
      kind: "field",
      decorators: [property({
        attribute: 'unselected-item-assistive-text'
      })],
      key: "unselectedItemAssistiveText",

      value() {
        return 'Unselected an item.';
      }

    }, {
      kind: "field",
      decorators: [property({
        attribute: 'unselected-all-assistive-text'
      })],
      key: "unselectedAllAssistiveText",

      value() {
        return 'Unselected all items.';
      }

    }, {
      kind: "method",
      key: "shouldUpdate",
      value:
      /**
       * An assistive text for screen reader to announce, telling that an item is unselected.
       */

      /**
       * An assistive text for screen reader to announce, telling that all items are unselected.
       */
      function shouldUpdate(changedProperties) {
        const {
          selectorItem
        } = this.constructor;

        if (changedProperties.has('size')) {
          forEach(this.querySelectorAll(selectorItem), elem => {
            elem.size = this.size;
          });
        }

        if (changedProperties.has('value')) {
          const {
            value
          } = this;
          const values = !value ? [] : value.split(','); // Updates selection beforehand because our rendering logic for `<bx-multi-select>` looks for selected items via `qSA()`

          const items = this.querySelectorAll(selectorItem);
          forEach(items, elem => {
            elem.selected = values.indexOf(elem.value) >= 0;
          });
          this._selectedItemsCount = filter(items, elem => values.indexOf(elem.value) >= 0).length;
        }

        return true;
      }
      /**
       * A selector to ignore the `click` events from.
       * Primary for the checkbox label where the `click` event will happen from the associated check box.
       */

    }, {
      kind: "get",
      static: true,
      key: "selectorIgnoreClickInner",
      value: function selectorIgnoreClickInner() {
        return `.${prefix}--checkbox-label`;
      }
      /**
       * A selector that will return highlighted items.
       */

    }, {
      kind: "get",
      static: true,
      key: "selectorItemHighlighted",
      value: function selectorItemHighlighted() {
        return `${prefix}-multi-select-item[highlighted]`;
      }
      /**
       * A selector that will return multi select items.
       * We use a separate property from `.itemTagName` due to the nature in difference of tag name vs. selector.
       */

    }, {
      kind: "get",
      static: true,
      key: "selectorItem",
      value: function selectorItem() {
        return `${prefix}-multi-select-item`;
      }
      /**
       * A selector that will return remaining items after a filter.
       */

    }, {
      kind: "get",
      static: true,
      key: "selectorItemFiltered",
      value: function selectorItemFiltered() {
        return `${prefix}-multi-select-item[filtered]`;
      }
      /**
       * A selector that will return remaining items after a filter.
       */

    }, {
      kind: "get",
      static: true,
      key: "selectorItemResults",
      value: function selectorItemResults() {
        return `${prefix}-multi-select-item:not([filtered])`;
      }
      /**
       * A selector that will return selected items.
       */

    }, {
      kind: "get",
      static: true,
      key: "selectorItemSelected",
      value: function selectorItemSelected() {
        return `${prefix}-multi-select-item[selected]`;
      }
      /**
       * The name of the custom event fired before this multi select item is being toggled upon a user gesture.
       * Cancellation of this event stops the user-initiated action of toggling this multi select item.
       */

    }, {
      kind: "get",
      static: true,
      key: "eventBeforeToggle",
      value: function eventBeforeToggle() {
        return `${prefix}-multi-select-beingtoggled`;
      }
      /**
       * The name of the custom event fired after this multi select item is toggled upon a user gesture.
       */

    }, {
      kind: "get",
      static: true,
      key: "eventToggle",
      value: function eventToggle() {
        return `${prefix}-multi-select-toggled`;
      }
      /**
       * The name of the custom event fired before a multi select item is selected upon a user gesture.
       * Cancellation of this event stops changing the user-initiated selection.
       */

    }, {
      kind: "get",
      static: true,
      key: "eventBeforeSelect",
      value: function eventBeforeSelect() {
        return `${prefix}-multi-select-beingselected`;
      }
      /**
       * The name of the custom event fired after a a multi select item is selected upon a user gesture.
       */

    }, {
      kind: "get",
      static: true,
      key: "eventSelect",
      value: function eventSelect() {
        return `${prefix}-multi-select-selected`;
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
}, BXDropdown);

export default BXMultiSelect;
//# sourceMappingURL=multi-select.js.map

import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _decorate from "@babel/runtime/helpers/esm/decorate";

let _ = t => t,
    _t,
    _t2,
    _t3,
    _t4,
    _t5;

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
import { ifDefined } from 'lit-html/directives/if-defined';
import { html, property, query, customElement, LitElement } from 'lit-element';
import ChevronDown16 from "../../icons/chevron--down/16";
import WarningFilled16 from "../../icons/warning--filled/16";
import FocusMixin from '../../globals/mixins/focus';
import FormMixin from '../../globals/mixins/form';
import HostListenerMixin from '../../globals/mixins/host-listener';
import ValidityMixin from '../../globals/mixins/validity';
import HostListener from '../../globals/decorators/host-listener';
import { find, forEach, indexOf } from '../../globals/internal/collection-helpers';
import { DROPDOWN_COLOR_SCHEME, DROPDOWN_KEYBOARD_ACTION, DROPDOWN_SIZE, DROPDOWN_TYPE, NAVIGATION_DIRECTION } from './defs';
import styles from "././dropdown.css.js";
export { DROPDOWN_COLOR_SCHEME, DROPDOWN_KEYBOARD_ACTION, DROPDOWN_SIZE, DROPDOWN_TYPE, NAVIGATION_DIRECTION };
const {
  prefix
} = settings;
/**
 * Dropdown.
 * @element bx-dropdown
 * @csspart label-text The label text.
 * @csspart helper-text The helper text.
 * @csspart trigger-button The trigger button.
 * @csspart menu-body The menu body.
 * @csspart validity-message The validity message.
 * @fires bx-dropdown-beingselected
 *   The custom event fired before a dropdown item is selected upon a user gesture.
 *   Cancellation of this event stops changing the user-initiated selection.
 * @fires bx-dropdown-beingtoggled
 *   The custom event fired before the open state of this dropdown is toggled upon a user gesture.
 *   Cancellation of this event stops the user-initiated toggling.
 * @fires bx-dropdown-selected - The custom event fired after a dropdown item is selected upon a user gesture.
 * @fires bx-dropdown-toggled - The custom event fired after the open state of this dropdown is toggled upon a user gesture.
 */

let BXDropdown = _decorate([customElement(`${prefix}-dropdown`)], function (_initialize, _ValidityMixin) {
  class BXDropdown extends _ValidityMixin {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXDropdown,
    d: [{
      kind: "field",
      key: "_selectedItemContent",

      value() {
        return null;
      }

    }, {
      kind: "field",
      key: "_shouldTriggerBeFocusable",

      value() {
        return true;
      }

    }, {
      kind: "field",
      decorators: [query(`.${prefix}--list-box`)],
      key: "_listBoxNode",
      value: void 0
    }, {
      kind: "field",
      decorators: [query('slot[name="helper-text"]')],
      key: "_slotHelperTextNode",
      value: void 0
    }, {
      kind: "field",
      decorators: [query('slot[name="label-text"]')],
      key: "_slotLabelTextNode",
      value: void 0
    }, {
      kind: "method",
      key: "_selectionShouldChange",
      value:
      /**
       * The latest status of this dropdown, for screen reader to accounce.
       */

      /**
       * The content of the selected item.
       */

      /**
       * `true` if the trigger button should be focusable.
       * Derived class can set `false` to this if the trigger button contains another primary focusable element (e.g. `<input>`).
       */

      /**
       * The list box `<div>` node.
       */

      /**
       * The `<slot>` element for the helper text in the shadow DOM.
       */

      /**
       * The `<slot>` element for the label text in the shadow DOM.
       */

      /**
       * @param itemToSelect A dropdown item. Absense of this argument means clearing selection.
       * @returns `true` if the selection of this dropdown should change if the given item is selected upon user interaction.
       */
      function _selectionShouldChange(itemToSelect) {
        return !itemToSelect || itemToSelect.value !== this.value;
      }
      /**
       * A callback that runs after change in dropdown selection upon user interaction is confirmed.
       * @param itemToSelect
       *   A dropdown item.
       *   Absense of this argument means clearing selection, which may be handled by a derived class.
       */

    }, {
      kind: "method",
      key: "_selectionDidChange",
      value: function _selectionDidChange(itemToSelect) {
        if (itemToSelect) {
          this.value = itemToSelect.value;
          forEach(this.querySelectorAll(this.constructor.selectorItemSelected), item => {
            item.selected = false;
          });
          itemToSelect.selected = true;
          this._assistiveStatusText = this.selectedItemAssistiveText;

          this._handleUserInitiatedToggle(false);
        }
      }
      /**
       * Handles `click` event on the top-level element in the shadow DOM.
       * @param event The event.
       */

    }, {
      kind: "method",
      key: "_handleClickInner",
      value: function _handleClickInner(event) {
        if (this.shadowRoot.contains(event.target)) {
          this._handleUserInitiatedToggle();
        } else {
          const item = event.target.closest(this.constructor.selectorItem);

          if (this.contains(item)) {
            this._handleUserInitiatedSelectItem(item);
          }
        }
      }
      /**
       * Handler for the `keydown` event on the top-level element in the shadow DOM.
       */

    }, {
      kind: "method",
      key: "_handleKeydownInner",
      value: function _handleKeydownInner(event) {
        const {
          key
        } = event;
        const action = this.constructor.getAction(key);

        if (!this.open) {
          switch (action) {
            case DROPDOWN_KEYBOARD_ACTION.NAVIGATING:
              this._handleUserInitiatedToggle(true); // If this menu gets open with an arrow key, reset the highlight


              this._clearHighlight();

              break;

            default:
              break;
          }
        } else {
          switch (action) {
            case DROPDOWN_KEYBOARD_ACTION.CLOSING:
              this._handleUserInitiatedToggle(false);

              break;

            case DROPDOWN_KEYBOARD_ACTION.NAVIGATING:
              this._navigate(NAVIGATION_DIRECTION[key]);

              break;

            default:
              break;
          }
        }
      }
      /**
       * Handler for the `keypress` event on the top-level element in the shadow DOM.
       */

    }, {
      kind: "method",
      key: "_handleKeypressInner",
      value: function _handleKeypressInner(event) {
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
          switch (action) {
            case DROPDOWN_KEYBOARD_ACTION.TRIGGERING:
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
      /**
       * Handles `blur` event handler on the document this element is in.
       * @param event The event.
       */

    }, {
      kind: "method",
      decorators: [HostListener('focusout')],
      key: "_handleFocusOut",
      value: function _handleFocusOut(event) {
        if (!this.contains(event.relatedTarget)) {
          this._handleUserInitiatedToggle(false);
        }
      }
      /**
       * Handles `slotchange` event for the `<slot>` for helper text.
       */

    }, {
      kind: "method",
      key: "_handleSlotchangeHelperText",
      value: function _handleSlotchangeHelperText() {
        this.requestUpdate();
      }
      /**
       * Handles `slotchange` event for the `<slot>` for label text.
       */

    }, {
      kind: "method",
      key: "_handleSlotchangeLabelText",
      value: function _handleSlotchangeLabelText() {
        this.requestUpdate();
      }
      /**
       * Handles user-initiated selection of a dropdown item.
       * @param [item] The dropdown item user wants to select. Absense of this argument means clearing selection.
       */

    }, {
      kind: "method",
      key: "_handleUserInitiatedSelectItem",
      value: function _handleUserInitiatedSelectItem(item) {
        if (this._selectionShouldChange(item)) {
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
       * Handles user-initiated toggling the open state.
       * @param [force] If specified, forces the open state to the given one.
       */

    }, {
      kind: "method",
      key: "_handleUserInitiatedToggle",
      value: function _handleUserInitiatedToggle(force = !this.open) {
        const {
          eventBeforeToggle,
          eventToggle
        } = this.constructor;
        const init = {
          bubbles: true,
          cancelable: true,
          composed: true,
          detail: {
            open: force
          }
        };

        if (this.dispatchEvent(new CustomEvent(eventBeforeToggle, init))) {
          this.open = force;

          if (this.open) {
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

            forEach(this.querySelectorAll(this.constructor.selectorItemHighlighted), item => {
              item.highlighted = false;
            });
          }

          this.requestUpdate();
          this.dispatchEvent(new CustomEvent(eventToggle, init));
        }
      }
      /**
       * Clears the selection of dropdown items.
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
       * Navigate through dropdown items.
       * @param direction `-1` to navigate backward, `1` to navigate forward.
       */

    }, {
      kind: "method",
      key: "_navigate",
      value: function _navigate(direction) {
        const constructor = this.constructor;
        const items = this.querySelectorAll(constructor.selectorItem);
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
        const nextItem = items[nextIndex]; // Using `{ block: 'nearest' }` to prevent scrolling unless scrolling is absolutely necessary.
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
      /* eslint-disable class-methods-use-this */

      /**
       * @returns The content preceding the trigger button.
       */

    }, {
      kind: "method",
      key: "_renderPrecedingTriggerContent",
      value: function _renderPrecedingTriggerContent() {
        return undefined;
      }
      /* eslint-enable class-methods-use-this */

      /**
       * @returns The main content of the trigger button.
       */

    }, {
      kind: "method",
      key: "_renderTriggerContent",
      value: function _renderTriggerContent() {
        const {
          triggerContent,
          _selectedItemContent: selectedItemContent
        } = this;
        return html(_t || (_t = _` <span id="trigger-label" class="${0}--list-box__label">${0}</span> `), prefix, selectedItemContent || triggerContent);
      }
      /* eslint-disable class-methods-use-this */

      /**
       * @returns The content following the trigger button.
       */

    }, {
      kind: "method",
      key: "_renderFollowingTriggerContent",
      value: function _renderFollowingTriggerContent() {
        return undefined;
      }
      /* eslint-enable class-methods-use-this */

      /**
       * Handles event to include selected value on the parent form.
       * @param event The event.
       */

    }, {
      kind: "method",
      key: "_handleFormdata",
      value: function _handleFormdata(event) {
        const {
          formData
        } = event; // TODO: Wait for `FormDataEvent` being available in `lib.dom.d.ts`

        const {
          disabled,
          name,
          value
        } = this;

        if (!disabled) {
          formData.append(name, value);
        }
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
        return DROPDOWN_COLOR_SCHEME.REGULAR;
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
        attribute: 'helper-text'
      })],
      key: "helperText",

      value() {
        return '';
      }

    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "invalid",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [property({
        attribute: 'label-text'
      })],
      key: "labelText",

      value() {
        return '';
      }

    }, {
      kind: "field",
      decorators: [property()],
      key: "name",

      value() {
        return '';
      }

    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "open",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "required",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [property({
        attribute: 'required-validity-message'
      })],
      key: "requiredValidityMessage",

      value() {
        return 'Please fill out this field.';
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
        reflect: true
      })],
      key: "size",

      value() {
        return DROPDOWN_SIZE.REGULAR;
      }

    }, {
      kind: "field",
      decorators: [property({
        attribute: 'toggle-label-closed'
      })],
      key: "toggleLabelClosed",

      value() {
        return '';
      }

    }, {
      kind: "field",
      decorators: [property({
        attribute: 'toggle-label-open'
      })],
      key: "toggleLabelOpen",

      value() {
        return '';
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
        return DROPDOWN_TYPE.REGULAR;
      }

    }, {
      kind: "field",
      decorators: [property({
        attribute: 'validity-message'
      })],
      key: "validityMessage",

      value() {
        return '';
      }

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
      kind: "method",
      key: "createRenderRoot",
      value:
      /**
       * `true` if this dropdown should be disabled.
       */

      /**
       * The helper text.
       */

      /**
       * `true` to show the UI of the invalid state.
       */

      /**
       * The label text.
       */

      /**
       * Name for the dropdown in the `FormData`
       */

      /**
       * `true` if this dropdown should be open.
       */

      /**
       * `true` if the value is required.
       */

      /**
       * The special validity message for `required`.
       */

      /**
       * An assistive text for screen reader to announce, telling the open state.
       */

      /**
       * An assistive text for screen reader to announce, telling that an item is selected.
       */

      /**
       * Dropdown size.
       */

      /**
       * The `aria-label` attribute for the UI indicating the closed state.
       */

      /**
       * The `aria-label` attribute for the UI indicating the open state.
       */

      /**
       * The content of the trigger button.
       */

      /**
       * `true` if this dropdown should use the inline UI variant.
       */

      /**
       * The validity message.
       */

      /**
       * The value of the selected item.
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
      key: "shouldUpdate",
      value: function shouldUpdate(changedProperties) {
        const {
          selectorItem
        } = this.constructor;

        if (changedProperties.has('size')) {
          forEach(this.querySelectorAll(selectorItem), elem => {
            elem.size = this.size;
          });
        }

        if (changedProperties.has('value')) {
          // `<bx-multi-select>` updates selection beforehand
          // because our rendering logic for `<bx-multi-select>` looks for selected items via `qSA()`
          forEach(this.querySelectorAll(selectorItem), elem => {
            elem.selected = elem.value === this.value;
          });
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
      key: "updated",
      value: function updated(changedProperties) {
        const {
          helperText,
          type
        } = this;
        const inline = type === DROPDOWN_TYPE.INLINE;
        const {
          selectorItem
        } = this.constructor;

        if (changedProperties.has('disabled')) {
          const {
            disabled
          } = this; // Propagate `disabled` attribute to descendants until `:host-context()` gets supported in all major browsers

          forEach(this.querySelectorAll(selectorItem), elem => {
            elem.disabled = disabled;
          });
        }

        if ((changedProperties.has('helperText') || changedProperties.has('type')) && helperText && inline) {
          // eslint-disable-next-line no-console
          console.warn('Found `helperText` property/attribute usage in inline mode, that is not supported, at:', this);
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const {
          colorScheme,
          disabled,
          helperText,
          invalid,
          labelText,
          open,
          toggleLabelClosed,
          toggleLabelOpen,
          size,
          type,
          validityMessage,
          _assistiveStatusText: assistiveStatusText,
          _shouldTriggerBeFocusable: shouldTriggerBeFocusable,
          _handleClickInner: handleClickInner,
          _handleKeydownInner: handleKeydownInner,
          _handleKeypressInner: handleKeypressInner,
          _handleSlotchangeHelperText: handleSlotchangeHelperText,
          _handleSlotchangeLabelText: handleSlotchangeLabelText,
          _slotHelperTextNode: slotHelperTextNode,
          _slotLabelTextNode: slotLabelTextNode
        } = this;
        const inline = type === DROPDOWN_TYPE.INLINE;
        const selectedItemsCount = this.querySelectorAll(this.constructor.selectorItemSelected).length;
        const classes = classMap({
          [`${prefix}--dropdown`]: true,
          [`${prefix}--list-box`]: true,
          [`${prefix}--list-box--${colorScheme}`]: colorScheme,
          [`${prefix}--list-box--disabled`]: disabled,
          [`${prefix}--list-box--inline`]: inline,
          [`${prefix}--list-box--expanded`]: open,
          [`${prefix}--list-box--${size}`]: size,
          [`${prefix}--dropdown--invalid`]: invalid,
          [`${prefix}--dropdown--inline`]: inline,
          [`${prefix}--dropdown--selected`]: selectedItemsCount > 0
        });
        const labelClasses = classMap({
          [`${prefix}--label`]: true,
          [`${prefix}--label--disabled`]: disabled
        });
        const helperClasses = classMap({
          [`${prefix}--form__helper-text`]: true,
          [`${prefix}--form__helper-text--disabled`]: disabled
        });
        const iconContainerClasses = classMap({
          [`${prefix}--list-box__menu-icon`]: true,
          [`${prefix}--list-box__menu-icon--open`]: open
        });
        const toggleLabel = (open ? toggleLabelOpen : toggleLabelClosed) || undefined;
        const hasHelperText = helperText || slotHelperTextNode && slotHelperTextNode.assignedNodes().length > 0;
        const hasLabelText = labelText || slotLabelTextNode && slotLabelTextNode.assignedNodes().length > 0;
        const helper = !invalid ? html(_t2 || (_t2 = _` <div part="helper-text" class="${0}" ?hidden="${0}"> <slot name="helper-text" @slotchange="${0}">${0}</slot> </div> `), helperClasses, inline || !hasHelperText, handleSlotchangeHelperText, helperText) : html(_t3 || (_t3 = _` <div part="validity-message" class="${0}"> <slot name="validity-message">${0}</slot> </div> `), `${prefix}--form-requirement`, validityMessage);
        const validityIcon = !invalid ? undefined : WarningFilled16({
          class: `${prefix}--list-box__invalid-icon`,
          'aria-label': toggleLabel
        });
        const menuBody = !open ? undefined : html(_t4 || (_t4 = _` <div id="menu-body" part="menu-body" class="${0}--list-box__menu" role="listbox" tabindex="-1"> <slot></slot> </div> `), prefix);
        return html(_t5 || (_t5 = _` <label part="label-text" class="${0}" ?hidden="${0}"> <slot name="label-text" @slotchange="${0}">${0}</slot> </label> <div role="listbox" class="${0}" ?data-invalid="${0}" @click="${0}" @keydown="${0}" @keypress="${0}"> ${0} <div part="trigger-button" role="${0}" class="${0}--list-box__field" tabindex="${0}" aria-labelledby="trigger-label" aria-expanded="${0}" aria-haspopup="listbox" aria-owns="menu-body" aria-controls="menu-body"> ${0}${0}${0} <div class="${0}">${0}</div> </div> ${0} </div> ${0} <div class="${0}--assistive-text" role="status" aria-live="assertive" aria-relevant="additions text"> ${0} </div> `), labelClasses, !hasLabelText, handleSlotchangeLabelText, labelText, classes, invalid, handleClickInner, handleKeydownInner, handleKeypressInner, validityIcon, ifDefined(!shouldTriggerBeFocusable ? undefined : 'button'), prefix, ifDefined(!shouldTriggerBeFocusable ? undefined : '0'), String(open), this._renderPrecedingTriggerContent(), this._renderTriggerContent(), this._renderFollowingTriggerContent(), iconContainerClasses, ChevronDown16({
          'aria-label': toggleLabel
        }), menuBody, helper, prefix, assistiveStatusText);
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
      key: "selectorItemHighlighted",
      value:
      /**
       * A selector that will return highlighted items.
       */
      function selectorItemHighlighted() {
        return `${prefix}-dropdown-item[highlighted]`;
      }
      /**
       * A selector that will return dropdown items.
       */

    }, {
      kind: "get",
      static: true,
      key: "selectorItem",
      value: function selectorItem() {
        return `${prefix}-dropdown-item`;
      }
      /**
       * A selector that will return selected items.
       */

    }, {
      kind: "get",
      static: true,
      key: "selectorItemSelected",
      value: function selectorItemSelected() {
        return `${prefix}-dropdown-item[selected]`;
      }
      /**
       * The name of the custom event fired before a dropdown item is selected upon a user gesture.
       * Cancellation of this event stops changing the user-initiated selection.
       */

    }, {
      kind: "get",
      static: true,
      key: "eventBeforeSelect",
      value: function eventBeforeSelect() {
        return `${prefix}-dropdown-beingselected`;
      }
      /**
       * The name of the custom event fired after a a dropdown item is selected upon a user gesture.
       */

    }, {
      kind: "get",
      static: true,
      key: "eventSelect",
      value: function eventSelect() {
        return `${prefix}-dropdown-selected`;
      }
      /**
       * The name of the custom event fired before this dropdown item is being toggled upon a user gesture.
       * Cancellation of this event stops the user-initiated action of toggling this dropdown item.
       */

    }, {
      kind: "get",
      static: true,
      key: "eventBeforeToggle",
      value: function eventBeforeToggle() {
        return `${prefix}-dropdown-beingtoggled`;
      }
      /**
       * The name of the custom event fired after this dropdown item is toggled upon a user gesture.
       */

    }, {
      kind: "get",
      static: true,
      key: "eventToggle",
      value: function eventToggle() {
        return `${prefix}-dropdown-toggled`;
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
       * @returns A action for dropdown for the given key symbol.
       */
      function getAction(key) {
        if (key === 'Escape') {
          return DROPDOWN_KEYBOARD_ACTION.CLOSING;
        }

        if (key in NAVIGATION_DIRECTION) {
          return DROPDOWN_KEYBOARD_ACTION.NAVIGATING;
        }

        if (this.TRIGGER_KEYS.has(key)) {
          return DROPDOWN_KEYBOARD_ACTION.TRIGGERING;
        }

        return DROPDOWN_KEYBOARD_ACTION.NONE;
      }
    }]
  };
}, ValidityMixin(HostListenerMixin(FormMixin(FocusMixin(LitElement)))));

export default BXDropdown;
//# sourceMappingURL=dropdown.js.map

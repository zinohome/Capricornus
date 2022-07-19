import _decorate from "@babel/runtime/helpers/esm/decorate";
import _get from "@babel/runtime/helpers/esm/get";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

let _ = t => t,
    _t,
    _t2,
    _t3,
    _t4,
    _t5,
    _t6,
    _t7;

/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { ifDefined } from 'lit-html/directives/if-defined';
import { html, property, query, customElement, LitElement } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import settings from 'carbon-components/es/globals/js/settings';
import ChevronDown16 from "../../icons/chevron--down/16";
import WarningFilled16 from "../../icons/warning--filled/16";
import { FORM_ELEMENT_COLOR_SCHEME } from '../../globals/shared-enums';
import ifNonNull from '../../globals/directives/if-non-null';
import FormMixin from '../../globals/mixins/form';
import ValidityMixin from '../../globals/mixins/validity';
import { filter } from '../../globals/internal/collection-helpers';
import { INPUT_SIZE } from '../input/input';
import styles from "././select.css.js";
export { FORM_ELEMENT_COLOR_SCHEME as SELECT_COLOR_SCHEME } from '../../globals/shared-enums';
const {
  prefix
} = settings;
/**
 * Select box.
 * @element bx-select
 * @slot helper-text - The helper text.
 * @slot label-text - The label text.
 * @slot validity-message - The validity message. If present and non-empty, this input shows the UI of its invalid state.
 */

let BXSelect = _decorate([customElement(`${prefix}-select`)], function (_initialize, _ValidityMixin) {
  class BXSelect extends _ValidityMixin {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXSelect,
    d: [{
      kind: "field",
      key: "_observerMutation",

      value() {
        return null;
      }

    }, {
      kind: "field",
      key: "_placeholderItemValue",

      value() {
        return `__${prefix}-select-placeholder_${Math.random().toString(36).slice(2)}`;
      }

    }, {
      kind: "field",
      decorators: [query('select')],
      key: "_selectNode",
      value: void 0
    }, {
      kind: "method",
      key: "_handleInput",
      value:
      /**
       * The mutation observer DOM mutation.
       */

      /**
       * The `value` for placeholder `<option>`.
       */

      /**
       * The select box.
       */

      /**
       * Handles `oninput` event on the `<input>`.
       * @param event The event.
       */
      function _handleInput({
        target
      }) {
        const {
          value
        } = target;
        this.value = value;
        const {
          eventSelect
        } = this.constructor;
        this.dispatchEvent(new CustomEvent(eventSelect, {
          bubbles: true,
          composed: true,
          detail: {
            value
          }
        }));
      }
      /**
       * Handles DOM mutation of `<bx-select-item>` or `<bx-select-item-group>` put in `<bx-select>`, or their changes.
       * In such event, `<bx-select>` creates the corresponding `<option>` and `<optgroup>`, respectively, into shadow DOM,
       * with `._renderItems()`.
       * Doing so allows the shadow DOM style of `<bx-select>` to control the style of the `<option>` and `<optgroup>`,
       * notably the disabled ones.
       */

    }, {
      kind: "field",
      key: "_handleMutation",

      value() {
        return () => {
          this.requestUpdate();
        };
      }

    }, {
      kind: "method",
      key: "_renderItems",
      value:
      /**
       * @param element The parent element containing pseudo `<optgroup>`/`<option>`.
       * @returns The template containing child `<optgroup>`/`<option>` that will be rendered to shadow DOM.
       */
      function _renderItems(element) {
        const {
          selectorItem,
          selectorLeafItem
        } = this.constructor; // Harvests attributes from `<bx-select-item>` and `<bx-select-item-group>`.
        // Does not use properties to avoid delay in attribute to property mapping, which runs in custom element reaction cycle:
        // https://html.spec.whatwg.org/multipage/custom-elements.html#custom-element-reactions

        return html(_t || (_t = _` ${0} `), filter(element.childNodes, item => item.nodeType === Node.ELEMENT_NODE && item.matches(selectorItem)).map(item => {
          const disabled = item.hasAttribute('disabled');
          const label = item.getAttribute('label');
          const selected = item.hasAttribute('selected');
          const value = item.getAttribute('value');
          const {
            textContent
          } = item;
          return item.matches(selectorLeafItem) ? html(_t2 || (_t2 = _` <option class="${0}--select-option" ?disabled="${0}" label="${0}" ?selected="${0}" value="${0}"> ${0} </option> `), prefix, disabled, ifNonNull(label !== null && label !== void 0 ? label : textContent), selected, ifNonNull(value), textContent) : html(_t3 || (_t3 = _` <optgroup class="${0}--select-optgroup" ?disabled="${0}" label="${0}"> ${0} </optgroup> `), prefix, disabled, ifNonNull(label), this._renderItems(item));
        }));
      }
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
       * The count of child `<option>`s.
       * If the placeholder is in effect, it includes the `<option>` for the placeholder.
       */

    }, {
      kind: "get",
      key: "length",
      value: function length() {
        return this._selectNode.length;
      }
      /**
       * The child `<option>`s.
       */

    }, {
      kind: "get",
      key: "options",
      value: function options() {
        return this._selectNode.options;
      }
      /**
       * This form control's type.
       */

    }, {
      kind: "get",
      key: "type",
      value: function type() {
        return this._selectNode.type;
      }
      /**
       * Sets the select to be focussed automatically on page load. Defaults to false
       */

    }, {
      kind: "field",
      decorators: [property({
        type: Boolean
      })],
      key: "autofocus",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [property({
        attribute: 'color-scheme',
        reflect: true
      })],
      key: "colorScheme",

      value() {
        return FORM_ELEMENT_COLOR_SCHEME.REGULAR;
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
      decorators: [property()],
      key: "id",

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
      kind: "get",
      decorators: [property({
        type: Boolean
      })],
      key: "multiple",
      value:
      /**
       * The color scheme.
       */

      /**
       * Controls the disabled state of the select
       */

      /**
       * The helper text.
       */

      /**
       * ID to link the `label` and `select`
       */

      /**
       * Controls the invalid state and visibility of the `validityMessage`
       */

      /**
       * The label text.
       */

      /**
       * `true` to enable multiple selection.
       */
      function multiple() {
        return false;
      }
      /**
       * Name for the select in the `FormData`
       */

    }, {
      kind: "field",
      decorators: [property()],
      key: "name",

      value() {
        return '';
      }

    }, {
      kind: "field",
      decorators: [property()],
      key: "pattern",

      value() {
        return '';
      }

    }, {
      kind: "field",
      decorators: [property({
        reflect: true
      })],
      key: "placeholder",

      value() {
        return '';
      }

    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "readonly",

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
      kind: "get",
      decorators: [property({
        type: Number
      })],
      key: "selectedIndex",
      value:
      /**
       * Pattern to validate the select against for HTML validity checking
       */

      /**
       * Value to display when the select has an empty `value`
       */

      /**
       * Controls the readonly state of the select
       */

      /**
       * Boolean property to set the required status
       */

      /**
       * The special validity message for `required`.
       */

      /**
       * The selected index.
       */
      function selectedIndex() {
        return this._selectNode.selectedIndex;
      }
    }, {
      kind: "set",
      key: "selectedIndex",
      value: function selectedIndex(value) {
        this._selectNode.selectedIndex = value;
        this.value = this._selectNode.value;
      }
      /**
       * The input box size.
       */

    }, {
      kind: "field",
      decorators: [property({
        reflect: true
      })],
      key: "size",

      value() {
        return INPUT_SIZE.REGULAR;
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
      decorators: [property()],
      key: "value",

      value() {
        return '';
      }

    }, {
      kind: "method",
      key: "createRenderRoot",
      value:
      /**
       * The validity message.
       */

      /**
       * The value of the text area.
       */
      function createRenderRoot() {
        return this.attachShadow({
          mode: 'open',
          delegatesFocus: true
        });
      }
    }, {
      kind: "method",
      key: "connectedCallback",
      value: function connectedCallback() {
        _get(_getPrototypeOf(BXSelect.prototype), "connectedCallback", this).call(this);

        this._observerMutation = new MutationObserver(this._handleMutation);

        this._observerMutation.observe(this, {
          attributes: true,
          childList: true,
          subtree: true
        });
      }
    }, {
      kind: "method",
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        if (this._observerMutation) {
          this._observerMutation.disconnect();

          this._observerMutation = null;
        }

        _get(_getPrototypeOf(BXSelect.prototype), "disconnectedCallback", this).call(this);
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProperties) {
        if (changedProperties.has('value')) {
          const {
            value,
            _placeholderItemValue: placeholderItemValue
          } = this; // Ensures setting the `value` after rendering child `<option>`s/`<optgroup>`s when there is a change in `value`,
          // given reflecting `value` requires child `<option>`s/`<optgroup>`s being there beforehand

          this._selectNode.value = !value ? placeholderItemValue : value;
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const {
          disabled,
          helperText,
          invalid,
          labelText,
          placeholder,
          size,
          validityMessage,
          value,
          _placeholderItemValue: placeholderItemValue,
          _handleInput: handleInput
        } = this;
        const inputClasses = classMap({
          [`${prefix}--select-input`]: true,
          [`${prefix}--select-input--${size}`]: size
        });
        const labelClasses = classMap({
          [`${prefix}--label`]: true,
          [`${prefix}--label--disabled`]: disabled
        });
        const helperTextClasses = classMap({
          [`${prefix}--form__helper-text`]: true,
          [`${prefix}--form__helper-text--disabled`]: disabled
        });
        const supplementalText = !invalid ? html(_t4 || (_t4 = _` <div class="${0}"> <slot name="helper-text"> ${0} </slot> </div> `), helperTextClasses, helperText) : html(_t5 || (_t5 = _` <div class="${0}--form-requirement" id="validity-message"> <slot name="validity-message"> ${0} </slot> </div> `), prefix, validityMessage);
        return html(_t6 || (_t6 = _` <label class="${0}" for="input"> <slot name="label-text"> ${0} </slot> </label> <div class="${0}--select-input__wrapper" ?data-invalid="${0}"> <select id="input" class="${0}" ?disabled="${0}" aria-invalid="${0}" aria-describedby="${0}" @input="${0}"> ${0} ${0} </select> ${0} ${0} </div> ${0} `), labelClasses, labelText, prefix, invalid, inputClasses, disabled, String(Boolean(invalid)), ifDefined(!invalid ? undefined : 'validity-message'), handleInput, !placeholder || value ? undefined : html(_t7 || (_t7 = _` <option disabled="disabled" hidden class="${0}--select-option" value="${0}" selected="selected"> ${0} </option> `), prefix, placeholderItemValue, placeholder), this._renderItems(this), ChevronDown16({
          class: `${prefix}--select__arrow`
        }), !invalid ? undefined : WarningFilled16({
          class: `${prefix}--select__invalid-icon`
        }), supplementalText);
      }
      /**
       * A selector selecting child pseudo `<optgroup>`/`<option>`.
       */

    }, {
      kind: "get",
      static: true,
      key: "selectorItem",
      value: function selectorItem() {
        return `${prefix}-select-item-group,${prefix}-select-item`;
      }
      /**
       * A selector selecting child pseudo `<option>`.
       */

    }, {
      kind: "get",
      static: true,
      key: "selectorLeafItem",
      value: function selectorLeafItem() {
        return `${prefix}-select-item`;
      }
      /**
       * The name of the custom event fired after item is selected.
       */

    }, {
      kind: "get",
      static: true,
      key: "eventSelect",
      value: function eventSelect() {
        return `${prefix}-select-selected`;
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
}, ValidityMixin(FormMixin(LitElement)));

export default BXSelect;
//# sourceMappingURL=select.js.map

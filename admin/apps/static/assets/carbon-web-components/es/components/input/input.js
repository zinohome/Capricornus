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
import { classMap } from 'lit-html/directives/class-map';
import settings from 'carbon-components/es/globals/js/settings';
import WarningFilled16 from "../../icons/warning--filled/16";
import ifNonEmpty from '../../globals/directives/if-non-empty';
import FormMixin from '../../globals/mixins/form';
import ValidityMixin from '../../globals/mixins/validity';
import { INPUT_COLOR_SCHEME, INPUT_SIZE, INPUT_TYPE } from './defs';
import styles from "././input.css.js";
export { INPUT_COLOR_SCHEME, INPUT_SIZE, INPUT_TYPE };
const {
  prefix
} = settings;
/**
 * Input element. Supports all the usual attributes for textual input types
 * @element bx-input
 * @slot helper-text - The helper text.
 * @slot label-text - The label text.
 * @slot validity-message - The validity message. If present and non-empty, this input shows the UI of its invalid state.
 */

let BXInput = _decorate([customElement(`${prefix}-input`)], function (_initialize, _ValidityMixin) {
  class BXInput extends _ValidityMixin {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXInput,
    d: [{
      kind: "field",
      decorators: [query('input')],
      key: "_input",
      value: void 0
    }, {
      kind: "field",
      key: "_value",

      value() {
        return '';
      }

    }, {
      kind: "method",
      key: "_handleInput",
      value:
      /**
       * The underlying input element
       */

      /**
       * The internal value.
       */

      /**
       * Handles `oninput` event on the `<input>`.
       * @param event The event.
       */
      function _handleInput({
        target
      }) {
        this.value = target.value;
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
       * May be any of the standard HTML autocomplete options
       */

    }, {
      kind: "field",
      decorators: [property()],
      key: "autocomplete",

      value() {
        return '';
      }

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
        return INPUT_COLOR_SCHEME.REGULAR;
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
        reflect: true
      })],
      key: "type",

      value() {
        return INPUT_TYPE.TEXT;
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
      kind: "get",
      decorators: [property({
        reflect: true
      })],
      key: "value",
      value:
      /**
       * Sets the input to be focussed automatically on page load. Defaults to false
       */

      /**
       * The color scheme.
       */

      /**
       * Controls the disabled state of the input
       */

      /**
       * The helper text.
       */

      /**
       * Controls the invalid state and visibility of the `validityMessage`
       */

      /**
       * The label text.
       */

      /**
       * Name for the input in the `FormData`
       */

      /**
       * Pattern to validate the input against for HTML validity checking
       */

      /**
       * Value to display when the input has an empty `value`
       */

      /**
       * Controls the readonly state of the input
       */

      /**
       * Boolean property to set the required status
       */

      /**
       * The special validity message for `required`.
       */

      /**
       * The input box size.
       */

      /**
       * The type of the input. Can be one of the types listed in the INPUT_TYPE enum
       */

      /**
       * The validity message. If present and non-empty, this input shows the UI of its invalid state.
       */

      /**
       * The value of the input.
       */
      function value() {
        // FIXME: Figure out how to deal with TS2611
        // once we have the input we can directly query for the value
        if (this._input) {
          return this._input.value;
        } // but before then _value will work fine


        return this._value;
      }
    }, {
      kind: "set",
      key: "value",
      value: function value(_value) {
        const oldValue = this._value;
        this._value = _value; // make sure that lit-element updates the right properties

        this.requestUpdate('value', oldValue); // we set the value directly on the input (when available)
        // so that programatic manipulation updates the UI correctly

        if (this._input) {
          this._input.value = _value;
        }
      }
    }, {
      kind: "method",
      key: "createRenderRoot",
      value: function createRenderRoot() {
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
          _handleInput: handleInput
        } = this;
        const invalidIcon = WarningFilled16({
          class: `${prefix}--text-input__invalid-icon`
        });
        const inputClasses = classMap({
          [`${prefix}--text-input`]: true,
          [`${prefix}--text-input--${this.colorScheme}`]: this.colorScheme,
          [`${prefix}--text-input--invalid`]: this.invalid,
          [`${prefix}--text-input--${this.size}`]: this.size
        });
        const labelClasses = classMap({
          [`${prefix}--label`]: true,
          [`${prefix}--label--disabled`]: this.disabled
        });
        const helperTextClasses = classMap({
          [`${prefix}--form__helper-text`]: true,
          [`${prefix}--form__helper-text--disabled`]: this.disabled
        });
        return html(_t || (_t = _` <label class="${0}" for="input"> <slot name="label-text"> ${0} </slot> </label> <div class="${0}--text-input__field-wrapper" ?data-invalid="${0}"> ${0} <input ?autocomplete="${0}" ?autofocus="${0}" class="${0}" ?data-invalid="${0}" ?disabled="${0}" id="input" name="${0}" pattern="${0}" placeholder="${0}" ?readonly="${0}" ?required="${0}" type="${0}" .value="${0}" @input="${0}"> </div> <div class="${0}"> <slot name="helper-text"> ${0} </slot> </div> <div class="${0}--form-requirement"> <slot name="validity-message"> ${0} </slot> </div> `), labelClasses, this.labelText, prefix, this.invalid, this.invalid ? invalidIcon : null, this.autocomplete, this.autofocus, inputClasses, this.invalid, this.disabled, ifNonEmpty(this.name), ifNonEmpty(this.pattern), ifNonEmpty(this.placeholder), this.readonly, this.required, ifNonEmpty(this.type), this._value, handleInput, helperTextClasses, this.helperText, prefix, this.validityMessage);
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

export { BXInput as default };
//# sourceMappingURL=input.js.map

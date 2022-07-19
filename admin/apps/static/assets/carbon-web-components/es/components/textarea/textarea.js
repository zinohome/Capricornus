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
import { customElement, LitElement, html, property, query } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import settings from 'carbon-components/es/globals/js/settings';
import WarningFilled16 from "../../icons/warning--filled/16";
import ifNonEmpty from '../../globals/directives/if-non-empty';
import ifNonNull from '../../globals/directives/if-non-null';
import FormMixin from '../../globals/mixins/form';
import ValidityMixin from '../../globals/mixins/validity';
import { TEXTAREA_COLOR_SCHEME } from './defs';
import styles from "././textarea.css.js";
export { TEXTAREA_COLOR_SCHEME };
const {
  prefix
} = settings;
/**
 * Text area.
 * @element bx-textarea
 * @slot helper-text - The helper text.
 * @slot label-text - The label text.
 * @slot validity-message - The validity message. If present and non-empty, this input shows the UI of its invalid state.
 */

let BXTextarea = _decorate([customElement(`${prefix}-textarea`)], function (_initialize, _ValidityMixin) {
  class BXTextarea extends _ValidityMixin {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXTextarea,
    d: [{
      kind: "method",
      key: "_handleInput",
      value:
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
        return TEXTAREA_COLOR_SCHEME.REGULAR;
      }

    }, {
      kind: "field",
      decorators: [property()],
      key: "cols",

      value() {
        return 50;
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
      decorators: [property()],
      key: "rows",

      value() {
        return 4;
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
      kind: "field",
      decorators: [query('textarea')],
      key: "_textarea",
      value: void 0
    }, {
      kind: "method",
      key: "createRenderRoot",
      value:
      /**
       * Sets the textarea to be focussed automatically on page load. Defaults to false
       */

      /**
       * The color scheme.
       */

      /**
       * The number of columns for the textarea to show by default
       */

      /**
       * Controls the disabled state of the textarea
       */

      /**
       * The helper text.
       */

      /**
       * ID to link the `label` and `textarea`
       */

      /**
       * Controls the invalid state and visibility of the `validityMessage`
       */

      /**
       * The label text.
       */

      /**
       * Name for the textarea in the `FormData`
       */

      /**
       * Pattern to validate the textarea against for HTML validity checking
       */

      /**
       * Value to display when the textarea has an empty `value`
       */

      /**
       * Controls the readonly state of the textarea
       */

      /**
       * Boolean property to set the required status
       */

      /**
       * The special validity message for `required`.
       */

      /**
       * The number of rows for the textarea to show by default
       */

      /**
       * The validity message.
       */

      /**
       * The value of the text area.
       */

      /**
       * Get a reference to the underlying textarea so we can directly apply values.
       * This lets us fixe a bug where after a user would clear text, the value wouldn't update programmatically
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
        const invalidIcon = WarningFilled16({
          class: `${prefix}--text-area__invalid-icon`
        });
        const textareaClasses = classMap({
          [`${prefix}--text-area`]: true,
          [`${prefix}--text-area--v2`]: true,
          [`${prefix}--text-area--${this.colorScheme}`]: this.colorScheme,
          [`${prefix}--text-area--invalid`]: this.invalid
        });
        const labelClasses = classMap({
          [`${prefix}--label`]: true,
          [`${prefix}--label--disabled`]: this.disabled
        });
        const helperTextClasses = classMap({
          [`${prefix}--form__helper-text`]: true,
          [`${prefix}--form__helper-text--disabled`]: this.disabled
        });
        return html(_t || (_t = _` <label class="${0}" for="input"> <slot name="label-text"> ${0} </slot> </label> <div class="${0}--text-area__wrapper" ?data-invalid="${0}"> ${0} <textarea ?autocomplete="${0}" ?autofocus="${0}" class="${0}" cols="${0}" ?data-invalid="${0}" ?disabled="${0}" id="input" name="${0}" pattern="${0}" placeholder="${0}" ?readonly="${0}" ?required="${0}" rows="${0}" .value="${0}" @input="${0}"></textarea> </div> <div class="${0}"> <slot name="helper-text"> ${0} </slot> </div> <div class="${0}--form-requirement"> <slot name="validity-message"> ${0} </slot> </div> `), labelClasses, this.labelText, prefix, this.invalid, this.invalid ? invalidIcon : null, this.autocomplete, this.autofocus, textareaClasses, ifNonNull(this.cols), this.invalid, this.disabled, ifNonEmpty(this.name), ifNonEmpty(this.pattern), ifNonEmpty(this.placeholder), this.readonly, this.required, ifNonNull(this.rows), this.value, this._handleInput, helperTextClasses, this.helperText, prefix, this.validityMessage);
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

export { BXTextarea as default };
//# sourceMappingURL=textarea.js.map

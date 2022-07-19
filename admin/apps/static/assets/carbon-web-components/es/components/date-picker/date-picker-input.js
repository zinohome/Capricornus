import _decorate from "@babel/runtime/helpers/esm/decorate";

let _ = t => t,
    _t,
    _t2,
    _t3;

/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { classMap } from 'lit-html/directives/class-map';
import { html, property, query, customElement, LitElement } from 'lit-element';
import Calendar16 from "../../icons/calendar/16";
import settings from 'carbon-components/es/globals/js/settings';
import ifNonNull from '../../globals/directives/if-non-null';
import FocusMixin from '../../globals/mixins/focus';
import ValidityMixin from '../../globals/mixins/validity';
import { INPUT_SIZE } from '../input/input';
import { DATE_PICKER_INPUT_COLOR_SCHEME, DATE_PICKER_INPUT_KIND, DATE_PICKER_INPUT_SIZE_HORIZONTAL } from './defs';
import styles from "././date-picker.css.js";
export { DATE_PICKER_INPUT_COLOR_SCHEME, DATE_PICKER_INPUT_KIND, DATE_PICKER_INPUT_SIZE_HORIZONTAL };
const {
  prefix
} = settings;
/**
 * The input box for date picker.
 * @element bx-date-picker-input
 */

let BXDatePickerInput = _decorate([customElement(`${prefix}-date-picker-input`)], function (_initialize, _ValidityMixin) {
  class BXDatePickerInput extends _ValidityMixin {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXDatePickerInput,
    d: [{
      kind: "field",
      decorators: [query(`.${prefix}--date-picker__icon`)],
      key: "_iconNode",
      value: void 0
    }, {
      kind: "field",
      decorators: [query('slot[name="validity-message"]')],
      key: "_slotValidityMessage",
      value: void 0
    }, {
      kind: "get",
      key: "_hasValidityMessage",
      value:
      /**
       * The calendar icon.
       */

      /**
       * The `<slot>` for the validity message.
       */

      /**
       * `true` if validity message is given via `validityMessage` property or via `<slot name="validity-message">`.
       */
      function _hasValidityMessage() {
        const {
          validityMessage,
          _slotValidityMessage: slotValidityMessage
        } = this;
        return validityMessage || slotValidityMessage && slotValidityMessage.assignedNodes.length > 0;
      }
      /**
       * Handles `click` event on the calendar icon.
       * @param event The event.
       */

    }, {
      kind: "method",
      key: "_handleClickWrapper",
      value: function _handleClickWrapper(event) {
        if (event.target === this._iconNode) {
          this.input.focus();
        }
      }
      /**
       * Handles `slotchange` event on `<slot name="validity-message">`.
       */

    }, {
      kind: "method",
      key: "_handleSlotChangeValidityMessage",
      value: function _handleSlotChangeValidityMessage() {
        this.requestUpdate();
      }
      /**
       * Handles `input` event on `<input>` in the shadow DOM.
       * @param event The event.
       */

    }, {
      kind: "method",
      key: "_handleInput",
      value: function _handleInput({
        target
      }) {
        const {
          value
        } = target;
        this.value = value;
      }
      /**
       * @returns The template for the the calendar icon.
       */

    }, {
      kind: "method",
      key: "_renderIcon",
      value: function _renderIcon() {
        return this.kind === DATE_PICKER_INPUT_KIND.SIMPLE ? undefined : Calendar16({
          class: `${prefix}--date-picker__icon`,
          role: 'img',
          children: [html(_t || (_t = _` <title>Open calendar</title> `))]
        });
      }
      /**
       * @returns The template for the the validity message.
       */

    }, {
      kind: "method",
      key: "_renderValidityMessage",
      value: function _renderValidityMessage() {
        const {
          validityMessage,
          _hasValidityMessage: hasValidityMessage,
          _handleSlotChangeValidityMessage: handleSlotChangeValidityMessage
        } = this;
        return html(_t2 || (_t2 = _` <div ?hidden="${0}" class="${0}--form-requirement"> <slot name="validity-message" @slotchange="${0}">${0}</slot> </div> `), !hasValidityMessage, prefix, handleSlotChangeValidityMessage, validityMessage);
      }
      /**
       * The `<input>`, used for Flatpickr to grab.
       */

    }, {
      kind: "field",
      decorators: [query('input')],
      key: "input",
      value: void 0
    }, {
      kind: "field",
      decorators: [property({
        attribute: 'color-scheme',
        reflect: true
      })],
      key: "colorScheme",

      value() {
        return DATE_PICKER_INPUT_COLOR_SCHEME.REGULAR;
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
        reflect: true,
        attribute: 'hide-label'
      })],
      key: "hideLabel",

      value() {
        return false;
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
        reflect: true
      })],
      key: "kind",

      value() {
        return DATE_PICKER_INPUT_KIND.SIMPLE;
      }

    }, {
      kind: "field",
      decorators: [property({
        attribute: 'label-text'
      })],
      key: "labelText",
      value: void 0
    }, {
      kind: "field",
      decorators: [property()],
      key: "pattern",
      value: void 0
    }, {
      kind: "field",
      decorators: [property()],
      key: "placeholder",
      value: void 0
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
        attribute: 'size',
        reflect: true
      })],
      key: "size",

      value() {
        return INPUT_SIZE.REGULAR;
      }

    }, {
      kind: "field",
      decorators: [property({
        attribute: 'size-horizontal',
        reflect: true
      })],
      key: "sizeHorizontal",

      value() {
        return DATE_PICKER_INPUT_SIZE_HORIZONTAL.REGULAR;
      }

    }, {
      kind: "field",
      decorators: [property()],
      key: "type",
      value: void 0
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
      value: void 0
    }, {
      kind: "method",
      key: "createRenderRoot",
      value:
      /**
       * The color scheme.
       */

      /**
       * `true` if the check box should be disabled.
       */

      /**
       * `true` if the label should be hidden.
       */

      /**
       * Controls the invalid state and visibility of the `validityMessage`.
       */

      /**
       * Date picker input kind.
       */

      /**
       * The label text.
       */

      /**
       * The `pattern` attribute for the `<input>` in the shadow DOM.
       */

      /**
       * The placeholder text.
       */

      /**
       * `true` if the value is required.
       */

      /**
       * The special validity message for `required`.
       */

      /**
       * Vertical size of this date picker input.
       */

      /**
       * Horizontal size of this date picker input.
       * Effective only when `kind` property is `DATE_PICKER_INPUT_KIND.SIMPLE`.
       */

      /**
       * The `type` attribute for the `<input>` in the shadow DOM.
       */

      /**
       * The validity message.
       * If present and non-empty, this date picker input shows the UI of its invalid state.
       */

      /**
       * The value.
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
        const constructor = this.constructor;
        const {
          disabled,
          hideLabel,
          invalid,
          labelText,
          pattern = constructor.defaultPattern,
          placeholder,
          size,
          type = constructor.defaultType,
          value,
          _handleClickWrapper: handleClickWrapper,
          _handleInput: handleInput
        } = this;
        const labelClasses = classMap({
          [`${prefix}--label`]: true,
          [`${prefix}--visually-hidden`]: hideLabel,
          [`${prefix}--label--disabled`]: disabled
        });
        const inputClasses = classMap({
          [`${prefix}--date-picker__input`]: true,
          [`${prefix}--date-picker__input--${size}`]: size
        });
        return html(_t3 || (_t3 = _` <label for="input" class="${0}"> <slot name="label-text">${0}</slot> </label> <div class="${0}--date-picker-input__wrapper" @click="${0}"> <input id="input" type="${0}" class="${0}" ?disabled="${0}" pattern="${0}" placeholder="${0}" .value="${0}" ?data-invalid="${0}" @input="${0}"> ${0} </div> ${0} `), labelClasses, labelText, prefix, handleClickWrapper, type, inputClasses, disabled, pattern, ifNonNull(placeholder), ifNonNull(value), invalid, handleInput, this._renderIcon(), this._renderValidityMessage());
      }
      /**
       * The default value for `pattern` property.
       */

    }, {
      kind: "field",
      static: true,
      key: "defaultPattern",

      value() {
        return '\\d{1,2}\\/\\d{1,2}\\/\\d{4}';
      }

    }, {
      kind: "field",
      static: true,
      key: "defaultType",

      value() {
        return 'text';
      }

    }, {
      kind: "get",
      static: true,
      key: "selectorParent",
      value:
      /**
       * The default value for `type` property.
       */

      /**
       * A selector that will return the parent date picker.
       */
      function selectorParent() {
        return `${prefix}-date-picker`;
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
}, ValidityMixin(FocusMixin(LitElement)));

export default BXDatePickerInput;
//# sourceMappingURL=date-picker-input.js.map

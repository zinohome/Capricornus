import _decorate from "@babel/runtime/helpers/esm/decorate";
import _get from "@babel/runtime/helpers/esm/get";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

let _2 = t => t,
    _t,
    _t2,
    _t3,
    _t4,
    _t5,
    _t6;

/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { html, property, query, customElement } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import settings from 'carbon-components/es/globals/js/settings';
import WarningFilled16 from "../../icons/warning--filled/16";
import CaretUp16 from "../../icons/caret--up/16";
import CaretDown16 from "../../icons/caret--down/16";
import ifNonEmpty from '../../globals/directives/if-non-empty';
import { NUMBER_INPUT_COLOR_SCHEME, NUMBER_INPUT_VALIDATION_STATUS } from './defs';
import styles from "././number-input.css.js";
import BXInput, { INPUT_SIZE } from '../input/input';
export { NUMBER_INPUT_COLOR_SCHEME, NUMBER_INPUT_VALIDATION_STATUS };
const {
  prefix
} = settings;
/**
 * Number input.
 * @element bx-number-input
 * @slot helper-text - The helper text.
 * @slot label-text - The label text.
 * @slot validity-message - The validity message. If present and non-empty, this input shows the UI of its invalid state.
 */

let BXNumberInput = _decorate([customElement(`${prefix}-number-input`)], function (_initialize, _BXInput) {
  class BXNumberInput extends _BXInput {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXNumberInput,
    d: [{
      kind: "method",
      key: "_handleInput",
      value:
      /**
       * Handles `input` event on the `<input>` in the shadow DOM.
       */
      function _handleInput(event) {
        const {
          target
        } = event;
        const {
          value
        } = target;
        this.dispatchEvent(new CustomEvent(this.constructor.eventInput, {
          bubbles: true,
          composed: true,
          cancelable: false,
          detail: {
            value
          }
        }));

        _get(_getPrototypeOf(BXNumberInput.prototype), "_handleInput", this).call(this, event);
      }
      /**
       * Handles `click` event on the up button in the shadow DOM.
       */
      // eslint-disable-next-line @typescript-eslint/no-unused-vars

    }, {
      kind: "method",
      key: "_handleUserInitiatedStepDown",
      value: function _handleUserInitiatedStepDown(_) {
        const {
          _input: input
        } = this;
        this.stepDown();
        this.dispatchEvent(new CustomEvent(this.constructor.eventInput, {
          bubbles: true,
          composed: true,
          cancelable: false,
          detail: {
            value: input.value
          }
        }));
      }
      /**
       * Handles `click` event on the down button in the shadow DOM.
       */
      // eslint-disable-next-line @typescript-eslint/no-unused-vars

    }, {
      kind: "method",
      key: "_handleUserInitiatedStepUp",
      value: function _handleUserInitiatedStepUp(_) {
        const {
          _input: input
        } = this;
        this.stepUp();
        this.dispatchEvent(new CustomEvent(this.constructor.eventInput, {
          bubbles: true,
          composed: true,
          cancelable: false,
          detail: {
            value: input.value
          }
        }));
      }
      /**
       * The underlying input element
       */

    }, {
      kind: "field",
      decorators: [query('input')],
      key: "_input",
      value: void 0
    }, {
      kind: "method",
      key: "_testValidity",
      value: function _testValidity() {
        var _this$_input, _this$_input2;

        if (((_this$_input = this._input) === null || _this$_input === void 0 ? void 0 : _this$_input.valueAsNumber) > Number(this.max)) {
          return NUMBER_INPUT_VALIDATION_STATUS.EXCEEDED_MAXIMUM;
        }

        if (((_this$_input2 = this._input) === null || _this$_input2 === void 0 ? void 0 : _this$_input2.valueAsNumber) < Number(this.min)) {
          return NUMBER_INPUT_VALIDATION_STATUS.EXCEEDED_MINIMUM;
        }

        return _get(_getPrototypeOf(BXNumberInput.prototype), "_testValidity", this).call(this);
      }
    }, {
      kind: "method",
      key: "_getValidityMessage",
      value: function _getValidityMessage(state) {
        if (Object.values(NUMBER_INPUT_VALIDATION_STATUS).includes(state)) {
          const stateMessageMap = {
            [NUMBER_INPUT_VALIDATION_STATUS.EXCEEDED_MAXIMUM]: this.validityMessageMax,
            [NUMBER_INPUT_VALIDATION_STATUS.EXCEEDED_MINIMUM]: this.validityMessageMin
          };
          return stateMessageMap[state];
        }

        return _get(_getPrototypeOf(BXNumberInput.prototype), "_getValidityMessage", this).call(this, state);
      }
    }, {
      kind: "field",
      key: "_min",

      value() {
        return '';
      }

    }, {
      kind: "field",
      key: "_max",

      value() {
        return '';
      }

    }, {
      kind: "field",
      key: "_step",

      value() {
        return '1';
      }

    }, {
      kind: "field",
      decorators: [property({
        attribute: 'color-scheme',
        reflect: true
      })],
      key: "colorScheme",

      value() {
        return NUMBER_INPUT_COLOR_SCHEME.REGULAR;
      }

    }, {
      kind: "get",
      decorators: [property({
        reflect: true
      })],
      key: "min",
      value:
      /**
       * The color scheme.
       */

      /**
       * The minimum value allowed in the input
       */
      function min() {
        return this._min.toString();
      }
    }, {
      kind: "set",
      key: "min",
      value: function min(value) {
        const oldValue = this.min;
        this._min = value;
        this.requestUpdate('min', oldValue);
      }
      /**
       * The maximum value allowed in the input
       */

    }, {
      kind: "get",
      decorators: [property({
        reflect: true
      })],
      key: "max",
      value: function max() {
        return this._max.toString();
      }
    }, {
      kind: "set",
      key: "max",
      value: function max(value) {
        const oldValue = this.max;
        this._max = value;
        this.requestUpdate('max', oldValue);
      }
      /**
       * The amount the value should increase or decrease by
       */

    }, {
      kind: "get",
      decorators: [property({
        reflect: true
      })],
      key: "step",
      value: function step() {
        return this._step.toString();
      }
    }, {
      kind: "set",
      key: "step",
      value: function step(value) {
        const oldValue = this.step;
        this._step = value;
        this.requestUpdate('step', oldValue);
      }
      /**
       * Set to `true` to enable the mobile variant of the number input
       */

    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "mobile",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [property({
        attribute: 'increment-button-assistive-text'
      })],
      key: "incrementButtonAssistiveText",

      value() {
        return 'increase number input';
      }

    }, {
      kind: "field",
      decorators: [property({
        attribute: 'decrement-button-assistive-text'
      })],
      key: "decrementButtonAssistiveText",

      value() {
        return 'decrease number input';
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
        attribute: 'validity-message-max'
      })],
      key: "validityMessageMax",

      value() {
        return '';
      }

    }, {
      kind: "field",
      decorators: [property({
        attribute: 'validity-message-min'
      })],
      key: "validityMessageMin",

      value() {
        return '';
      }

    }, {
      kind: "method",
      key: "stepUp",
      value:
      /**
       * Aria text for the button that increments the value
       */

      /**
       * Aria text for the button that decrements the value
       */

      /**
       * The input box size.
       */

      /**
       * The validity message shown when the value is greater than the maximum
       *
       * Also available via the `validity-message-max` slot
       */

      /**
       * The validity message shown when the value is less than the minimum
       *
       * Also available via the `validity-message-min` slot
       */

      /**
       * Handles incrementing the value in the input
       */
      function stepUp() {
        this._input.stepUp();
      }
      /**
       * Handles decrementing the value in the input
       */

    }, {
      kind: "method",
      key: "stepDown",
      value: function stepDown() {
        this._input.stepDown();
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
          _handleInput: handleInput,
          _handleUserInitiatedStepDown: handleUserInitiatedStepDown,
          _handleUserInitiatedStepUp: handleUserInitiatedStepUp
        } = this;
        const invalidIcon = WarningFilled16({
          class: `${prefix}--number__invalid`
        });

        const validity = this._testValidity();

        const isGenericallyInvalid = () => this.invalid && validity !== NUMBER_INPUT_VALIDATION_STATUS.EXCEEDED_MAXIMUM && validity !== NUMBER_INPUT_VALIDATION_STATUS.EXCEEDED_MINIMUM;

        const wrapperClasses = classMap({
          [`${prefix}--number`]: true,
          [`${prefix}--number--${this.colorScheme}`]: this.colorScheme,
          [`${prefix}--number--mobile`]: this.mobile,
          [`${prefix}--number--${this.size}`]: this.size
        });
        const labelClasses = classMap({
          [`${prefix}--label`]: true,
          [`${prefix}--label--disabled`]: this.disabled
        });
        const helperTextClasses = classMap({
          [`${prefix}--form__helper-text`]: true,
          [`${prefix}--form__helper-text--disabled`]: this.disabled
        });
        const incrementButton = html(_t || (_t = _2` <button class="${0}--number__control-btn up-icon" aria-label="${0}" aria-live="polite" aria-atomic="true" type="button" ?disabled="${0}" @click="${0}"> ${0} </button> `), prefix, this.incrementButtonAssistiveText, this.disabled, handleUserInitiatedStepUp, CaretUp16());
        const decrementButton = html(_t2 || (_t2 = _2` <button class="${0}--number__control-btn down-icon" aria-label="${0}" aria-live="polite" aria-atomic="true" type="button" ?disabled="${0}" @click="${0}"> ${0} </button> `), prefix, this.decrementButtonAssistiveText, this.disabled, handleUserInitiatedStepDown, CaretDown16());
        const input = html(_t3 || (_t3 = _2` <input ?autocomplete="${0}" ?autofocus="${0}" ?data-invalid="${0}" ?disabled="${0}" id="input" name="${0}" pattern="${0}" placeholder="${0}" ?readonly="${0}" ?required="${0}" type="number" .value="${0}" @input="${0}" min="${0}" max="${0}" step="${0}" role="alert" aria-atomic="true"> `), this.autocomplete, this.autofocus, this.invalid, this.disabled, ifNonEmpty(this.name), ifNonEmpty(this.pattern), ifNonEmpty(this.placeholder), this.readonly, this.required, this._value, handleInput, ifNonEmpty(this.min), ifNonEmpty(this.max), ifNonEmpty(this.step));
        const defaultLayout = html(_t4 || (_t4 = _2` ${0} ${0} <div class="${0}--number__controls">${0} ${0}</div> `), this.invalid ? invalidIcon : null, input, prefix, incrementButton, decrementButton);
        const mobileLayout = html(_t5 || (_t5 = _2` ${0} ${0} ${0} `), decrementButton, input, incrementButton);
        return html(_t6 || (_t6 = _2` <div class="${0}" ?data-invalid="${0}"> <label class="${0}" for="input"> <slot name="label-text"> ${0} </slot> </label> <div class="${0}--number__input-wrapper">${0}</div> <div class="${0}"> <slot name="helper-text"> ${0} </slot> </div> <div class="${0}--form-requirement" ?hidden="${0}"> <slot name="validity-message"> ${0} </slot> </div> <div class="${0}--form-requirement" ?hidden="${0}"> <slot name="validity-message-max"> ${0} </slot> </div> <div class="${0}--form-requirement" ?hidden="${0}"> <slot name="validity-message-min"> ${0} </slot> </div> </div> `), wrapperClasses, this.invalid, labelClasses, this.labelText, prefix, this.mobile ? mobileLayout : defaultLayout, helperTextClasses, this.helperText, prefix, !isGenericallyInvalid(), this.validityMessage, prefix, validity !== NUMBER_INPUT_VALIDATION_STATUS.EXCEEDED_MAXIMUM, this.validityMessageMax, prefix, validity !== NUMBER_INPUT_VALIDATION_STATUS.EXCEEDED_MINIMUM, this.validityMessageMin);
      }
      /**
       * The name of the custom event fired after the value is changed upon a user gesture.
       */

    }, {
      kind: "get",
      static: true,
      key: "eventInput",
      value: function eventInput() {
        return `${prefix}-number-input`;
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
}, BXInput);

export { BXNumberInput as default };
//# sourceMappingURL=number-input.js.map

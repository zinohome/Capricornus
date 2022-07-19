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
import { classMap } from 'lit-html/directives/class-map';
import { html, property, customElement, LitElement } from 'lit-element';
import settings from 'carbon-components/es/globals/js/settings';
import ifNonNull from '../../globals/directives/if-non-null';
import FocusMixin from '../../globals/mixins/focus';
import { SLIDER_INPUT_COLOR_SCHEME } from './defs';
import styles from "././slider.css.js";
export { SLIDER_INPUT_COLOR_SCHEME };
const {
  prefix
} = settings;
/**
 * The `<input>` box for slider.
 * @element bx-slider-input
 * @fires bx-slider-input-changed - The custom event fired after the value is changed by user gesture.
 */

let BXSliderInput = _decorate([customElement(`${prefix}-slider-input`)], function (_initialize, _FocusMixin) {
  class BXSliderInput extends _FocusMixin {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXSliderInput,
    d: [{
      kind: "field",
      key: "_max",

      value() {
        return '100';
      }

    }, {
      kind: "field",
      key: "_min",

      value() {
        return '0';
      }

    }, {
      kind: "field",
      key: "_step",

      value() {
        return '1';
      }

    }, {
      kind: "method",
      key: "_handleChange",
      value:
      /**
       * The internal value of `max` property.
       */

      /**
       * The internal value of `min` property.
       */

      /**
       * The internal value of `step` property.
       */

      /**
       * Handles `change` event to fire a normalized custom event.
       */
      function _handleChange({
        target
      }) {
        this.dispatchEvent(new CustomEvent(this.constructor.eventChange, {
          bubbles: true,
          composed: true,
          detail: {
            value: Number(target.value)
          }
        }));
      }
      /**
       * Handles `input` event to fire a normalized custom event.
       */

    }, {
      kind: "method",
      key: "_handleInput",
      value: function _handleInput({
        target
      }) {
        this.dispatchEvent(new CustomEvent(this.constructor.eventChange, {
          bubbles: true,
          composed: true,
          detail: {
            value: Number(target.value),
            intermediate: true
          }
        }));
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
        return SLIDER_INPUT_COLOR_SCHEME.REGULAR;
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
      kind: "get",
      decorators: [property({
        type: Number,
        reflect: true
      })],
      key: "max",
      value:
      /**
       * `true` if the check box should be disabled.
       */

      /**
       * The maximum value.
       */
      function max() {
        return this._max.toString();
      }
    }, {
      kind: "set",
      key: "max",
      value: function max(value) {
        const {
          max: oldMax
        } = this;
        this._max = value;
        this.requestUpdate('max', oldMax);
      }
      /**
       * The minimum value.
       */

    }, {
      kind: "get",
      decorators: [property({
        type: Number,
        reflect: true
      })],
      key: "min",
      value: function min() {
        return this._min.toString();
      }
    }, {
      kind: "set",
      key: "min",
      value: function min(value) {
        const {
          min: oldMin
        } = this;
        this._min = value;
        this.requestUpdate('min', oldMin);
      }
      /**
       * The snapping step of the value.
       */

    }, {
      kind: "get",
      decorators: [property({
        type: Number,
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
        const {
          step: oldStep
        } = this;
        this._step = value;
        this.requestUpdate('step', oldStep);
      }
      /**
       * The type of the `<input>`.
       */

    }, {
      kind: "field",
      decorators: [property()],
      key: "type",

      value() {
        return 'number';
      }

    }, {
      kind: "field",
      decorators: [property({
        type: Number
      })],
      key: "value",
      value: void 0
    }, {
      kind: "method",
      key: "createRenderRoot",
      value:
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
        const {
          colorScheme,
          disabled,
          max,
          min,
          step,
          type,
          value,
          _handleChange: handleChange,
          _handleInput: handleInput
        } = this; // NOTE: Our React variant has an option to add `invalid` option here,
        // but there doesn't seem a corresponding style to the thumb.
        // Because of that, in addition to the mininum/maximum constraint enforced,
        // the code here start without `invalid` styling option for now.

        const classes = classMap({
          [`${prefix}--text-input`]: true,
          [`${prefix}--slider-text-input`]: true,
          [`${prefix}--text-input--${colorScheme}`]: colorScheme
        });
        return html(_t || (_t = _` <input ?disabled="${0}" type="${0}" class="${0}" max="${0}" min="${0}" step="${0}" .value="${0}" @change="${0}" @input="${0}"> `), disabled, ifNonNull(type), classes, max, min, step, value, handleChange, handleInput);
      }
      /**
       * A selector that will return the parent slider.
       */

    }, {
      kind: "get",
      static: true,
      key: "selectorParent",
      value: function selectorParent() {
        return `${prefix}-slider`;
      }
      /**
       * The name of the custom event fired after the value is changed by user gesture.
       */

    }, {
      kind: "get",
      static: true,
      key: "eventChange",
      value: function eventChange() {
        return `${prefix}-slider-input-changed`;
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
}, FocusMixin(LitElement));

export default BXSliderInput;
//# sourceMappingURL=slider-input.js.map

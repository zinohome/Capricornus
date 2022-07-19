import _decorate from "@babel/runtime/helpers/esm/decorate";

let _ = t => t,
    _t,
    _t2;

/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { classMap } from 'lit-html/directives/class-map';
import { html, property, customElement } from 'lit-element';
import settings from 'carbon-components/es/globals/js/settings';
import ifNonNull from '../../globals/directives/if-non-null';
import BXCheckbox from '../checkbox/checkbox';
import { TOGGLE_SIZE } from './defs';
import styles from "././toggle.css.js";
export { TOGGLE_SIZE };
const {
  prefix
} = settings;
/**
 * Basic toggle.
 * @element bx-toggle
 * @slot label-text - The label text.
 * @slot checked-text - The text for the checked state.
 * @slot unchecked-text - The text for the unchecked state.
 * @fires bx-toggle-changed - The custom event fired after this changebox changes its checked state.
 */

let BXToggle = _decorate([customElement(`${prefix}-toggle`)], function (_initialize, _BXCheckbox) {
  class BXToggle extends _BXCheckbox {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXToggle,
    d: [{
      kind: "method",
      key: "_renderCheckmark",
      value: function _renderCheckmark() {
        if (this.size !== TOGGLE_SIZE.SMALL) {
          return undefined;
        }

        return html(_t || (_t = _` <svg class="${0}--toggle__check" width="6px" height="5px" viewBox="0 0 6 5"> <path d="M2.2 2.7L5 0 6 1 2.2 5 0 2.7 1 1.5z"/> </svg> `), prefix);
      }
      /**
       * The text for the checked state.
       */

    }, {
      kind: "field",
      decorators: [property({
        attribute: 'checked-text'
      })],
      key: "checkedText",

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
        return TOGGLE_SIZE.REGULAR;
      }

    }, {
      kind: "field",
      decorators: [property({
        attribute: 'unchecked-text'
      })],
      key: "uncheckedText",

      value() {
        return '';
      }

    }, {
      kind: "method",
      key: "render",
      value:
      /**
       * Toggle size.
       */

      /**
       * The text for the unchecked state.
       */
      function render() {
        const {
          checked,
          checkedText,
          disabled,
          labelText,
          name,
          size,
          uncheckedText,
          value,
          _handleChange: handleChange
        } = this;
        const inputClasses = classMap({
          [`${prefix}--toggle-input`]: true,
          [`${prefix}--toggle-input--${size}`]: size
        });
        return html(_t2 || (_t2 = _` <input id="checkbox" type="checkbox" class="${0}" aria-checked="${0}" .checked="${0}" ?disabled="${0}" name="${0}" value="${0}" @change="${0}"> <label for="checkbox" class="${0}--toggle-input__label"> <slot name="label-text">${0}</slot> <span class="${0}--toggle__switch"> ${0} <span class="${0}--toggle__text--off" aria-hidden="true"> <slot name="unchecked-text">${0}</slot> </span> <span class="${0}--toggle__text--on" aria-hidden="true"> <slot name="checked-text">${0}</slot> </span> </span> </label> `), inputClasses, String(Boolean(checked)), checked, disabled, ifNonNull(name), ifNonNull(value), handleChange, prefix, labelText, prefix, this._renderCheckmark(), prefix, uncheckedText, prefix, checkedText);
      }
      /**
       * The name of the custom event fired after this changebox changes its checked state.
       */

    }, {
      kind: "get",
      static: true,
      key: "eventChange",
      value: function eventChange() {
        return `${prefix}-toggle-changed`;
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
}, BXCheckbox);

export default BXToggle;
//# sourceMappingURL=toggle.js.map

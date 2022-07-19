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
import { html, property, query, customElement, LitElement } from 'lit-element';
import settings from 'carbon-components/es/globals/js/settings';
import ifNonNull from '../../globals/directives/if-non-null';
import FocusMixin from '../../globals/mixins/focus';
import FormMixin from '../../globals/mixins/form';
import styles from "././checkbox.css.js";
const {
  prefix
} = settings;
/**
 * Check box.
 * @element bx-checkbox
 * @fires bx-checkbox-changed - The custom event fired after this changebox changes its checked state.
 * @csspart input The checkbox.
 * @csspart label The label.
 */

let BXCheckbox = _decorate([customElement(`${prefix}-checkbox`)], function (_initialize, _FocusMixin) {
  class BXCheckbox extends _FocusMixin {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXCheckbox,
    d: [{
      kind: "field",
      decorators: [query('input')],
      key: "_checkboxNode",
      value: void 0
    }, {
      kind: "method",
      key: "_handleChange",
      value:
      /**
       * Handles `click` event on the `<input>` in the shadow DOM.
       */
      function _handleChange() {
        const {
          checked,
          indeterminate
        } = this._checkboxNode;
        this.checked = checked;
        this.indeterminate = indeterminate;
        const {
          eventChange
        } = this.constructor;
        this.dispatchEvent(new CustomEvent(eventChange, {
          bubbles: true,
          composed: true,
          detail: {
            indeterminate
          }
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
          checked,
          disabled,
          name,
          value = 'on'
        } = this;

        if (!disabled && checked) {
          formData.append(name, value);
        }
      }
      /**
       * `true` if the check box should be checked.
       */

    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "checked",

      value() {
        return false;
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
      key: "indeterminate",

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
      value: void 0
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
       * `true` if the check box should be disabled.
       */

      /**
       * `true` if the label should be hidden.
       */

      /**
       * `true` if the check box should show its UI of the indeterminate state.
       */

      /**
       * The label text.
       */

      /**
       * The form name.
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
        const {
          checked,
          disabled,
          hideLabel,
          indeterminate,
          labelText,
          name,
          value,
          _handleChange: handleChange
        } = this;
        const labelClasses = classMap({
          [`${prefix}--checkbox-label`]: true,
          [`${prefix}--visually-hidden`]: hideLabel
        });
        return html(_t || (_t = _` <input id="checkbox" type="checkbox" part="input" class="${0}" aria-checked="${0}" .checked="${0}" ?disabled="${0}" .indeterminate="${0}" name="${0}" value="${0}" @change="${0}"> <label for="checkbox" part="label" class="${0}"> <span class="${0}--checkbox-label-text"><slot>${0}</slot></span> </label> `), `${prefix}--checkbox`, indeterminate ? 'mixed' : String(Boolean(checked)), checked, disabled, indeterminate, ifNonNull(name), ifNonNull(value), handleChange, labelClasses, prefix, labelText);
      }
      /**
       * The name of the custom event fired after this changebox changes its checked state.
       */

    }, {
      kind: "get",
      static: true,
      key: "eventChange",
      value: function eventChange() {
        return `${prefix}-checkbox-changed`;
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
}, FocusMixin(FormMixin(LitElement)));

export default BXCheckbox;
//# sourceMappingURL=checkbox.js.map

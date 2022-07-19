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
import { html, property, customElement, LitElement } from 'lit-element';
import settings from 'carbon-components/es/globals/js/settings';
import FormMixin from '../../globals/mixins/form';
import HostListenerMixin from '../../globals/mixins/host-listener';
import HostListener from '../../globals/decorators/host-listener';
import { find, forEach } from '../../globals/internal/collection-helpers';
import { RADIO_BUTTON_LABEL_POSITION, RADIO_BUTTON_ORIENTATION } from './defs';
import styles from "././radio-button.css.js";
export { RADIO_BUTTON_ORIENTATION };
const {
  prefix
} = settings;
/**
 * Radio button group.
 * @element bx-radio-button-group
 * @fires bx-radio-button-group-changed - The custom event fired after this radio button group changes its selected item.
 */

let BXRadioButtonGroup = _decorate([customElement(`${prefix}-radio-button-group`)], function (_initialize, _FormMixin) {
  class BXRadioButtonGroup extends _FormMixin {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXRadioButtonGroup,
    d: [{
      kind: "field",
      decorators: [HostListener('eventChangeRadioButton')],
      key: "_handleAfterChangeRadioButton",

      value() {
        return () => {
          const {
            selectorRadioButton
          } = this.constructor;
          const selected = find(this.querySelectorAll(selectorRadioButton), elem => elem.checked);
          const oldValue = this.value;
          this.value = selected && selected.value;

          if (oldValue !== this.value) {
            const {
              eventChange
            } = this.constructor;
            this.dispatchEvent(new CustomEvent(eventChange, {
              bubbles: true,
              composed: true,
              detail: {
                value: this.value
              }
            }));
          }
        };
      }

    }, {
      kind: "method",
      key: "_handleFormdata",
      value:
      /**
       * Handles user-initiated change in selected radio button.
       */
      function _handleFormdata(event) {
        const {
          formData
        } = event; // TODO: Wait for `FormDataEvent` being available in `lib.dom.d.ts`

        const {
          disabled,
          name,
          value
        } = this;

        if (!disabled && typeof name !== 'undefined' && typeof value !== 'undefined') {
          formData.append(name, value);
        }
      }
      /**
       * `true` if the check box should be disabled.
       */

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
        reflect: true,
        attribute: 'label-position'
      })],
      key: "labelPosition",

      value() {
        return RADIO_BUTTON_LABEL_POSITION.RIGHT;
      }

    }, {
      kind: "field",
      decorators: [property()],
      key: "name",
      value: void 0
    }, {
      kind: "field",
      decorators: [property({
        reflect: true
      })],
      key: "orientation",

      value() {
        return RADIO_BUTTON_ORIENTATION.HORIZONTAL;
      }

    }, {
      kind: "field",
      decorators: [property()],
      key: "value",
      value: void 0
    }, {
      kind: "method",
      key: "updated",
      value:
      /**
       * The label position.
       */

      /**
       * The `name` attribute for the `<input>` for selection.
       */

      /**
       * The orientation to lay out radio buttons.
       */

      /**
       * The `value` attribute for the `<input>` for selection.
       */
      function updated(changedProperties) {
        const {
          selectorRadioButton
        } = this.constructor;
        ['disabled', 'labelPosition', 'orientation', 'name'].forEach(name => {
          if (changedProperties.has(name)) {
            const {
              [name]: value
            } = this; // Propagate the property to descendants until `:host-context()` gets supported in all major browsers

            forEach(this.querySelectorAll(selectorRadioButton), elem => {
              elem[name] = value;
            });
          }
        });

        if (changedProperties.has('value')) {
          const {
            value
          } = this;
          forEach(this.querySelectorAll(selectorRadioButton), elem => {
            elem.checked = value === elem.value;
          });
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return html(_t || (_t = _`<slot></slot>`));
      }
      /**
       * A selector that will return the radio buttons.
       */

    }, {
      kind: "get",
      static: true,
      key: "selectorRadioButton",
      value: function selectorRadioButton() {
        return `${prefix}-radio-button`;
      }
      /**
       * The name of the custom event fired after this radio button group changes its selected item.
       */

    }, {
      kind: "get",
      static: true,
      key: "eventChange",
      value: function eventChange() {
        return `${prefix}-radio-button-group-changed`;
      }
      /**
       * The name of the custom event fired after a radio button changes its checked state.
       */

    }, {
      kind: "get",
      static: true,
      key: "eventChangeRadioButton",
      value: function eventChangeRadioButton() {
        return `${prefix}-radio-button-changed`;
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
}, FormMixin(HostListenerMixin(LitElement)));

export default BXRadioButtonGroup;
//# sourceMappingURL=radio-button-group.js.map

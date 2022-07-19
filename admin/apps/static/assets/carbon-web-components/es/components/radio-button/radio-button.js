import _decorate from "@babel/runtime/helpers/esm/decorate";
import _get from "@babel/runtime/helpers/esm/get";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

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
import HostListener from '../../globals/decorators/host-listener';
import FocusMixin from '../../globals/mixins/focus';
import HostListenerMixin from '../../globals/mixins/host-listener';
import RadioGroupManager, { NAVIGATION_DIRECTION } from '../../globals/internal/radio-group-manager';
import { RADIO_BUTTON_LABEL_POSITION, RADIO_BUTTON_ORIENTATION } from './defs';
import styles from "././radio-button.css.js";
export { RADIO_BUTTON_LABEL_POSITION };
const {
  prefix
} = settings;
/**
 * Map of navigation direction by key for horizontal alignment.
 */

const navigationDirectionForKeyHorizontal = {
  ArrowLeft: NAVIGATION_DIRECTION.BACKWARD,
  Left: NAVIGATION_DIRECTION.BACKWARD,
  // IE
  ArrowRight: NAVIGATION_DIRECTION.FORWARD,
  Right: NAVIGATION_DIRECTION.FORWARD // IE

};
/**
 * Map of navigation direction by key for vertical alignment.
 */

const navigationDirectionForKeyVertical = {
  ArrowUp: NAVIGATION_DIRECTION.BACKWARD,
  Up: NAVIGATION_DIRECTION.BACKWARD,
  // IE
  ArrowDown: NAVIGATION_DIRECTION.FORWARD,
  Down: NAVIGATION_DIRECTION.FORWARD // IE

};
/**
 * The interface for `RadioGroupManager` for radio button.
 */

class RadioButtonDelegate {
  /**
   * The radio button to target.
   */
  constructor(radio) {
    this._radio = radio;
  }

  get checked() {
    return this._radio.checked;
  }

  set checked(checked) {
    const {
      host
    } = this._radio.getRootNode();

    const {
      eventChange
    } = host.constructor; // eslint-disable-line no-use-before-define

    host.checked = checked;
    this._radio.tabIndex = checked ? 0 : -1;
    host.dispatchEvent(new CustomEvent(eventChange, {
      bubbles: true,
      composed: true,
      detail: {
        checked
      }
    }));
  }

  get tabIndex() {
    return this._radio.tabIndex;
  }

  set tabIndex(tabIndex) {
    this._radio.tabIndex = tabIndex;
  }

  get name() {
    return this._radio.name;
  }

  compareDocumentPosition(other) {
    return this._radio.compareDocumentPosition(other._radio);
  }

  focus() {
    this._radio.focus();
  }

}
/**
 * Radio button.
 * @element bx-radio-button
 * @fires bx-radio-button-changed - The custom event fired after this radio button changes its checked state.
 */


let BXRadioButton = _decorate([customElement(`${prefix}-radio-button`)], function (_initialize, _HostListenerMixin) {
  class BXRadioButton extends _HostListenerMixin {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXRadioButton,
    d: [{
      kind: "field",
      key: "_manager",

      value() {
        return null;
      }

    }, {
      kind: "field",
      decorators: [query('#input')],
      key: "_inputNode",
      value: void 0
    }, {
      kind: "field",
      decorators: [HostListener('click')],
      key: "_handleClick",

      value() {
        return () => {
          const {
            disabled,
            _radioButtonDelegate: radioButtonDelegate
          } = this;

          if (radioButtonDelegate && !disabled) {
            this.checked = true;

            if (this._manager) {
              this._manager.select(radioButtonDelegate);
            }
          }
        };
      }

    }, {
      kind: "field",
      decorators: [HostListener('keydown')],
      key: "_handleKeydown",

      value() {
        return event => {
          const {
            orientation,
            _radioButtonDelegate: radioButtonDelegate
          } = this;
          const manager = this._manager;

          if (radioButtonDelegate && manager) {
            const navigationDirectionForKey = orientation === RADIO_BUTTON_ORIENTATION.HORIZONTAL ? navigationDirectionForKeyHorizontal : navigationDirectionForKeyVertical;
            const navigationDirection = navigationDirectionForKey[event.key];

            if (navigationDirection) {
              manager.select(manager.navigate(radioButtonDelegate, navigationDirection));
            }

            if (event.key === ' ' || event.key === 'Enter') {
              manager.select(radioButtonDelegate);
            }
          }
        };
      }

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
        reflect: true,
        attribute: 'label-position'
      })],
      key: "labelPosition",

      value() {
        return RADIO_BUTTON_LABEL_POSITION.RIGHT;
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
      key: "createRenderRoot",
      value:
      /**
       * The radio group manager associated with the radio button.
       */

      /**
       * The hidden radio button.
       */

      /**
       * Handles `click` event on this element.
       */

      /**
       * Handles `keydown` event on this element.
       */

      /**
       * `true` if this radio button should be checked.
       */

      /**
       * `true` if the check box should be disabled.
       */

      /**
       * `true` if the label should be hidden.
       */

      /**
       * The label position.
       */

      /**
       * The label text.
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
      function createRenderRoot() {
        var _$exec;

        return this.attachShadow({
          mode: 'open',
          delegatesFocus: Number(((_$exec = /Safari\/(\d+)/.exec(navigator.userAgent)) !== null && _$exec !== void 0 ? _$exec : ['', 0])[1]) <= 537
        });
      }
    }, {
      kind: "method",
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        if (this._manager) {
          this._manager.delete(this._radioButtonDelegate);
        }

        _get(_getPrototypeOf(BXRadioButton.prototype), "disconnectedCallback", this).call(this);
      }
    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated() {
        this._radioButtonDelegate = new RadioButtonDelegate(this._inputNode);
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProperties) {
        const {
          _inputNode: inputNode,
          _radioButtonDelegate: radioButtonDelegate,
          name
        } = this;

        if (changedProperties.has('checked') || changedProperties.has('name')) {
          if (!this._manager) {
            this._manager = RadioGroupManager.get(this.getRootNode({
              composed: true
            }));
          }

          const {
            _manager: manager
          } = this;

          if (changedProperties.has('name')) {
            manager.delete(radioButtonDelegate, changedProperties.get('name'));

            if (name) {
              manager.add(radioButtonDelegate);
            }
          }

          inputNode.setAttribute('tabindex', !name || !manager || !manager.shouldBeFocusable(radioButtonDelegate) ? '-1' : '0');
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const {
          checked,
          hideLabel,
          labelText,
          name,
          value,
          disabled
        } = this;
        const innerLabelClasses = classMap({
          [`${prefix}--visually-hidden`]: hideLabel
        });
        return html(_t || (_t = _` <input id="input" type="radio" class="${0}--radio-button" .checked="${0}" ?disabled="${0}" name="${0}" value="${0}"> <label for="input" class="${0}--radio-button__label"> <span class="${0}--radio-button__appearance"></span> <span class="${0}"><slot>${0}</slot></span> </label> `), prefix, checked, disabled, ifNonNull(name), ifNonNull(value), prefix, prefix, innerLabelClasses, labelText);
      }
      /**
       * The name of the custom event fired after this radio button changes its checked state.
       */

    }, {
      kind: "get",
      static: true,
      key: "eventChange",
      value: function eventChange() {
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
}, HostListenerMixin(FocusMixin(LitElement)));

export default BXRadioButton;
//# sourceMappingURL=radio-button.js.map

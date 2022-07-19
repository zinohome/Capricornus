import _decorate from "@babel/runtime/helpers/esm/decorate";
import _get from "@babel/runtime/helpers/esm/get";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

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
import settings from 'carbon-components/es/globals/js/settings';
import { ifDefined } from 'lit-html/directives/if-defined';
import { html, property, query, customElement, LitElement } from 'lit-element';
import CheckmarkFilled16 from "../../icons/checkmark--filled/16";
import HostListener from '../../globals/decorators/host-listener';
import HostListenerMixin from '../../globals/mixins/host-listener';
import RadioGroupManager, { NAVIGATION_DIRECTION } from '../../globals/internal/radio-group-manager';
import styles from "././structured-list.css.js";
const {
  prefix
} = settings;
/**
 * Map of navigation direction by key.
 */

const navigationDirectionForKey = {
  ArrowUp: NAVIGATION_DIRECTION.BACKWARD,
  Up: NAVIGATION_DIRECTION.BACKWARD,
  // IE
  ArrowDown: NAVIGATION_DIRECTION.FORWARD,
  Down: NAVIGATION_DIRECTION.FORWARD // IE

};
/**
 * The interface for `RadioGroupManager` for structured list row.
 */

class StructuredListRowRadioButtonDelegate {
  /**
   * The structured list row to target.
   */
  constructor(row) {
    this._row = row;
  }

  get checked() {
    return this._row.selected;
  }

  set checked(checked) {
    this._row.selected = checked;
    this._row.tabIndex = checked ? 0 : -1;
  }

  get tabIndex() {
    return this._row.tabIndex;
  }

  set tabIndex(tabIndex) {
    this._row.tabIndex = tabIndex;
  }

  get name() {
    return this._row.selectionName;
  }

  compareDocumentPosition(other) {
    return this._row.compareDocumentPosition(other._row);
  }

  focus() {
    this._row.focus();
  }

}
/**
 * Structured list row.
 * @element bx-structured-list-row
 */


let BXStructuredListRow = _decorate([customElement(`${prefix}-structured-list-row`)], function (_initialize, _HostListenerMixin) {
  class BXStructuredListRow extends _HostListenerMixin {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXStructuredListRow,
    d: [{
      kind: "field",
      key: "_manager",

      value() {
        return null;
      }

    }, {
      kind: "field",
      key: "_radioButtonDelegate",

      value() {
        return new StructuredListRowRadioButtonDelegate(this);
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
            _inputNode: inputNode
          } = this;

          if (inputNode) {
            this.selected = true;

            if (this._manager) {
              this._manager.select(this._radioButtonDelegate);
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
            _inputNode: inputNode
          } = this;
          const manager = this._manager;

          if (inputNode && manager) {
            const navigationDirection = navigationDirectionForKey[event.key];

            if (navigationDirection) {
              manager.select(manager.navigate(this._radioButtonDelegate, navigationDirection));
            }

            if (event.key === ' ' || event.key === 'Enter') {
              manager.select(this._radioButtonDelegate);
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
      key: "selected",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [property({
        attribute: 'selection-name'
      })],
      key: "selectionName",

      value() {
        return '';
      }

    }, {
      kind: "field",
      decorators: [property({
        attribute: 'selection-value'
      })],
      key: "selectionValue",

      value() {
        return '';
      }

    }, {
      kind: "field",
      decorators: [property({
        attribute: 'selection-icon-title'
      })],
      key: "selectionIconTitle",

      value() {
        return '';
      }

    }, {
      kind: "method",
      key: "connectedCallback",
      value:
      /**
       * The radio group manager associated with the radio button.
       */

      /**
       * The interface for `RadioGroupManager` for structured list row.
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
       * `true` if this structured list row should be selectable and selected.
       */

      /**
       * The `name` attribute for the `<input>` for selection.
       * If present, this structured list row will be a selectable one.
       */

      /**
       * The `value` attribute for the `<input>` for selection.
       */

      /**
       * The content to put into the `<title>` attribute of the selection icon.
       */
      function connectedCallback() {
        if (!this.hasAttribute('role')) {
          this.setAttribute('role', 'row');
        }

        _get(_getPrototypeOf(BXStructuredListRow.prototype), "connectedCallback", this).call(this);

        if (!this._manager) {
          this._manager = RadioGroupManager.get(this.getRootNode({
            composed: true
          }));
          const {
            selectionName
          } = this;

          if (selectionName) {
            var _this$_manager;

            (_this$_manager = this._manager) === null || _this$_manager === void 0 ? void 0 : _this$_manager.add(this._radioButtonDelegate);
          }
        }
      }
    }, {
      kind: "method",
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        if (this._manager) {
          this._manager.delete(this._radioButtonDelegate);
        }

        _get(_getPrototypeOf(BXStructuredListRow.prototype), "disconnectedCallback", this).call(this);
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProperties) {
        const {
          _manager: manager,
          selectionName
        } = this;

        if (changedProperties.has('selectionName')) {
          if (manager) {
            manager.delete(this._radioButtonDelegate, changedProperties.get('selectionName'));

            if (selectionName) {
              manager.add(this._radioButtonDelegate);
            }
          }

          this.setAttribute('tabindex', !selectionName || !manager || !manager.shouldBeFocusable(this._radioButtonDelegate) ? '-1' : '0');
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const {
          selected,
          selectionName,
          selectionValue,
          selectionIconTitle
        } = this;

        if (selectionName) {
          // "Selected" style with `.bx--structured-list-td` does not work somehow - Need investigation
          return html(_t || (_t = _` <slot></slot> <input id="input" type="radio" class="${0}--structured-list-input" .checked="${0}" name="${0}" value="${0}"> <div class="${0}--structured-list-td ${0}--structured-list-cell"> ${0} </div> `), prefix, selected, selectionName, ifDefined(selectionValue), prefix, prefix, CheckmarkFilled16({
            class: `${prefix}--structured-list-svg`,
            title: selectionIconTitle
          }));
        }

        return html(_t2 || (_t2 = _`<slot></slot>`));
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
}, HostListenerMixin(LitElement));

export default BXStructuredListRow;
//# sourceMappingURL=structured-list-row.js.map

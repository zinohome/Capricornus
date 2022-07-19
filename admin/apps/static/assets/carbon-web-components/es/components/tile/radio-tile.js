import _decorate from "@babel/runtime/helpers/esm/decorate";
import _get from "@babel/runtime/helpers/esm/get";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import settings from 'carbon-components/es/globals/js/settings';
import { customElement } from 'lit-element';
import HostListener from '../../globals/decorators/host-listener';
import HostListenerMixin from '../../globals/mixins/host-listener';
import RadioGroupManager, { NAVIGATION_DIRECTION } from '../../globals/internal/radio-group-manager';
import SelectableTile from './selectable-tile';
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
 * Single-selectable tile.
 * @element bx-radio-tile
 */

let BXRadioTile = _decorate([customElement(`${prefix}-radio-tile`)], function (_initialize, _HostListenerMixin) {
  class BXRadioTile extends _HostListenerMixin {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXRadioTile,
    d: [{
      kind: "field",
      key: "_inputType",

      value() {
        return 'radio';
      }

    }, {
      kind: "method",
      key: "_attachManager",
      value:
      /**
       * The radio group manager associated with the radio button.
       */

      /**
       * The `type` attribute of the `<input>`.
       */

      /**
       * Attaches the radio button to the radio group manager.
       */
      function _attachManager() {
        if (!this._manager) {
          this._manager = RadioGroupManager.get(this.getRootNode({
            composed: true
          }));
        }

        const {
          name,
          _inputNode: inputNode,
          _manager: manager
        } = this;

        if (inputNode && name) {
          manager.add(inputNode);
        }
      }
      /**
       * Detaches the radio button to the radio group manager.
       */

    }, {
      kind: "method",
      key: "_detachManager",
      value: function _detachManager() {
        const {
          _inputNode: inputNode,
          _manager: manager
        } = this;

        if (inputNode && manager) {
          manager.delete(inputNode);
        }
      }
      /**
       * Handles `keydown` event on this element.
       */

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
              manager.select(manager.navigate(inputNode, navigationDirection));
              event.preventDefault(); // Prevent default (scrolling) behavior
            }

            if (event.key === ' ' || event.key === 'Enter') {
              manager.select(inputNode);
            }
          }
        };
      }

    }, {
      kind: "method",
      key: "_handleChange",
      value:
      /**
       * Handles `change` event on the `<input>` in the shadow DOM.
       */
      function _handleChange() {
        _get(_getPrototypeOf(BXRadioTile.prototype), "_handleChange", this).call(this);

        if (this._manager) {
          this._manager.select(this._inputNode);
        }
      }
    }, {
      kind: "method",
      key: "connectedCallback",
      value: function connectedCallback() {
        _get(_getPrototypeOf(BXRadioTile.prototype), "connectedCallback", this).call(this);

        this._attachManager();
      }
    }, {
      kind: "method",
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        this._detachManager();

        _get(_getPrototypeOf(BXRadioTile.prototype), "disconnectedCallback", this).call(this);
      }
    }, {
      kind: "method",
      key: "shouldUpdate",
      value: function shouldUpdate(changedProperties) {
        if (changedProperties.has('name')) {
          this._detachManager();
        }

        return true;
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProperties) {
        if (changedProperties.has('name')) {
          this._attachManager();
        }
      }
    }]
  };
}, HostListenerMixin(SelectableTile));

export default BXRadioTile;
//# sourceMappingURL=radio-tile.js.map

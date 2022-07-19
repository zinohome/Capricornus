import _decorate from "@babel/runtime/helpers/esm/decorate";
import _get from "@babel/runtime/helpers/esm/get";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

let _ = t => t,
    _t;

/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import settings from 'carbon-components/es/globals/js/settings';
import { html, property, query, customElement, LitElement } from 'lit-element';
import Information16 from "../../icons/information/16";
import HostListener from '../../globals/decorators/host-listener';
import HostListenerMixin from '../../globals/mixins/host-listener';
import { find } from '../../globals/internal/collection-helpers';
import styles from "././tooltip.css.js";
const {
  prefix
} = settings;
/**
 * Trigger button of tooltip.
 * @element bx-tooltip
 */

let BXTooltip = _decorate([customElement(`${prefix}-tooltip`)], function (_initialize, _HostListenerMixin) {
  class BXTooltip extends _HostListenerMixin {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXTooltip,
    d: [{
      kind: "field",
      key: "_menuBody",

      value() {
        return null;
      }

    }, {
      kind: "field",
      decorators: [query('#trigger')],
      key: "_triggerNode",
      value: void 0
    }, {
      kind: "field",
      decorators: [HostListener('click')],
      key: "_handleClick",

      value() {
        return async () => {
          this.open = !this.open;
          const {
            open,
            updateComplete
          } = this;

          if (open) {
            await updateComplete;
            const {
              _menuBody: menuBody
            } = this;
            menuBody === null || menuBody === void 0 ? void 0 : menuBody.focus();
          }
        };
      }

    }, {
      kind: "field",
      decorators: [HostListener('keydown')],
      key: "_handleKeydown",

      value() {
        return async event => {
          if (event.key === ' ' || event.key === 'Enter') {
            this._handleClick();
          }
        };
      }

    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "open",

      value() {
        return false;
      }

    }, {
      kind: "get",
      key: "triggerPosition",
      value:
      /**
       * The menu body.
       */

      /**
       * The trigger button.
       */

      /**
       * Handles `click` event on this element.
       */

      /**
       * Handles `keydown` event on this element.
       */

      /**
       * `true` if the dropdown should be open.
       */

      /**
       * @returns The position of the trigger button in the viewport.
       */
      function triggerPosition() {
        const {
          _triggerNode: triggerNode
        } = this;

        if (!triggerNode) {
          throw new TypeError('Cannot find the trigger button.');
        }

        return triggerNode.getBoundingClientRect();
      }
    }, {
      kind: "method",
      key: "connectedCallback",
      value: function connectedCallback() {
        if (!this.hasAttribute('role')) {
          this.setAttribute('role', 'button');
        }

        if (!this.hasAttribute('tabindex')) {
          // TODO: Should we use a property?
          this.setAttribute('tabindex', '0');
        }

        if (!this.hasAttribute('aria-haspopup')) {
          this.setAttribute('aria-haspopup', 'true');
        }

        if (!this.hasAttribute('aria-expanded')) {
          this.setAttribute('aria-expanded', 'false');
        }

        if (!this.shadowRoot) {
          this.attachShadow({
            mode: 'open'
          });
        }

        _get(_getPrototypeOf(BXTooltip.prototype), "connectedCallback", this).call(this);
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProperties) {
        if (changedProperties.has('open')) {
          if (!this._menuBody) {
            this._menuBody = find(this.childNodes, elem => elem.constructor.FLOATING_MENU);
          }

          if (this._menuBody) {
            this._menuBody.open = this.open;
          }

          this.setAttribute('aria-expanded', String(Boolean(this.open)));
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return html(_t || (_t = _` ${0} <slot></slot> `), Information16({
          id: 'trigger'
        }));
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

export default BXTooltip;
//# sourceMappingURL=tooltip.js.map

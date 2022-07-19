import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
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
import { html, property, customElement } from 'lit-element';
import HostListener from '../../globals/decorators/host-listener';
import BXFloatingMenu, { FLOATING_MENU_ALIGNMENT, FLOATING_MENU_DIRECTION, FLOATING_MENU_POSITION_DIRECTION } from '../floating-menu/floating-menu';
import styles from "././tooltip.css.js";
const {
  prefix
} = settings;
/**
 * Tooltip body.
 */

let BXTooltipBody = _decorate([customElement(`${prefix}-tooltip-body`)], function (_initialize, _BXFloatingMenu) {
  class BXTooltipBody extends _BXFloatingMenu {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXTooltipBody,
    d: [{
      kind: "field",
      decorators: [property()],
      key: "alignment",

      value() {
        return FLOATING_MENU_ALIGNMENT.CENTER;
      }

    }, {
      kind: "field",
      decorators: [property()],
      key: "direction",

      value() {
        return FLOATING_MENU_DIRECTION.BOTTOM;
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
      kind: "field",
      decorators: [HostListener('keydown')],
      key: "_handleKeydown",

      value() {
        return async event => {
          if (event.key === 'Escape') {
            this.open = false;
          }
        };
      }

    }, {
      kind: "get",
      key: "position",
      value:
      /**
       * How the menu is aligned to the trigger button.
       */

      /**
       * The menu direction.
       */

      /**
       * `true` if the dropdown should be open.
       */

      /**
       * Handles `keydown` event on this element.
       */

      /**
       * The position of this tooltip body.
       */
      function position() {
        const {
          direction
        } = this;

        const position = _get(_getPrototypeOf(BXTooltipBody.prototype), "position", this);

        const {
          direction: positionDirection,
          start,
          top
        } = position;

        if (direction === FLOATING_MENU_DIRECTION.LEFT) {
          const style = this.ownerDocument.defaultView.getComputedStyle(this);
          const margin = Number((/^([\d-.]+)px$/.exec(style.getPropertyValue(positionDirection !== FLOATING_MENU_POSITION_DIRECTION.RTL ? 'margin-right' : 'margin-left')) || [])[1]);

          if (!isNaN(margin)) {
            // For direction === DIRECTION_RIGHT, the left/top margin the caret size effectively adjusts the position,
            // but for direction === DIRECTION_LEFT such thing won't happen
            return _objectSpread(_objectSpread({}, position), {}, {
              start: start - margin
            });
          }
        }

        if (direction === FLOATING_MENU_DIRECTION.TOP) {
          const style = this.ownerDocument.defaultView.getComputedStyle(this);
          const margin = Number((/^([\d-.]+)px$/.exec(style.getPropertyValue('margin-bottom')) || [])[1]);

          if (!isNaN(margin)) {
            // For direction === DIRECTION_BOTTOM, the left/top margin the caret size effectively adjusts the position,
            // but for direction === DIRECTION_TOP such thing won't happen
            return _objectSpread(_objectSpread({}, position), {}, {
              top: top - margin
            });
          }
        }

        return position;
      }
    }, {
      kind: "method",
      key: "connectedCallback",
      value: function connectedCallback() {
        if (!this.hasAttribute('role')) {
          this.setAttribute('role', 'menu');
        }

        if (!this.hasAttribute('tabindex')) {
          // TODO: Should we use a property?
          this.setAttribute('tabindex', '-1');
        }

        _get(_getPrototypeOf(BXTooltipBody.prototype), "connectedCallback", this).call(this);
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return html(_t || (_t = _` <span class="${0}--tooltip__caret"></span> <div class="${0}--tooltip__content"><slot></slot></div> `), prefix, prefix);
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
}, BXFloatingMenu);

export default BXTooltipBody;
//# sourceMappingURL=tooltip-body.js.map

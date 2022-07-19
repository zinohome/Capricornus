import _decorate from "@babel/runtime/helpers/esm/decorate";

let _ = t => t,
    _t;

/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { classMap } from 'lit-html/directives/class-map';
import { html, property, customElement, LitElement } from 'lit-element';
import settings from 'carbon-components/es/globals/js/settings';
import FocusMixin from '../../globals/mixins/focus';
import { TOOLTIP_ALIGNMENT, TOOLTIP_DIRECTION } from './defs';
import styles from "././tooltip.css.js";
export { TOOLTIP_ALIGNMENT, TOOLTIP_DIRECTION };
const {
  prefix
} = settings;
/**
 * Definition tooltip.
 * @element bx-tooltip-definition
 * @slot body - The tooltip body content.
 */

let BXTooltipDefinition = _decorate([customElement(`${prefix}-tooltip-definition`)], function (_initialize, _FocusMixin) {
  class BXTooltipDefinition extends _FocusMixin {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXTooltipDefinition,
    d: [{
      kind: "field",
      decorators: [property()],
      key: "alignment",

      value() {
        return TOOLTIP_ALIGNMENT.CENTER;
      }

    }, {
      kind: "field",
      decorators: [property({
        attribute: 'body-text'
      })],
      key: "bodyText",

      value() {
        return '';
      }

    }, {
      kind: "field",
      decorators: [property()],
      key: "direction",

      value() {
        return TOOLTIP_DIRECTION.BOTTOM;
      }

    }, {
      kind: "method",
      key: "createRenderRoot",
      value:
      /**
       * How the tooltip is aligned to the trigger button.
       */

      /**
       * The text for the tooltip body.
       */

      /**
       * The tooltip direction.
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
          alignment,
          bodyText,
          direction
        } = this;
        const classes = classMap({
          [`${prefix}--tooltip__trigger`]: true,
          [`${prefix}--tooltip--a11y`]: true,
          [`${prefix}--tooltip__trigger--definition`]: true,
          [`${prefix}--tooltip--${direction}`]: direction,
          [`${prefix}--tooltip--align-${alignment}`]: alignment
        });
        return html(_t || (_t = _` <button class="${0}" aria-describedby="tooltip-body"> <slot></slot> </button> <div class="${0}--assistive-text" id="tooltip-body" role="tooltip"> <slot name="body">${0}</slot> </div> `), classes, prefix, bodyText);
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

export default BXTooltipDefinition;
//# sourceMappingURL=tooltip-definition.js.map

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
import { html, customElement } from 'lit-element';
import settings from 'carbon-components/es/globals/js/settings';
import BXTooltipDefintion from './tooltip-definition';
const {
  prefix
} = settings;
/**
 * Icon tooltip.
 * @element bx-tooltip-icon
 * @slot body - The tooltip body content.
 */

let BXTooltipIcon = _decorate([customElement(`${prefix}-tooltip-icon`)], function (_initialize, _BXTooltipDefintion) {
  class BXTooltipIcon extends _BXTooltipDefintion {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXTooltipIcon,
    d: [{
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
          [`${prefix}--tooltip--${direction}`]: direction,
          [`${prefix}--tooltip--align-${alignment}`]: alignment
        });
        return html(_t || (_t = _` <button class="${0}" aria-describedby="tooltip-body"> <span class="${0}--assistive-text" id="tooltip-body" role="tooltip"> <slot name="body">${0}</slot> </span> <slot></slot> </button> `), classes, prefix, bodyText);
      }
    }]
  };
}, BXTooltipDefintion);

export default BXTooltipIcon;
//# sourceMappingURL=tooltip-icon.js.map

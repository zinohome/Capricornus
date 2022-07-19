import _decorate from "@babel/runtime/helpers/esm/decorate";
import _get from "@babel/runtime/helpers/esm/get";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

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
import { html, property, customElement } from 'lit-element';
import settings from 'carbon-components/es/globals/js/settings';
import BXContentSwitcherItem from '../content-switcher/content-switcher-item';
import { TABS_TYPE } from './tabs';
import styles from "././tabs.css.js";
const {
  prefix
} = settings;
/**
 * Basic tab.
 * @element bx-tab
 */

let BXTab = _decorate([customElement(`${prefix}-tab`)], function (_initialize, _BXContentSwitcherIte) {
  class BXTab extends _BXContentSwitcherIte {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXTab,
    d: [{
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "highlighted",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true,
        attribute: 'in-focus'
      })],
      key: "inFocus",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [property({
        reflect: true
      })],
      key: "type",

      value() {
        return TABS_TYPE.REGULAR;
      }

    }, {
      kind: "method",
      key: "connectedCallback",
      value:
      /**
       * `true` if this tab should be highlighted.
       * If `true`, parent `<bx-tabs>` selects/deselects this tab upon keyboard interaction.
       * @private
       */

      /**
       * `true` if this tab is in a focused `<bx-tabs>`.
       * @private
       */

      /**
       * Tab type.
       */
      function connectedCallback() {
        if (!this.hasAttribute('role')) {
          this.setAttribute('role', 'listitem');
        }

        _get(_getPrototypeOf(BXTab.prototype), "connectedCallback", this).call(this);
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const {
          disabled,
          selected
        } = this; // No `href`/`tabindex` to not to make this `<a>` click-focusable

        return html(_t || (_t = _` <a class="${0}--tabs__nav-link" role="tab" ?disabled="${0}" aria-selected="${0}"> <slot></slot> </a> `), prefix, disabled, Boolean(selected));
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
}, BXContentSwitcherItem);

export default BXTab;
//# sourceMappingURL=tab.js.map

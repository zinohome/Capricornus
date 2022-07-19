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
import { html, property, customElement, LitElement } from 'lit-element';
import settings from 'carbon-components/es/globals/js/settings';
import ifNonNull from '../../globals/directives/if-non-null';
import FocusMixin from '../../globals/mixins/focus';
import styles from "././content-switcher.css.js";
const {
  prefix
} = settings;
/**
 * Content switcher button.
 * @element bx-content-switcher-item
 */

let BXContentSwitcherItem = _decorate([customElement(`${prefix}-content-switcher-item`)], function (_initialize, _FocusMixin) {
  class BXContentSwitcherItem extends _FocusMixin {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXContentSwitcherItem,
    d: [{
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
        attribute: 'hide-divider'
      })],
      key: "hideDivider",

      value() {
        return false;
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
      decorators: [property()],
      key: "target",
      value: void 0
    }, {
      kind: "field",
      decorators: [property()],
      key: "value",

      value() {
        return '';
      }

    }, {
      kind: "method",
      key: "createRenderRoot",
      value:
      /**
       * `true` if this content switcher item should be disabled.
       */

      /**
       * `true` to hide the divider at the left.
       * @private
       */

      /**
       * `true` if the content switcher button should be selected.
       * @private
       */

      /**
       * The element ID of target panel.
       */

      /**
       * The `value` attribute that is set to the parent `<bx-content-switcher>` when this content switcher item is selected.
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
      key: "shouldUpdate",
      value: function shouldUpdate(changedProperties) {
        if (changedProperties.has('selected') || changedProperties.has('target')) {
          const {
            selected,
            target
          } = this;

          if (target) {
            const doc = this.getRootNode(); // `doc` can be an element if such element is orphaned

            const targetNode = doc.getElementById && doc.getElementById(target);

            if (targetNode) {
              targetNode.toggleAttribute('hidden', !selected);
            }
          }
        }

        return true;
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const {
          disabled,
          selected,
          target
        } = this;
        const className = classMap({
          [`${prefix}--content-switcher-btn`]: true,
          [`${prefix}--content-switcher--selected`]: selected
        });
        return html(_t || (_t = _` <button type="button" role="tab" class="${0}" ?disabled="${0}" tabindex="${0}" aria-controls="${0}" aria-selected="${0}"> <span class="${0}--content-switcher__label"><slot></slot></span> </button> `), className, disabled, selected ? '0' : '-1', ifNonNull(target), Boolean(selected), prefix);
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

export default BXContentSwitcherItem;
//# sourceMappingURL=content-switcher-item.js.map

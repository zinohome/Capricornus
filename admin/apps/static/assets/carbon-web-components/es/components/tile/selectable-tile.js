import _decorate from "@babel/runtime/helpers/esm/decorate";

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
import { classMap } from 'lit-html/directives/class-map';
import { html, svg, property, query, customElement, LitElement } from 'lit-element';
import CheckmarkFilled16 from "../../icons/checkmark--filled/16";
import ifNonNull from '../../globals/directives/if-non-null';
import FocusMixin from '../../globals/mixins/focus';
import { TILE_COLOR_SCHEME } from './defs';
import styles from "././tile.css.js";
const {
  prefix
} = settings;
/**
 * Multi-selectable tile.
 * @element bx-selectable-tile
 */

let BXSelectableTile = _decorate([customElement(`${prefix}-selectable-tile`)], function (_initialize, _FocusMixin) {
  class BXSelectableTile extends _FocusMixin {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXSelectableTile,
    d: [{
      kind: "field",
      decorators: [query('input')],
      key: "_inputNode",
      value: void 0
    }, {
      kind: "field",
      key: "_inputType",

      value() {
        return 'checkbox';
      }

    }, {
      kind: "method",
      key: "_handleChange",
      value:
      /**
       * The `type` attribute of the `<input>`.
       */

      /**
       * Handles `change` event on the `<input>` in the shadow DOM.
       */
      function _handleChange() {
        this.selected = this._inputNode.checked;
      }
      /**
       * The a11y text for the checkmark icon of the selected state.
       */

    }, {
      kind: "field",
      decorators: [property({
        attribute: 'checkmark-label'
      })],
      key: "checkmarkLabel",
      value: void 0
    }, {
      kind: "field",
      decorators: [property({
        attribute: 'color-scheme',
        reflect: true
      })],
      key: "colorScheme",

      value() {
        return TILE_COLOR_SCHEME.REGULAR;
      }

    }, {
      kind: "field",
      decorators: [property()],
      key: "name",
      value: void 0
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
      key: "value",
      value: void 0
    }, {
      kind: "method",
      key: "createRenderRoot",
      value:
      /**
       * The color scheme.
       */

      /**
       * The form name.
       */

      /**
       * `true` to show the selected state.
       */

      /**
       * The form value.
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
          checkmarkLabel,
          colorScheme,
          name,
          selected,
          value,
          _inputType: inputType,
          _handleChange: handleChange
        } = this;
        const classes = classMap({
          [`${prefix}--tile`]: true,
          [`${prefix}--tile--selectable`]: true,
          [`${prefix}--tile--${colorScheme}`]: colorScheme
        });
        return html(_t || (_t = _` <input type="${0}" id="input" class="${0}--tile-input" tabindex="-1" name="${0}" value="${0}" .checked="${0}" @change="${0}"> <label for="input" class="${0}" tabindex="0"> <div class="${0}--tile__checkmark"> ${0} </div> <div class="${0}--tile-content"><slot></slot></div> </label> `), inputType, prefix, ifNonNull(name), ifNonNull(value), selected, handleChange, classes, prefix, CheckmarkFilled16({
          children: !checkmarkLabel ? undefined : svg(_t2 || (_t2 = _`<title>${0}</title>`), checkmarkLabel)
        }), prefix);
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

export default BXSelectableTile;
//# sourceMappingURL=selectable-tile.js.map

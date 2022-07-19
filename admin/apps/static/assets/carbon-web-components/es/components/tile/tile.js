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
import settings from 'carbon-components/es/globals/js/settings';
import { html, property, customElement, LitElement } from 'lit-element';
import { TILE_COLOR_SCHEME } from './defs';
import styles from "././tile.css.js";
export { TILE_COLOR_SCHEME };
const {
  prefix
} = settings;
/**
 * Basic tile.
 * @element bx-tile
 */

let BXTile = _decorate([customElement(`${prefix}-tile`)], function (_initialize, _LitElement) {
  class BXTile extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXTile,
    d: [{
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
      kind: "method",
      key: "render",
      value:
      /**
       * The color scheme.
       */
      function render() {
        return html(_t || (_t = _`<slot></slot>`));
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
}, LitElement);

export default BXTile;
//# sourceMappingURL=tile.js.map

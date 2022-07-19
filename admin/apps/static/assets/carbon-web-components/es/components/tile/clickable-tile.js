import _decorate from "@babel/runtime/helpers/esm/decorate";

/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import settings from 'carbon-components/es/globals/js/settings';
import { classMap } from 'lit-html/directives/class-map';
import { property, customElement } from 'lit-element';
import BXLink from '../link/link';
import { TILE_COLOR_SCHEME } from './defs';
import styles from "././tile.css.js";
const {
  prefix
} = settings;
/**
 * Clickable tile.
 * @element bx-clickable-tile
 */

let BXClickableTile = _decorate([customElement(`${prefix}-clickable-tile`)], function (_initialize, _BXLink) {
  class BXClickableTile extends _BXLink {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXClickableTile,
    d: [{
      kind: "get",
      key: "_classes",
      value: function _classes() {
        const {
          colorScheme,
          disabled
        } = this;
        return classMap({
          [`${prefix}--link`]: true,
          [`${prefix}--link--disabled`]: disabled,
          [`${prefix}--tile`]: true,
          [`${prefix}--tile--clickable`]: true,
          [`${prefix}--tile--${colorScheme}`]: colorScheme
        });
      }
      /**
       * The color scheme.
       */

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
      decorators: [property({
        attribute: 'link-role'
      })],
      key: "linkRole",

      value() {
        return 'button';
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
}, BXLink);

export default BXClickableTile;
//# sourceMappingURL=clickable-tile.js.map

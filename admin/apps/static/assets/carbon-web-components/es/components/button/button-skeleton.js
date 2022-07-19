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
import { html, customElement } from 'lit-element';
import ifNonNull from '../../globals/directives/if-non-null';
import BXButton from './button';
import styles from "././button.css.js";
const {
  prefix
} = settings;
/**
 * Button skeleton.
 */

let BXButtonSkeleton = _decorate([customElement(`${prefix}-btn-skeleton`)], function (_initialize, _BXButton) {
  class BXButtonSkeleton extends _BXButton {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXButtonSkeleton,
    d: [{
      kind: "method",
      key: "_handleClickLinkSkeleton",
      value:
      /**
       * Handles `click` event on the `<a>.
       * @param event The event.
       */
      function _handleClickLinkSkeleton(event) {
        if (this.disabled) {
          event.preventDefault(); // Stop following the link

          event.stopPropagation(); // Stop firing `onClick`
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const {
          autofocus,
          disabled,
          download,
          href,
          hreflang,
          ping,
          rel,
          size,
          target,
          type
        } = this;
        const classes = classMap({
          [`${prefix}--btn`]: true,
          [`${prefix}--skeleton`]: true,
          [`${prefix}--btn--${size}`]: size
        });
        return href ? html(_t || (_t = _` <a id="button" role="button" class="${0}" download="${0}" href="${0}" hreflang="${0}" ping="${0}" rel="${0}" target="${0}" type="${0}" @click="${0}"></a> `), classes, ifNonNull(download), ifNonNull(href), ifNonNull(hreflang), ifNonNull(ping), ifNonNull(rel), ifNonNull(target), ifNonNull(type), this._handleClickLinkSkeleton) : html(_t2 || (_t2 = _` <button id="button" class="${0}" ?autofocus="${0}" ?disabled="${0}" type="${0}"></button> `), classes, autofocus, disabled, ifNonNull(type));
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
}, BXButton);

export default BXButtonSkeleton;
//# sourceMappingURL=button-skeleton.js.map

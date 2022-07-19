import _decorate from "@babel/runtime/helpers/esm/decorate";
import _get from "@babel/runtime/helpers/esm/get";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

let _ = t => t,
    _t,
    _t2,
    _t3;

/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { html, property, customElement, LitElement } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import CheckmarkFilled16 from "../../icons/checkmark--filled/16";
import ErrorFilled16 from "../../icons/error--filled/16";
import settings from 'carbon-components/es/globals/js/settings';
import LOADING_TYPE from '../loading/types';
import getLoadingIcon from '../loading/loading-icon';
import { INLINE_LOADING_STATE } from './defs';
import styles from "././inline-loading.css.js";
export { INLINE_LOADING_STATE };
const {
  prefix
} = settings;
/**
 * Lnline loading spinner.
 * @element bx-inline-loading
 */

let BXInlineLoading = _decorate([customElement(`${prefix}-inline-loading`)], function (_initialize, _LitElement) {
  class BXInlineLoading extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXInlineLoading,
    d: [{
      kind: "method",
      key: "_renderIcon",
      value:
      /**
       * @returns The template for the status icon.
       */
      function _renderIcon() {
        const {
          status
        } = this;

        if (status === INLINE_LOADING_STATE.ERROR) {
          return ErrorFilled16({
            class: `${prefix}--inline-loading--error`
          });
        }

        if (status === INLINE_LOADING_STATE.FINISHED) {
          return CheckmarkFilled16({
            class: `${prefix}--inline-loading__checkmark-container ${prefix}--inline-loading__svg`
          });
        }

        if (status === INLINE_LOADING_STATE.INACTIVE || status === INLINE_LOADING_STATE.ACTIVE) {
          const classes = classMap({
            [`${prefix}--loading`]: true,
            [`${prefix}--loading--small`]: true,
            [`${prefix}--loading--stop`]: status === INLINE_LOADING_STATE.INACTIVE
          });
          return html(_t || (_t = _` <div class="${0}">${0}</div> `), classes, getLoadingIcon({
            type: LOADING_TYPE.SMALL
          }));
        }

        return undefined;
      }
      /**
       * The loading status.
       */

    }, {
      kind: "field",
      decorators: [property({
        reflect: true
      })],
      key: "status",

      value() {
        return INLINE_LOADING_STATE.ACTIVE;
      }

    }, {
      kind: "method",
      key: "connectedCallback",
      value: function connectedCallback() {
        if (!this.hasAttribute('aria-live')) {
          this.setAttribute('aria-live', 'assertive');
        }

        _get(_getPrototypeOf(BXInlineLoading.prototype), "connectedCallback", this).call(this);
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const statusIconResult = this._renderIcon();

        const statusIconWrapperResult = !statusIconResult ? undefined : html(_t2 || (_t2 = _` <div class="${0}--inline-loading__animation">${0}</div> `), prefix, statusIconResult);
        return html(_t3 || (_t3 = _` ${0} <p class="${0}--inline-loading__text"><slot></slot></p> `), statusIconWrapperResult, prefix);
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

export default BXInlineLoading;
//# sourceMappingURL=inline-loading.js.map

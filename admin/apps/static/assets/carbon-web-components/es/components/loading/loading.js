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
import { classMap } from 'lit-html/directives/class-map';
import { html, property, customElement, LitElement } from 'lit-element';
import { LOADING_TYPE } from './defs';
import getLoadingIcon from './loading-icon';
import styles from "././loading.css.js";
const {
  prefix
} = settings;
/**
 * Spinner indicating loading state.
 * @element bx-loading
 */

let BXLoading = _decorate([customElement(`${prefix}-loading`)], function (_initialize, _LitElement) {
  class BXLoading extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXLoading,
    d: [{
      kind: "field",
      decorators: [property({
        attribute: 'assistive-text'
      })],
      key: "assistiveText",

      value() {
        return 'Loading';
      }

    }, {
      kind: "field",
      decorators: [property()],
      key: "type",

      value() {
        return LOADING_TYPE.REGULAR;
      }

    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "inactive",

      value() {
        return false;
      }

    }, {
      kind: "method",
      key: "render",
      value:
      /**
       * The assistive text for the spinner icon.
       */

      /**
       * Spinner type.
       */

      /**
       * `true` if spinner should stop.
       */
      function render() {
        const {
          inactive,
          assistiveText,
          type
        } = this;
        const innerClasses = classMap({
          [`${prefix}--loading`]: true,
          [`${prefix}--loading--stop`]: inactive
        });
        const icon = getLoadingIcon({
          assistiveText,
          type
        });
        return type !== LOADING_TYPE.OVERLAY ? icon : html(_t || (_t = _` <div class="${0}">${0}</div> `), innerClasses, icon);
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

export { LOADING_TYPE };
export default BXLoading;
//# sourceMappingURL=loading.js.map

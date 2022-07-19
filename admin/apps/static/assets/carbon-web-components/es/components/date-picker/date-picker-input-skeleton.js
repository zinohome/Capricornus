import _decorate from "@babel/runtime/helpers/esm/decorate";

let _ = t => t,
    _t;

/**
 * @license
 *
 * Copyright IBM Corp. 2019
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { html, property, customElement, LitElement } from 'lit-element';
import settings from 'carbon-components/es/globals/js/settings';
import { DATE_PICKER_INPUT_KIND } from './date-picker-input';
import styles from "././date-picker.css.js";
const {
  prefix
} = settings;
/**
 * Skeleton version of the input box for date picker.
 */

let BXDatePickerInputSkeleton = _decorate([customElement(`${prefix}-date-picker-input-skeleton`)], function (_initialize, _LitElement) {
  class BXDatePickerInputSkeleton extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXDatePickerInputSkeleton,
    d: [{
      kind: "field",
      decorators: [property({
        reflect: true
      })],
      key: "kind",

      value() {
        return DATE_PICKER_INPUT_KIND.SIMPLE;
      }

    }, {
      kind: "method",
      key: "render",
      value:
      /**
       * Date picker input kind. Corresponds to the attribute with the same name.
       */
      function render() {
        return html(_t || (_t = _` <span class="${0}--label"></span> <div class="${0}--date-picker__input ${0}--skeleton"></div> `), prefix, prefix, prefix);
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

export default BXDatePickerInputSkeleton;
//# sourceMappingURL=date-picker-input-skeleton.js.map

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
import { html, customElement } from 'lit-element';
import settings from 'carbon-components/es/globals/js/settings';
import BXUnorderedList from './unordered-list';
const {
  prefix
} = settings;
/**
 * Ordered list.
 */

let BXOrderedList = _decorate([customElement(`${prefix}-ordered-list`)], function (_initialize, _BXUnorderedList) {
  class BXOrderedList extends _BXUnorderedList {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXOrderedList,
    d: [{
      kind: "method",
      key: "render",
      value: function render() {
        const classes = classMap({
          [`${prefix}--list--ordered`]: true,
          [`${prefix}--list--nested`]: this.getAttribute('slot') === 'nested',
          [`${prefix}--list--expressive`]: this.isExpressive
        });
        return html(_t || (_t = _` <ol class="${0}"> <slot></slot> </ol> `), classes);
      }
    }]
  };
}, BXUnorderedList);

export default BXOrderedList;
//# sourceMappingURL=ordered-list.js.map

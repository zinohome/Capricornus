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
import { customElement } from 'lit-element';
import BXHeaderNavItem from './header-nav-item';
const {
  prefix
} = settings;
/**
 * Header submenu item.
 * @element bx-header-menu-item
 */

let BXHeaderMenuItem = _decorate([customElement(`${prefix}-header-menu-item`)], function (_initialize, _BXHeaderNavItem) {
  class BXHeaderMenuItem extends _BXHeaderNavItem {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXHeaderMenuItem,
    d: []
  };
}, BXHeaderNavItem);

export default BXHeaderMenuItem;
//# sourceMappingURL=header-menu-item.js.map

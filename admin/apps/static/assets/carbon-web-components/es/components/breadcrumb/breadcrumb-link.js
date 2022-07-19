import _decorate from "@babel/runtime/helpers/esm/decorate";

/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { customElement } from 'lit-element';
import settings from 'carbon-components/es/globals/js/settings';
import BXLink from '../link/link';
import styles from "././breadcrumb.css.js";
const {
  prefix
} = settings;
/**
 * Link in breadcrumb.
 * @element bx-breadcrumb-link
 */

let BXBreadcrumbLink = _decorate([customElement(`${prefix}-breadcrumb-link`)], function (_initialize, _BXLink) {
  class BXBreadcrumbLink extends _BXLink {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXBreadcrumbLink,
    d: [{
      kind: "field",
      static: true,
      key: "styles",

      value() {
        return styles;
      }

    }]
  };
}, BXLink);

export default BXBreadcrumbLink;
//# sourceMappingURL=breadcrumb-link.js.map

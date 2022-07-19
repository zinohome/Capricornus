/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { svg } from 'lit-html';
import spread from '../../globals/directives/spread';
const svgResultCarbonIcon = ({ children, ...attrs } = {}) =>
  svg`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${spread(
    attrs
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M12 6L8 6 8 2 6 2 6 6 2 6 2 8 6 8 6 12 8 12 8 8 12 8 12 6zM30 10V4H24V6H16V8h8v2h2V24H24v2H10V24H8V16H6v8H4v6h6V28H24v2h6V24H28V10zM8 28H6V26H8zm20 0H26V26h2zM26 6h2V8H26z"></path></svg>`;
export default svgResultCarbonIcon;

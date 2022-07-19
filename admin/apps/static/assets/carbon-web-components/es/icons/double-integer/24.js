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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M17 8V6H13V2H11V6H8V2H6V6H2V8H6v3H2v2H6v4H8V13h3v4h2V13h4V11H13V8zm-6 3H8V8h3zM30 21V19H26V15H24v4H21V15H19v4H15v2h4v3H15v2h4v4h2V26h3v4h2V26h4V24H26V21zm-6 3H21V21h3z"></path></svg>`;
export default svgResultCarbonIcon;

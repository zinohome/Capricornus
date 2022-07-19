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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M17,13V6H8V22H24V13ZM10,8h5v5H10Zm0,7h5v5H10Zm12,5H17V15h5Z"></path><path d="M28 11H19V2h9zM21 9h5V4H21zM28 20H26v2h2v6H4V22H6V20H4a2.0024 2.0024 0 00-2 2v6a2.0024 2.0024 0 002 2H28a2.0024 2.0024 0 002-2V22A2.0024 2.0024 0 0028 20z"></path><circle cx="7" cy="25" r="1"></circle></svg>`;
export default svgResultCarbonIcon;

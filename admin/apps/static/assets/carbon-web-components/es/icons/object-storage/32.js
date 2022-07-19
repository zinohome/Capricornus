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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M28,20H26v2h2v6H4V22H14V20H4a2.0023,2.0023,0,0,0-2,2v6a2.0023,2.0023,0,0,0,2,2H28a2.0023,2.0023,0,0,0,2-2V22A2.0023,2.0023,0,0,0,28,20Z"></path><circle cx="7" cy="25" r="1"></circle><path d="M30 8H22v6H16v8h8V16h6zM22 20H18V16h4zm6-6H24V10h4zM18 10H10V2h8zM12 8h4V4H12z"></path></svg>`;
export default svgResultCarbonIcon;

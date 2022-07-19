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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M13 11H19V13H13zM13 15H19V17H13z"></path><circle cx="16" cy="23" r="2"></circle><path d="M22,7H21V2H19V7H10A2.0023,2.0023,0,0,0,8,9v2H6v2H8v2H6v2H8V28a2.0023,2.0023,0,0,0,2,2H22a2.0023,2.0023,0,0,0,2-2V9A2.0023,2.0023,0,0,0,22,7ZM10,28V9H22V28Z"></path></svg>`;
export default svgResultCarbonIcon;

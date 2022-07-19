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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M22 6H26V10H22z"></path><circle cx="7" cy="7" r="1"></circle><circle cx="25" cy="25" r="1"></circle><circle cx="25" cy="21" r="1"></circle><circle cx="25" cy="17" r="1"></circle><path d="M22,17V15H20V14a2.0023,2.0023,0,0,0-2-2H17V10H15v2H13V10H11v2H10a2.0023,2.0023,0,0,0-2,2v1H6v2H8v2H6v2H8v1a2.0023,2.0023,0,0,0,2,2h1v2h2V24h2v2h2V24h1a2.0023,2.0023,0,0,0,2-2V21h2V19H20V17Zm-4,5H10V14h8Z"></path><path d="M28,30H4a2.0021,2.0021,0,0,1-2-2V4A2.0021,2.0021,0,0,1,4,2H28a2.0021,2.0021,0,0,1,2,2V28A2.0021,2.0021,0,0,1,28,30ZM4,4V28H28V4Z"></path></svg>`;
export default svgResultCarbonIcon;

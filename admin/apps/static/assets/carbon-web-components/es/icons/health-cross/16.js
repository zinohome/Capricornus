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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M19,28H13a2.0023,2.0023,0,0,1-2-2V21H6a2.0023,2.0023,0,0,1-2-2V13a2.002,2.002,0,0,1,2-2h5V6a2.002,2.002,0,0,1,2-2h6a2.0023,2.0023,0,0,1,2,2v5h5a2.0023,2.0023,0,0,1,2,2v6a2.0027,2.0027,0,0,1-2,2H21v5A2.0027,2.0027,0,0,1,19,28ZM6,13v6h7v7h6V19h7V13H19V6H13v7Z"></path></svg>`;
export default svgResultCarbonIcon;

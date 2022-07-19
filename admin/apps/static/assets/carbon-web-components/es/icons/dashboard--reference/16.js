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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M4 20L4 22 8.586 22 2 28.586 3.414 30 10 23.414 10 28 12 28 12 20 4 20zM24 21H26V26H24zM20 16H22V26H20zM16 18H18V26H16z"></path><path d="M28,2H4A2.002,2.002,0,0,0,2,4V16H4V13H28.001l.001,15H16v2H28a2.0027,2.0027,0,0,0,2-2V4A2.0023,2.0023,0,0,0,28,2ZM12,11H4V4h8Zm2,0V4H28l.0007,7Z"></path></svg>`;
export default svgResultCarbonIcon;

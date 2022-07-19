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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M12,23a6,6,0,1,1,6-6A6,6,0,0,1,12,23Zm0-10a4,4,0,1,0,4,4A4,4,0,0,0,12,13Z"></path><path d="M29,27H3a1,1,0,0,1-1-1V6A1,1,0,0,1,3,5H29a1,1,0,0,1,1,1V26A1,1,0,0,1,29,27ZM4,25H28V7H4Z"></path><path d="M19 9H26V11H19z"></path><circle cx="12" cy="17" r="1"></circle></svg>`;
export default svgResultCarbonIcon;

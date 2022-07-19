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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M12,29H5a2.0021,2.0021,0,0,1-2-2V20a2.0021,2.0021,0,0,1,2-2h7a2.0021,2.0021,0,0,1,2,2v7A2.0021,2.0021,0,0,1,12,29ZM5,20v7h7V20Z"></path><path d="M27,3H5A2,2,0,0,0,3,5V15H5V11H15v4h2V11H27v7H17v2H27v7H17v2H27a2,2,0,0,0,2-2V5A2,2,0,0,0,27,3Zm0,6H5V5H27Z"></path></svg>`;
export default svgResultCarbonIcon;

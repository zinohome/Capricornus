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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M27,3H5A2,2,0,0,0,3,5V27a2,2,0,0,0,2,2H27a2,2,0,0,0,2-2V5A2,2,0,0,0,27,3Zm0,2V9H5V5ZM17,11H27v7H17Zm-2,7H5V11H15ZM5,20H15v7H5Zm12,7V20H27v7Z"></path></svg>`;
export default svgResultCarbonIcon;

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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M25.7983,10a10,10,0,0,0-19.62.124A7.4964,7.4964,0,0,0,7.5,25H8V23H7.5a5.4961,5.4961,0,0,1-.377-10.9795l.8365-.0571.09-.8335A7.9934,7.9934,0,0,1,23.7368,10Z"></path><path d="M28,12H18a2.0023,2.0023,0,0,0-2,2v4H12a2.0023,2.0023,0,0,0-2,2V30H30V14A2.0023,2.0023,0,0,0,28,12ZM12,28V20h4v8Zm16,0H18V14H28Z"></path><path d="M20 16H22V20H20zM24 16H26V20H24zM20 22H22V26H20zM24 22H26V26H24z"></path></svg>`;
export default svgResultCarbonIcon;

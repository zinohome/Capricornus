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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M15 19H17V28H15z"></path><path d="M23,10V8H20a2.0025,2.0025,0,0,0-2-2H14a2.0025,2.0025,0,0,0-2,2H9v2h3v4.1841A2.9957,2.9957,0,0,0,10,17v7h2V17a1.0008,1.0008,0,0,1,1-1h6a1.0008,1.0008,0,0,1,1,1v7h2V17a2.9957,2.9957,0,0,0-2-2.8159V10ZM18,8v6H14V8Z"></path></svg>`;
export default svgResultCarbonIcon;

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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M22.9141,16.5l2.7929-2.793a.9994.9994,0,0,0,0-1.414L23.4141,10,25.5,7.9141,28.5859,11,30,9.5859,22.4141,2,21,3.4141,24.0859,6.5,22,8.5859,19.707,6.293a.9994.9994,0,0,0-1.414,0L15.5,9.0859,8.707,2.293a.9994.9994,0,0,0-1.414,0l-5,5a.9994.9994,0,0,0,0,1.414L9.0859,15.5,6.293,18.293a.9994.9994,0,0,0,0,1.414L8.5859,22,6.5,24.0859,3.4141,21,2,22.4141,9.5859,30,11,28.5859,7.9141,25.5,10,23.4141l2.293,2.2929a.9995.9995,0,0,0,1.414,0L16.5,22.9141l6.793,6.7929a.9995.9995,0,0,0,1.414,0l5-5a.9994.9994,0,0,0,0-1.414ZM4.4141,8,8,4.4141,10.0859,6.5,6.5,10.0859Zm3.5,3.5L11.5,7.9141,14.0859,10.5,10.5,14.0859ZM13,23.5859,8.4141,19,19,8.4141,23.5859,13ZM17.9141,21.5,21.5,17.9141,24.0859,20.5,20.5,24.0859ZM24,27.5859,21.9141,25.5,25.5,21.9141,27.5859,24Z"></path></svg>`;
export default svgResultCarbonIcon;

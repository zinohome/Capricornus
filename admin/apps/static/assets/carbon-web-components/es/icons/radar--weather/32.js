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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M30,3.4146,28.5854,2,17.2932,13.2925a1,1,0,1,0,1.4141,1.414l3.4543-3.4541a4.9646,4.9646,0,0,1-3.8811,7.7193,7.0485,7.0485,0,0,0-5.1438-3.8731A4.9431,4.9431,0,0,1,18,9V7a6.9551,6.9551,0,0,0-6.9087,8.0791,6.93,6.93,0,0,0-2.8525,1.06A9.97,9.97,0,0,1,18,4V2A11.9756,11.9756,0,0,0,6.573,17.6357a6.9293,6.9293,0,0,0-1.3674,2.7061A4.9948,4.9948,0,0,0,7,30H17a4.9921,4.9921,0,0,0,4.9678-4.68A12.0391,12.0391,0,0,0,30,14a11.8678,11.8678,0,0,0-2.8389-7.7466ZM17,28H7a2.9945,2.9945,0,0,1-.6963-5.9082l.6587-.1572.0986-.67a4.9923,4.9923,0,0,1,9.878,0l.0986.6695.6587.1572A2.9945,2.9945,0,0,1,17,28ZM28,14a10.0346,10.0346,0,0,1-6.3118,9.291,4.9577,4.9577,0,0,0-2.0207-2.5,6.9922,6.9922,0,0,0,3.938-10.9824l2.132-2.1318A9.8873,9.8873,0,0,1,28,14Z"></path></svg>`;
export default svgResultCarbonIcon;

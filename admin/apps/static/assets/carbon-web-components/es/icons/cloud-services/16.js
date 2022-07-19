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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M25.8218,10.124a9.9991,9.9991,0,0,0-19.6435,0A7.4964,7.4964,0,0,0,7.5,25H8V23H7.5a5.4961,5.4961,0,0,1-.3769-10.9795l.8364-.0571.09-.8335a7.9979,7.9979,0,0,1,15.9013,0l.09.8335.8364.0571A5.4961,5.4961,0,0,1,24.5,23H24v2h.5a7.4964,7.4964,0,0,0,1.3218-14.876Z"></path><path d="M23,22V20H20.8989a4.9678,4.9678,0,0,0-.7319-1.7529l1.49-1.49-1.414-1.414-1.49,1.49A4.9678,4.9678,0,0,0,17,16.1011V14H15v2.1011a4.9678,4.9678,0,0,0-1.7529.7319l-1.49-1.49-1.414,1.414,1.49,1.49A4.9678,4.9678,0,0,0,11.1011,20H9v2h2.1011a4.9678,4.9678,0,0,0,.7319,1.7529l-1.49,1.49,1.414,1.414,1.49-1.49A4.9678,4.9678,0,0,0,15,25.8989V28h2V25.8989a4.9678,4.9678,0,0,0,1.7529-.7319l1.49,1.49,1.414-1.414-1.49-1.49A4.9678,4.9678,0,0,0,20.8989,22Zm-7,2a3,3,0,1,1,3-3A3.0033,3.0033,0,0,1,16,24Z"></path></svg>`;
export default svgResultCarbonIcon;

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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M16 6H26V8H16z" transform="rotate(-90 21 7)"></path><path d="M20 6H30V8H20z" transform="rotate(-90 25 7)"></path><path d="M24 6H34V8H24z" transform="rotate(-90 29 7)"></path><path d="M16,20a3.9123,3.9123,0,0,1-4-4,3.9123,3.9123,0,0,1,4-4V10a6,6,0,1,0,6,6H20A3.9123,3.9123,0,0,1,16,20Z"></path><path d="M28.8928,18.4536,26.0979,16,24.78,17.5044l2.7922,2.4517-2.36,4.0878-3.4273-1.1591a9.0315,9.0315,0,0,1-2.7143,1.5644L18.36,28H13.64l-.71-3.5508a9.0953,9.0953,0,0,1-2.6948-1.5713l-3.4468,1.166-2.36-4.0878L7.1528,17.561a8.9263,8.9263,0,0,1-.007-3.1279L4.4275,12.0439,6.7886,7.9561l3.4267,1.1591a9.0305,9.0305,0,0,1,2.7141-1.5644L13.64,4H16V2H13.64a2,2,0,0,0-1.9611,1.6079l-.5037,2.5186A10.9666,10.9666,0,0,0,9.8481,6.88L7.4287,6.0615a1.9977,1.9977,0,0,0-2.3728.8946L2.6953,11.0439a2.0006,2.0006,0,0,0,.4119,2.5025l1.9309,1.6968C5.021,15.4946,5,15.7446,5,16c0,.2578.01.5127.0278.7656l-1.9206,1.688a2.0006,2.0006,0,0,0-.4119,2.5025l2.3606,4.0878a1.9977,1.9977,0,0,0,2.3728.8946l2.4341-.8233a10.9736,10.9736,0,0,0,1.312.7583l.5037,2.5186A2,2,0,0,0,13.64,30H18.36a2,2,0,0,0,1.9611-1.6079l.5037-2.5186a10.9666,10.9666,0,0,0,1.3267-.7534l2.4194.8184a1.9977,1.9977,0,0,0,2.3728-.8946l2.3606-4.0878A2.0006,2.0006,0,0,0,28.8928,18.4536Z"></path></svg>`;
export default svgResultCarbonIcon;

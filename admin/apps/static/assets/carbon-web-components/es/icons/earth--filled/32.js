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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M16,2A14,14,0,1,0,30,16,14.0158,14.0158,0,0,0,16,2ZM4.02,16.394l1.3384.4458L7,19.3027v1.2831a1,1,0,0,0,.2929.7071L10,24v2.3765A11.9941,11.9941,0,0,1,4.02,16.394ZM16,28a11.9682,11.9682,0,0,1-2.5718-.2847L14,26l1.8046-4.5116a1,1,0,0,0-.0964-.9261l-1.4113-2.117A1,1,0,0,0,13.4648,18h-4.93L7.2866,16.1274,9.4141,14H11v2h2V13.2656l3.8682-6.7695-1.7364-.9922L14.2769,7H11.5352l-1.086-1.6289A11.861,11.861,0,0,1,20,4.7V8a1,1,0,0,0,1,1h1.4648a1,1,0,0,0,.8321-.4453l.8769-1.3154A12.0331,12.0331,0,0,1,26.8945,11H22.82a1,1,0,0,0-.9806.8039l-.7221,4.4708a1,1,0,0,0,.54,1.0539L25,19l.6851,4.0557A11.9793,11.9793,0,0,1,16,28Z"></path></svg>`;
export default svgResultCarbonIcon;

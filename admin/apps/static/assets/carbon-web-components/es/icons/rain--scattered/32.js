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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M8.5084,32a1.0127,1.0127,0,0,1-.4485-.1054.9986.9986,0,0,1-.4486-1.3418l1.4934-3.0005a1.0025,1.0025,0,0,1,1.7943.8945l-1.4934,3A1.0013,1.0013,0,0,1,8.5084,32Z"></path><path d="M27.232 15.733H29.232V18.733H27.232z" transform="rotate(-45.009 28.232 17.233)"></path><path d="M29 10H32V12H29z"></path><path d="M26.732 3.768H29.732V5.768H26.732z" transform="rotate(-45 28.232 4.768)"></path><path d="M20 0H22V3H20z"></path><path d="M12.768 3.268H14.768V6.268H12.768z" transform="rotate(-45 13.768 4.768)"></path><path d="M27,11A5.9955,5.9955,0,0,0,15.6335,8.3311,7.3494,7.3494,0,0,0,13.5,8a7.5509,7.5509,0,0,0-7.1492,5.2441A5.9926,5.9926,0,0,0,8,25h7.3818L14.106,27.5527a1,1,0,1,0,1.7885.8946L17.6177,25H19a5.9853,5.9853,0,0,0,5.2163-8.9463A5.9941,5.9941,0,0,0,27,11ZM19,23H8a3.9925,3.9925,0,0,1-.6731-7.9292L7.99,14.958l.1458-.6562a5.496,5.496,0,0,1,10.7294,0l.1458.6562.6626.1128A3.9925,3.9925,0,0,1,19,23Zm3.9268-8.5107a5.96,5.96,0,0,0-2.2776-1.2452,7.5157,7.5157,0,0,0-3.1853-4.0688,3.9869,3.9869,0,1,1,5.4629,5.314Z"></path></svg>`;
export default svgResultCarbonIcon;

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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M23,23h-.1315l.9635-1.4453A1.0008,1.0008,0,0,0,24,21V12.0005c0-9.8858-7.92-10-8-10A1,1,0,0,0,15,3l-.0005,2H14a.9956.9956,0,0,0-.581.1865l-7,5a1,1,0,0,0-.3676,1.13l1,3a.9976.9976,0,0,0,1.09.6733l4.87-.6958L9.1519,20.47a1,1,0,0,0,.0161,1.085L10.1315,23H10a3.0033,3.0033,0,0,0-3,3v4H26V26A3.0033,3.0033,0,0,0,23,23Zm-7.1519-9.47a1,1,0,0,0-.99-1.52l-6.1738.8819-.5025-1.5078L14.32,7.0005H15.999a1,1,0,0,0,1-.9995L17,4.1289C18.5013,4.4636,21.2167,5.67,21.86,10H19v2h3v2H19v2h3v2H19v2h3v.6973L20.4648,23h-7.93L11.19,20.9824ZM24,28H9V26a1.0009,1.0009,0,0,1,1-1H23a1.0006,1.0006,0,0,1,1,1Z"></path></svg>`;
export default svgResultCarbonIcon;

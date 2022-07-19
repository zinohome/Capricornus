/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { svg } from 'lit-html';
import spread from '../../../globals/directives/spread';
const svgResultCarbonIcon = ({ children, ...attrs } = {}) =>
  svg`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${spread(
    attrs
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M8 30H2a2 2 0 01-2-2V14a2 2 0 012-2H8a2 2 0 012 2V28A2 2 0 018 30zM2 14V28H8V14zM20 30H14a2 2 0 01-2-2V14a2 2 0 012-2h6a2 2 0 012 2V28A2 2 0 0120 30zM14 14V28h6V14z"></path><path d="M27,21H25V9H17V7h8a2,2,0,0,1,2,2Z"></path><path d="M32,16H30V4H22V2h8a2,2,0,0,1,2,2Z"></path></svg>`;
export default svgResultCarbonIcon;

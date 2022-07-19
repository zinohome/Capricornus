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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M22.9961,30H9.0039a1.0022,1.0022,0,0,1-.821-1.5769l6.9977-9.9965a1,1,0,0,1,1.6388,0l6.9977,9.9965A1.0022,1.0022,0,0,1,22.9961,30Z"></path><path d="M28,24H24V22h4V6H4V22H8v2H4a2.0021,2.0021,0,0,1-2-2V6A2.0021,2.0021,0,0,1,4,4H28a2.0021,2.0021,0,0,1,2,2V22A2.0021,2.0021,0,0,1,28,24Z"></path></svg>`;
export default svgResultCarbonIcon;

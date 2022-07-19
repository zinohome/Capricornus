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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M32,16.77V13.8372c0-2.4818-2.4817-3.8355-4.5123-3.8355a6.7446,6.7446,0,0,0-3.8354,1.5793,5.066,5.066,0,0,0-3.61-1.5793,5.9389,5.9389,0,0,0-3.8354,1.5793,3.8172,3.8172,0,0,0-3.3842-1.5793A3.4913,3.4913,0,0,0,9.482,11.8232L6.5058,18.575,3.2011,11.0011a1.67,1.67,0,0,0-2.1883-.8656h0A1.67,1.67,0,0,0,.1536,12.37L4.25,21.2824s.6769,1.5793,2.0305,1.5793a1.9088,1.9088,0,0,0,2.0306-1.1281c.3124-.4687,2.6809-5.45,4.1078-8.4692a.5679.5679,0,0,1,1.0812.2437v7.4868a1.8462,1.8462,0,0,0,1.6848,1.8629,1.8051,1.8051,0,0,0,1.9251-1.801V14.8524a1.9177,1.9177,0,0,1,3.8354,0v6.2044a1.8049,1.8049,0,0,0,3.61,0V14.8524a1.9177,1.9177,0,0,1,3.8354,0v6.2044a1.8049,1.8049,0,0,0,3.61,0Z"></path></svg>`;
export default svgResultCarbonIcon;

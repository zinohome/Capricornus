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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M27.5273,2.709A1.9955,1.9955,0,0,0,26,2H23.3091a1.5,1.5,0,0,0-1.3419.8294L21.3818,4H20V3.5A1.5,1.5,0,0,0,18.5,2h-5A1.5,1.5,0,0,0,12,3.5V4H10.6182l-.585-1.17A1.5017,1.5017,0,0,0,8.69,2H6A2,2,0,0,0,4.0283,4.333L4.7324,8.5A3,3,0,0,0,7.69,11H8V23a3.0033,3.0033,0,0,0-3,3v4H27V26a3.0033,3.0033,0,0,0-3-3V11h.31a3,3,0,0,0,2.9579-2.5l.7041-4.167A1.994,1.994,0,0,0,27.5273,2.709ZM25,26v2H7V26a1.0009,1.0009,0,0,1,1-1H24A1.0009,1.0009,0,0,1,25,26Zm-3-3H10V11H22ZM25.2959,8.167A.9976.9976,0,0,1,24.31,9H7.69a.9976.9976,0,0,1-.9863-.8335L6,4H8.3818l1,2H14V4h4V6h4.6172l1.001-2H26Z"></path></svg>`;
export default svgResultCarbonIcon;

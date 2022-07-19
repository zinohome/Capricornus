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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M22,4,20.5859,5.4141,25.1719,10H16.91A5.9965,5.9965,0,1,0,10,16.91V28h2V16.91A6.0061,6.0061,0,0,0,16.91,12h8.2622l-4.586,4.5859L22,18l7-7ZM11,15a4,4,0,1,1,4-4A4.0045,4.0045,0,0,1,11,15Z"></path></svg>`;
export default svgResultCarbonIcon;

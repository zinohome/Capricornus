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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M23.586 13L21 10.414 21 6 23 6 23 9.586 25 11.586 23.586 13z"></path><path d="M22,18a8,8,0,1,1,8-8A8.0092,8.0092,0,0,1,22,18ZM22,4a6,6,0,1,0,6,6A6.0066,6.0066,0,0,0,22,4Z"></path><path d="M8.63,18l7,6H30V22H16.37l-7-6H4V2H2V28a2.0025,2.0025,0,0,0,2,2H30V28H4V18Z"></path></svg>`;
export default svgResultCarbonIcon;

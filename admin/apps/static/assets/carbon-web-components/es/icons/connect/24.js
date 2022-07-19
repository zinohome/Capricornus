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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M23,16a7,7,0,0,0-4.18,1.39L14.6,13.17A6.86,6.86,0,0,0,16,9a7,7,0,1,0-2.81,5.59l4.21,4.22A7,7,0,1,0,23,16ZM4,9a5,5,0,1,1,5,5A5,5,0,0,1,4,9Z" transform="translate(0 .01)"></path></svg>`;
export default svgResultCarbonIcon;

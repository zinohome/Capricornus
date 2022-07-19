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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M20,8H18A5,5,0,0,0,8,8H6A7,7,0,0,1,20,8Z"></path><path d="M25,15a2.94,2.94,0,0,0-1.47.4A3,3,0,0,0,21,14a2.94,2.94,0,0,0-1.47.4A3,3,0,0,0,16,13.18V8h0a3,3,0,0,0-6,0V19.1L7.77,17.58h0A2.93,2.93,0,0,0,6,17a3,3,0,0,0-2.12,5.13l8,7.3A6.16,6.16,0,0,0,16,31h5a7,7,0,0,0,7-7V18A3,3,0,0,0,25,15Zm1,9a5,5,0,0,1-5,5H16a4.17,4.17,0,0,1-2.76-1L5.29,20.7A1,1,0,0,1,5,20a1,1,0,0,1,1.6-.8L12,22.9V8a1,1,0,0,1,2,0h0V19h2V16a1,1,0,0,1,2,0v3h2V17a1,1,0,0,1,2,0v2h2V18a1,1,0,0,1,2,0Z"></path></svg>`;
export default svgResultCarbonIcon;

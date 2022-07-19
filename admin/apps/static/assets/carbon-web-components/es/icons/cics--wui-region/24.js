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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M22 22L24 22 24 28 22 28 22 30 28 30 28 28 26 28 26 22 28 22 28 20 22 20 22 22zM18 28H16V20H14v8.6A1.4529 1.4529 0 0015.5 30h3A1.4529 1.4529 0 0020 28.6V20H18zM10.2 20L10 28.5 9 22 7 22 6 28.5 5.8 20 4 20 4.72 30 7 30 8 23.5 9 30 11.28 30 12 20 10.2 20zM16 11L13 11 13 8 11 8 11 11 8 11 8 13 11 13 11 16 13 16 13 13 16 13 16 11z"></path><path d="M26,4H6A2.0059,2.0059,0,0,0,4,6V18H6V6H26V18h2V6A2.0059,2.0059,0,0,0,26,4Z"></path></svg>`;
export default svgResultCarbonIcon;

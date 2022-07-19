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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<circle cx="23" cy="25" r="1"></circle><path d="M26 22v6H6V22H26m0-2H6a2 2 0 00-2 2v6a2 2 0 002 2H26a2 2 0 002-2V22a2 2 0 00-2-2zM20.59 4.59L17 8.17 17 0 15 0 15 8.17 11.41 4.59 10 6 16 12 22 6 20.59 4.59z"></path><path d="M20.59 10.59L16 15.16 11.41 10.59 10 12 16 18 22 12 20.59 10.59zM8 24H20V26H8z"></path></svg>`;
export default svgResultCarbonIcon;

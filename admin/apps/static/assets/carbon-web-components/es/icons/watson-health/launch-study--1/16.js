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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<circle cx="23" cy="25" r="1"></circle><path d="M26 22v6H6V22H26m0-2H6a2 2 0 00-2 2v6a2 2 0 002 2H26a2 2 0 002-2V22a2 2 0 00-2-2zM20.59 10.59L17 14.17 17 2 15 2 15 14.17 11.41 10.59 10 12 16 18 22 12 20.59 10.59z"></path><path d="M8 24H20V26H8z"></path></svg>`;
export default svgResultCarbonIcon;

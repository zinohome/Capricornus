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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<circle cx="23" cy="7" r="1"></circle><path d="M26 4v6H6V4H26m0-2H6A2 2 0 004 4v6a2 2 0 002 2H26a2 2 0 002-2V4a2 2 0 00-2-2zM20.59 21.41L17 17.83 17 30 15 30 15 17.83 11.41 21.41 10 20 16 14 22 20 20.59 21.41z"></path><path d="M8 6H20V8H8z"></path></svg>`;
export default svgResultCarbonIcon;

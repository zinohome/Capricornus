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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<circle cx="9" cy="6" r="1"></circle><path d="M26 2H6A2 2 0 004 4V8a2 2 0 002 2h9v4h2V10h9a2 2 0 002-2V4A2 2 0 0026 2zm0 6H6V4H26zM17 28L17 26 15 26 15 28 4 28 4 30 28 30 28 28 17 28z"></path><circle cx="9" cy="20" r="1"></circle><path d="M6,24H26a2,2,0,0,0,2-2V18a2,2,0,0,0-2-2H6a2,2,0,0,0-2,2v4A2,2,0,0,0,6,24Zm0-6H26v4H6Z"></path></svg>`;
export default svgResultCarbonIcon;

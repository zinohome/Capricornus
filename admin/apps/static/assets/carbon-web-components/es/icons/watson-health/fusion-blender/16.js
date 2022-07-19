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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M20,12H17V4h3V2H12V4h3v8H12a2,2,0,0,0-2,2v4a2,2,0,0,0,2,2h3v8H12v2h8V28H17V20h3a2,2,0,0,0,2-2V14A2,2,0,0,0,20,12Zm-8,6V14h8v4Z"></path></svg>`;
export default svgResultCarbonIcon;

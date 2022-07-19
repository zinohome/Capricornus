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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M22,28V12H18V8h2V6H14V8h2v4H12V28H4V2H2V28a2,2,0,0,0,2,2H30V28ZM14,14h2v4H14Zm6,14H14V20h6Zm0-10H18V14h2Z"></path></svg>`;
export default svgResultCarbonIcon;

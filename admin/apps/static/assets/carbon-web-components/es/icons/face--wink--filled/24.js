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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2ZM8,13h6v2H8Zm8,11a8,8,0,0,1-6.85-3.89l1.71-1a6,6,0,0,0,10.28,0l1.71,1A8,8,0,0,1,16,24Zm4.5-8a2.5,2.5,0,0,1,0-5h0a2.5,2.5,0,0,1,0,5Z"></path></svg>`;
export default svgResultCarbonIcon;

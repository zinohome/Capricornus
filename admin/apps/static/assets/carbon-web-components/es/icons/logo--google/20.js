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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M27.39,13.82H16.21v4.63h6.44c-.6,2.95-3.11,4.64-6.44,4.64a7.09,7.09,0,0,1,0-14.18,7,7,0,0,1,4.42,1.58L24.12,7a12,12,0,1,0-7.91,21c6,0,11.45-4.36,11.45-12A9.56,9.56,0,0,0,27.39,13.82Z"></path></svg>`;
export default svgResultCarbonIcon;

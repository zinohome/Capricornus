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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M13.71 12.29L7.42 6 14 6 14 4 4 4 4 13.99 6 14.01 6 7.41 12.29 13.7 13.71 12.29zM28 10H18v2H28V28H12V18H10V28a2 2 0 002 2H28a2 2 0 002-2V12A2 2 0 0028 10z"></path><path d="M19 25L21 25 21 18 24 18 24 16 16 16 16 18 19 18 19 25z"></path></svg>`;
export default svgResultCarbonIcon;

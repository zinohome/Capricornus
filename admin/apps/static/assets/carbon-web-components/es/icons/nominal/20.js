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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M24 28a6 6 0 116-6A6.0069 6.0069 0 0124 28zm0-10a4 4 0 104 4A4.0045 4.0045 0 0024 18zM8 28a6 6 0 116-6A6.0069 6.0069 0 018 28zM8 18a4 4 0 104 4A4.0045 4.0045 0 008 18zM16 14a6 6 0 116-6A6.0069 6.0069 0 0116 14zM16 4a4 4 0 104 4A4.0045 4.0045 0 0016 4z"></path></svg>`;
export default svgResultCarbonIcon;

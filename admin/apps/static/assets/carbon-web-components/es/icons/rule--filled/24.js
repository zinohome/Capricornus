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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path fill="none" d="M9 16H23V18H9z" data-icon-path="inner-path"></path><path fill="none" d="M9 10H23V12H9z"></path><path d="M26,2H6A2.0023,2.0023,0,0,0,4,4V17a10.9814,10.9814,0,0,0,5.8242,9.707L16,30l6.1758-3.293A10.9814,10.9814,0,0,0,28,17V4A2.0023,2.0023,0,0,0,26,2ZM23,18H9V16H23Zm0-6H9V10H23Z"></path></svg>`;
export default svgResultCarbonIcon;

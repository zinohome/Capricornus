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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M22,11h4a1,1,0,0,1,1,1v2a0,0,0,0,1,0,0H21a0,0,0,0,1,0,0V12A1,1,0,0,1,22,11Z"></path><circle cx="24" cy="8" r="2"></circle><path d="M30 18H18a2.0023 2.0023 0 01-2-2V4a2.002 2.002 0 012-2H30a2.0023 2.0023 0 012 2V16A2.0027 2.0027 0 0130 18zM18 4V16H30.001L30 4zM15 30H13V26a2.9465 2.9465 0 00-3-3H6a2.9465 2.9465 0 00-3 3v4H1V26a4.9514 4.9514 0 015-5h4a4.9514 4.9514 0 015 5zM8 11a3 3 0 010 6 3 3 0 010-6M8 9A5 5 0 008 19 5 5 0 008 9z"></path></svg>`;
export default svgResultCarbonIcon;

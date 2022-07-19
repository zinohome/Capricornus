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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M27 28V6H19V28H15V14H7V28H4V2H2V28a2 2 0 002 2H30V28zM13 28H9V16h4zm12 0H21V8h4zM19 2H27V4H19z"></path><path d="M7 10H15V12H7z"></path></svg>`;
export default svgResultCarbonIcon;

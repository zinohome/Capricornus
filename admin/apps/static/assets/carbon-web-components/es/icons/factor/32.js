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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M27,28V9H24V4h2V2H20V4h2V9H19V28H15V16H12V11h2V9H8v2h2v5H7V28H4V2H2V28a2,2,0,0,0,2,2H30V28ZM13,28H9V18h4Zm8-17h4V28H21Z"></path></svg>`;
export default svgResultCarbonIcon;

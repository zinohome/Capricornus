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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M17 27.172L17 22 15 22 15 27.172 12.414 24.586 11 26 16 31 21 26 19.586 24.586 17 27.172z"></path><path d="M30 12H2v8H4V30H6V20H26V30h2V20h2zm-2 6H4V14H28zM15 4.828L15 10 17 10 17 4.828 19.586 7.414 21 6 16 1 11 6 12.414 7.414 15 4.828z"></path></svg>`;
export default svgResultCarbonIcon;

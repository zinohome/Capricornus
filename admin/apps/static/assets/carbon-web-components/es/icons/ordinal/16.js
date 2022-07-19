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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16">${children}<path d="M1,13 L1,12 L3,12 L3,9 L5.999,9 L6,6 L9,6 L9,3 L13,3 L13,12 L15,12 L15,13 L1,13 Z M5.999,10 L4,10 L4,12 L5.999,12 L5.999,10 Z M8.999,7 L6.999,7 L6.999,9 L7,9 L7,12 L8.999,12 L8.999,7 Z M12,4 L10,4 L10,12 L12,12 L12,4 Z"></path></svg>`;
export default svgResultCarbonIcon;

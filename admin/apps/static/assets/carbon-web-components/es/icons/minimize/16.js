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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16">${children}<path d="M2 9L2 10 5.3 10 1 14.3 1.7 15 6 10.7 6 14 7 14 7 9zM14 7L14 6 10.7 6 15 1.7 14.3 1 10 5.3 10 2 9 2 9 7z"></path></svg>`;
export default svgResultCarbonIcon;

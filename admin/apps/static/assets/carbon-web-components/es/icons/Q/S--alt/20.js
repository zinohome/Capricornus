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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M24 9L22 9 22 7 20 7 20 9 18 9 18 11 20 11 20 17 22 17 22 11 24 11 24 9zM14 23H8V21h6V17H10a2 2 0 01-2-2V11a2 2 0 012-2h6v2H10v4h4a2 2 0 012 2v4A2 2 0 0114 23z"></path></svg>`;
export default svgResultCarbonIcon;

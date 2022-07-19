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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M4 7H2V4A2.0023 2.0023 0 014 2H7V4H4zM7 22H4a2.0023 2.0023 0 01-2-2V17H4v3H7zM2 10H4V14H2zM22 7H20V4H17V2h3a2.0023 2.0023 0 012 2zM10 2H14V4H10zM28 30H12a2.0023 2.0023 0 01-2-2V12a2.0023 2.0023 0 012-2H28a2.0023 2.0023 0 012 2V28A2.0023 2.0023 0 0128 30zM12 12V28H28V12z"></path></svg>`;
export default svgResultCarbonIcon;

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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M25 13L25 4 23 4 23 6 20 6 20 8 23 8 23 13 20 13 20 15 28 15 28 13 25 13zM8.5 6A3.5 3.5 0 115 9.5 3.5 3.5 0 018.5 6m0-2A5.5 5.5 0 1014 9.5 5.5 5.5 0 008.5 4zM8.5 20A3.5 3.5 0 115 23.5 3.5 3.5 0 018.5 20m0-2A5.5 5.5 0 1014 23.5 5.5 5.5 0 008.5 18zM23.5 20A3.5 3.5 0 1120 23.5 3.5 3.5 0 0123.5 20m0-2A5.5 5.5 0 1029 23.5 5.5 5.5 0 0023.5 18z"></path></svg>`;
export default svgResultCarbonIcon;

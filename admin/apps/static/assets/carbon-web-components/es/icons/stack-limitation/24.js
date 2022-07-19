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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M8 22H16V30H8zM24 12H20v2h4v2H21v2h3v2H20v2h4a2.0027 2.0027 0 002-2V14A2.0023 2.0023 0 0024 12zM16 20H8V12h8zm-6-2h4V14H10zM16 3.41L14.59 2 12 4.59 9.41 2 8 3.41 10.59 6 8 8.59 9.41 10 12 7.41 14.59 10 16 8.59 13.41 6 16 3.41z"></path></svg>`;
export default svgResultCarbonIcon;

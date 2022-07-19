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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M28 10H22V24h2V20h4a2.0027 2.0027 0 002-2V12A2.0023 2.0023 0 0028 10zm-4 8V12h4v6zM18 10H12V24h2V20h4a2.0027 2.0027 0 002-2V12A2.0023 2.0023 0 0018 10zm-4 8V12h4v6zM8 10H3v2H8v2H4a2 2 0 00-2 2v2a2 2 0 002 2h6V12A2.0023 2.0023 0 008 10zm0 8H4V16H8z"></path></svg>`;
export default svgResultCarbonIcon;

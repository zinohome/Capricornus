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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M24 21L24 9 22 9 22 23 30 23 30 21 24 21zM18 9H14a2 2 0 00-2 2V21a2 2 0 002 2h1v2a2 2 0 002 2h2V25H17V23h1a2 2 0 002-2V11A2 2 0 0018 9zM14 21V11h4V21zM8 23H2V21H8V17H4a2 2 0 01-2-2V11A2 2 0 014 9h6v2H4v4H8a2 2 0 012 2v4A2 2 0 018 23z"></path></svg>`;
export default svgResultCarbonIcon;

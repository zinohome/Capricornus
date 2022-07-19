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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M19 13a2 2 0 00-2 2v6a2 2 0 002 2h4v2H18v2h5a2 2 0 002-2V13zm4 8H19V15h4zM15 23H9a2 2 0 01-2-2V11A2 2 0 019 9h6v2H9V21h4V17H11V15h4z"></path></svg>`;
export default svgResultCarbonIcon;

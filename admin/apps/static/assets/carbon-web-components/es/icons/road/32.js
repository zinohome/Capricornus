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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M13 13H19V15H13z"></path><path d="M25.4409 8L24.1687 3.45A2.009 2.009 0 0022.2456 2H9.7544A2.0089 2.0089 0 007.8313 3.4507L6.5315 8H4v2H6v7a2.0025 2.0025 0 002 2v3h2V19H22v3h2V19a2.0025 2.0025 0 002-2V10h2V8zM9.7544 4H22.2458l1.4285 5H8.3257zM24 13H22v2h2v2H8V15h2V13H8V11H24zM2 16H4V30H2zM28 16H30V30H28z"></path><path d="M15 21H17V24H15zM15 26H17V30H15z"></path></svg>`;
export default svgResultCarbonIcon;

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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M2 28V16a2.0023 2.0023 0 012-2H16a2.0023 2.0023 0 012 2V28a2.0023 2.0023 0 01-2 2H4A2.0023 2.0023 0 012 28zM4 16L3.9988 28H16V16zM17 2l1.41 1.41L15.83 6H21a7.0078 7.0078 0 017 7v5H26V13a5.0057 5.0057 0 00-5-5H15.83l2.58 2.59L17 12 12 7z"></path></svg>`;
export default svgResultCarbonIcon;

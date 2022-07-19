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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M16 8H30V10H16zM16 22H30V24H16zM10 14H4a2.0023 2.0023 0 01-2-2V6A2.0023 2.0023 0 014 4h6a2.0023 2.0023 0 012 2v6A2.0023 2.0023 0 0110 14zM4 6v6h6.0012L10 6zM10 28H4a2.0023 2.0023 0 01-2-2V20a2.0023 2.0023 0 012-2h6a2.0023 2.0023 0 012 2v6A2.0023 2.0023 0 0110 28zM4 20v6h6.0012L10 20z"></path></svg>`;
export default svgResultCarbonIcon;

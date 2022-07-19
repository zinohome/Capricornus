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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M26 28a4 4 0 114-4A4.0045 4.0045 0 0126 28zm0-6a2 2 0 102 2A2.0023 2.0023 0 0026 22zM24 8H18v2h6a1 1 0 010 2H21a1 1 0 00-.98 1.1963l.9241 4.6211L18.4338 22h-2.69l-2.5723-8.5752A1.988 1.988 0 0011.2559 12H6v2h5.2561l.6 2H7a5.0057 5.0057 0 00-5 5v2a1 1 0 001 1H4a4 4 0 008 0h7a1 1 0 00.8574-.4854l3-5a1 1 0 00.1231-.7109L22.22 14H24a3 3 0 000-6zM8 26a2.0025 2.0025 0 01-2-2h4A2.0025 2.0025 0 018 26zM4 22V21a3.0033 3.0033 0 013-3h5.4561l1.2 4z"></path></svg>`;
export default svgResultCarbonIcon;

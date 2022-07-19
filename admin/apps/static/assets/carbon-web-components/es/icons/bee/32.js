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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M16 10a6 6 0 00-6 6v8a6 6 0 0012 0V16A6 6 0 0016 10zm-4.25 7.87h8.5v4.25h-8.5zM16 28.25A4.27 4.27 0 0111.75 24v-.13h8.5V24A4.27 4.27 0 0116 28.25zm4.25-12.13h-8.5V16a4.25 4.25 0 018.5 0zM30.66 19.21L24 13v9.1a4 4 0 008 0A3.83 3.83 0 0030.66 19.21zM28 24.35a2.25 2.25 0 01-2.25-2.25V17l3.72 3.47h0A2.05 2.05 0 0130.2 22 2.25 2.25 0 0128 24.35zM0 22.1a4 4 0 008 0V13L1.34 19.21A3.88 3.88 0 000 22.1zm2.48-1.56h0L6.25 17v5.1a2.25 2.25 0 01-4.5 0A2.05 2.05 0 012.48 20.54zM15 5.5A3.5 3.5 0 1011.5 9 3.5 3.5 0 0015 5.5zm-5.25 0A1.75 1.75 0 1111.5 7.25 1.77 1.77 0 019.75 5.5zM20.5 2A3.5 3.5 0 1024 5.5 3.5 3.5 0 0020.5 2zm0 5.25A1.75 1.75 0 1122.25 5.5 1.77 1.77 0 0120.5 7.25z"></path></svg>`;
export default svgResultCarbonIcon;

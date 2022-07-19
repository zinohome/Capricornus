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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M16 30H4a2.0023 2.0023 0 01-2-2V16a2.0023 2.0023 0 012-2H16a2.0023 2.0023 0 012 2V28A2.0023 2.0023 0 0116 30zM30 15l-1.41-1.41L26 16.17V11a7.0078 7.0078 0 00-7-7H14V6h5a5.0057 5.0057 0 015 5v5.17l-2.59-2.58L20 15l5 5z"></path></svg>`;
export default svgResultCarbonIcon;

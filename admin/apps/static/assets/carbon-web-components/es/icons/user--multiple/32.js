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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M30 30H28V25a5.0057 5.0057 0 00-5-5V18a7.0078 7.0078 0 017 7zM22 30H20V25a5.0059 5.0059 0 00-5-5H9a5.0059 5.0059 0 00-5 5v5H2V25a7.0082 7.0082 0 017-7h6a7.0082 7.0082 0 017 7zM20 2V4a5 5 0 010 10v2A7 7 0 0020 2zM12 4A5 5 0 117 9a5 5 0 015-5m0-2a7 7 0 107 7A7 7 0 0012 2z"></path></svg>`;
export default svgResultCarbonIcon;

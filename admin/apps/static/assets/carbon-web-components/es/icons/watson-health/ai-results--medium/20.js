/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { svg } from 'lit-html';
import spread from '../../../globals/directives/spread';
const svgResultCarbonIcon = ({ children, ...attrs } = {}) =>
  svg`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${spread(
    attrs
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M11 24H21V26H11zM13 28H19V30H13zM10.8145 18.1406A7.1851 7.1851 0 018 12a8.0092 8.0092 0 018-8V2A10.0111 10.0111 0 006 12a9.1793 9.1793 0 003.46 7.6162C10.4717 20.5508 11 21.0815 11 22h2C13 20.16 11.8892 19.1338 10.8145 18.1406zM28 14H20a2.0021 2.0021 0 01-2-2V4a2.0021 2.0021 0 012-2h8a2.0021 2.0021 0 012 2v8A2.0021 2.0021 0 0128 14zM20 4v8h8V4zM23.04 16a9.4858 9.4858 0 01-1.8623 2.1426C20.1069 19.1348 19 20.1611 19 22h2c0-.9194.5264-1.45 1.5352-2.3857A9.9838 9.9838 0 0025.2756 16z"></path></svg>`;
export default svgResultCarbonIcon;

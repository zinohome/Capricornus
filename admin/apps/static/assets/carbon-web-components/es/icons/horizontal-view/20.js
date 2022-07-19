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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M28 30H4a2.0021 2.0021 0 01-2-2V20a2.0021 2.0021 0 012-2H28a2.0021 2.0021 0 012 2v8A2.0021 2.0021 0 0128 30zM4 20H3.9985L4 28H28V20zM28 14H4a2.0021 2.0021 0 01-2-2V4A2.0021 2.0021 0 014 2H28a2.0021 2.0021 0 012 2v8A2.0021 2.0021 0 0128 14zM4 4H3.9985L4 12H28V4z"></path></svg>`;
export default svgResultCarbonIcon;

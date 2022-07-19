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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M8 30H4a2 2 0 01-2-2V24a2 2 0 012-2H8a2 2 0 012 2v4A2 2 0 018 30zM4 24v4H8V24zM18 30H14a2 2 0 01-2-2V24a2 2 0 012-2h4a2 2 0 012 2v4A2 2 0 0118 30zm-4-6v4h4V24zM28 30H24a2 2 0 01-2-2V24a2 2 0 012-2h4a2 2 0 012 2v4A2 2 0 0128 30zm-4-6v4h4V24zM28 20H4a2 2 0 01-2-2V4A2 2 0 014 2H28a2 2 0 012 2V18A2 2 0 0128 20zM4 4V18H28V4z"></path></svg>`;
export default svgResultCarbonIcon;

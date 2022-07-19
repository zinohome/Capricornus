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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M12 15H10V12a2.0023 2.0023 0 012-2h3v2H12zM15 30H12a2.0023 2.0023 0 01-2-2V25h2v3h3zM18 28H22V30H18zM28 30H25V28h3V25h2v3A2.0023 2.0023 0 0128 30zM10 18H12V22H10zM28 18H30V22H28zM30 15H28V12H25V10h3a2.0023 2.0023 0 012 2zM18 10H22V12H18z"></path><path d="M8,22H4a2.0023,2.0023,0,0,1-2-2V4A2.0023,2.0023,0,0,1,4,2H20a2.0023,2.0023,0,0,1,2,2V8H20V4H4V20H8Z"></path></svg>`;
export default svgResultCarbonIcon;

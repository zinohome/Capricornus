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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M30,23V21H28V19H26v2H23V19H21v2H19v2h2v3H19v2h2v2h2V28h3v2h2V28h2V26H28V23Zm-4,3H23V23h3Z"></path><path d="M16,30A14,14,0,1,1,30,16H28A12,12,0,1,0,16,28Z"></path></svg>`;
export default svgResultCarbonIcon;

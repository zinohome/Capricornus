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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M24 13H26V19H24z"></path><path d="M30,7V25a2.0023,2.0023,0,0,1-2,2H4a2.002,2.002,0,0,1-2-2V7A2.0023,2.0023,0,0,1,4,5H28A2.0027,2.0027,0,0,1,30,7ZM4,25H28V7H4Z"></path></svg>`;
export default svgResultCarbonIcon;

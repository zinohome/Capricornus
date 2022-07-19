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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M16,2V4H26V19h2V4a2.0023,2.0023,0,0,0-2-2Z"></path><path d="M11,7V9H21V24h2V9a2.0023,2.0023,0,0,0-2-2Z"></path><path d="M6,12H16a2.0023,2.0023,0,0,1,2,2V28a2.0023,2.0023,0,0,1-2,2H6a2.0023,2.0023,0,0,1-2-2V14A2.0023,2.0023,0,0,1,6,12Zm10,2L6,13.9988V28H16Z"></path></svg>`;
export default svgResultCarbonIcon;

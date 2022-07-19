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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M17 28L17 22 15 22 15 28 5 28 5 30 27 30 27 28 17 28z"></path><circle cx="9" cy="16" r="1"></circle><path d="M26,20H6a2.0023,2.0023,0,0,1-2-2V14a2.0023,2.0023,0,0,1,2-2H26a2.0023,2.0023,0,0,1,2,2v4A2.0023,2.0023,0,0,1,26,20ZM6,14v4H26V14Z"></path></svg>`;
export default svgResultCarbonIcon;

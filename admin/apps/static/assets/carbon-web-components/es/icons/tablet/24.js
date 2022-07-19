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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M15 22H17V28H15z" transform="rotate(90 16 25)"></path><path d="M25,30H7a2.0023,2.0023,0,0,1-2-2V4A2.002,2.002,0,0,1,7,2H25a2.0023,2.0023,0,0,1,2,2V28A2.0027,2.0027,0,0,1,25,30ZM7,4V28H25V4Z"></path></svg>`;
export default svgResultCarbonIcon;

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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M30,30H4a2,2,0,0,1-2-2V2H4V28H30Z"></path><circle cx="10" cy="22" r="2"></circle><circle cx="14" cy="15" r="2"></circle><circle cx="22" cy="15" r="2"></circle><circle cx="26" cy="6" r="2"></circle><circle cx="14" cy="8" r="2"></circle></svg>`;
export default svgResultCarbonIcon;

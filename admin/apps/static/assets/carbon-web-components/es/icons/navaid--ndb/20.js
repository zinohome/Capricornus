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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M16,24a8,8,0,1,1,8-8A8.0092,8.0092,0,0,1,16,24Zm0-14a6,6,0,1,0,6,6A6.0067,6.0067,0,0,0,16,10Z"></path><circle cx="16" cy="16" r="2"></circle><circle cx="16" cy="4" r="2"></circle><circle cx="16" cy="28" r="2"></circle><circle cx="28" cy="16" r="2"></circle><circle cx="4" cy="16" r="2"></circle><circle cx="7.515" cy="7.515" r="2"></circle><circle cx="24.485" cy="24.485" r="2"></circle><circle cx="24.485" cy="7.515" r="2"></circle><circle cx="7.515" cy="24.485" r="2"></circle></svg>`;
export default svgResultCarbonIcon;

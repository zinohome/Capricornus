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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<circle cx="20" cy="4" r="2"></circle><circle cx="8" cy="16" r="2"></circle><circle cx="28" cy="12" r="2"></circle><circle cx="11" cy="7" r="2"></circle><circle cx="16" cy="24" r="2"></circle><path d="M30,3.4131,28.5859,2,4,26.585V2H2V28a2,2,0,0,0,2,2H30V28H5.4131Z"></path></svg>`;
export default svgResultCarbonIcon;

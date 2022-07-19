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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M18,4V6h6.5859l-7.6884,7.6885a8.028,8.028,0,1,0,1.414,1.414L26,7.4141V14h2V4ZM12,26a6,6,0,1,1,6-6A6.0066,6.0066,0,0,1,12,26Z"></path></svg>`;
export default svgResultCarbonIcon;

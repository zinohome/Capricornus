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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M23,23a7,7,0,1,1,7-7A7.0078,7.0078,0,0,1,23,23Zm0-12a5,5,0,1,0,5,5A5.0055,5.0055,0,0,0,23,11Z"></path><circle cx="9" cy="16" r="7"></circle></svg>`;
export default svgResultCarbonIcon;

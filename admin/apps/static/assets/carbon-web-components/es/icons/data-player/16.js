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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M28 24v2H15.8164a2.983 2.983 0 00-5.6328 0H4V24H2v6H4V28h6.1836a2.983 2.983 0 005.6328 0H28v2h2V24zM13 7.5L13 16.499 13 16.499 21 12 13 7.5z"></path><path d="M16,22A10,10,0,1,1,26,12,10.0113,10.0113,0,0,1,16,22ZM16,4a8,8,0,1,0,8,8A8.0092,8.0092,0,0,0,16,4Z"></path></svg>`;
export default svgResultCarbonIcon;

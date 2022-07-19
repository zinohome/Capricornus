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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16">${children}<path d="M13,9c0,2.8-2.2,5-5,5s-5-2.2-5-5s2.2-5,5-5h3.1L9.3,5.8L10,6.5l3-3l-3-3L9.3,1.2L11.1,3H8C4.7,3,2,5.7,2,9s2.7,6,6,6	s6-2.7,6-6H13z"></path></svg>`;
export default svgResultCarbonIcon;

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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 20 20">${children}<path d="M8 13.2L3.6 8.8 2.7 9.7 7.1 14.1 8 15 16.5 6.5 15.6 5.6z"></path><path d="M15.6 5.6L8 13.2 3.6 8.8 2.7 9.7 7.1 14.1 8 15 16.5 6.5 15.6 5.6z"></path></svg>`;
export default svgResultCarbonIcon;

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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16">${children}<path d="M3.5,14C3.2,14,3,13.8,3,13.5v-11c0-0.2,0.1-0.3,0.2-0.4C3.4,2,3.6,2,3.8,2.1l9.5,5.5c0.2,0.1,0.3,0.4,0.2,0.7	c0,0.1-0.1,0.1-0.2,0.2l-9.5,5.5C3.7,14,3.6,14,3.5,14z M4,3.4v9.3L12,8L4,3.4z"></path></svg>`;
export default svgResultCarbonIcon;

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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M4,18A12,12,0,1,0,16,6H12V1L6,7l6,6V8h4A10,10,0,1,1,6,18Z"></path><circle cx="13.5" cy="23.5" r="1.5"></circle><circle cx="10.5" cy="19.5" r="1.5"></circle><circle cx="16.5" cy="19.5" r="1.5"></circle><path d="M11.964 14.5H17.036V16.499H11.964z" transform="rotate(-45 14.5 15.5)"></path><path d="M17.964 14.5H23.035999999999998V16.499H17.964z" transform="rotate(-45 20.5 15.5)"></path></svg>`;
export default svgResultCarbonIcon;

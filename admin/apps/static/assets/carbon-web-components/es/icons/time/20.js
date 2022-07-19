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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 20 20">${children}<path d="M10,19c-5,0-9-4-9-9s4-9,9-9s9,4,9,9S15,19,10,19z M10,2.3c-4.3,0-7.7,3.5-7.7,7.7s3.5,7.7,7.7,7.7s7.7-3.5,7.7-7.7	S14.3,2.3,10,2.3z"></path><path d="M13 13.9L9.4 10.3 9.4 4 10.6 4 10.6 9.7 13.9 13z"></path></svg>`;
export default svgResultCarbonIcon;

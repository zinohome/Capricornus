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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M28,2H4A2,2,0,0,0,2,4V28a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V4A2,2,0,0,0,28,2ZM21.5859,13.4141,17,8.8281V26H15V8.8281l-4.5859,4.586L9,12l7-7,7,7Z"></path><path fill="none" d="M21.5859,13.4141,17,8.8281V26H15V8.8281l-4.5859,4.586L9,12l7-7,7,7Z" data-icon-path="inner-path"></path></svg>`;
export default svgResultCarbonIcon;

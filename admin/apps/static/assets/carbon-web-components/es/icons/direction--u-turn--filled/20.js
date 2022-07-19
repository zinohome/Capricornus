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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path fill="none" d="M26.5859,17.5859,22,22.1719V14A8,8,0,0,0,6,14V26H8V14a6,6,0,0,1,12,0v8.1719l-4.5859-4.586L14,19l7,7,7-7Z" data-icon-path="inner-path"></path><path d="M28,2H4A2,2,0,0,0,2,4V28a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V4A2,2,0,0,0,28,2ZM21,26l-7-7,1.4141-1.4141L20,22.1719V14A6,6,0,0,0,8,14V26H6V14a8,8,0,0,1,16,0v8.1719l4.5859-4.586L28,19Z"></path></svg>`;
export default svgResultCarbonIcon;

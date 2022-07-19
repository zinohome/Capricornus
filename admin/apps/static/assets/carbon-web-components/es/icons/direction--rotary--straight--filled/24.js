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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<circle cx="16" cy="19" r="3"></circle><path d="M28,2H4A2,2,0,0,0,2,4V28a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V4A2,2,0,0,0,28,2ZM21.5859,12.4141,17,7.8281v6.273a5,5,0,0,1,0,9.7978V28H15V23.8989a5,5,0,0,1,0-9.7978V7.8281l-4.5859,4.586L9,11l7-7,7,7Z"></path><path fill="none" d="M21.5859,12.4141,23,11,16,4,9,11l1.4141,1.4141L15,7.8281v6.273a5,5,0,0,0,0,9.7978V28h2V23.8989a5,5,0,0,0,0-9.7978V7.8281ZM19,19a3,3,0,1,1-3-3A3.0033,3.0033,0,0,1,19,19Z" data-icon-path="inner-path"></path></svg>`;
export default svgResultCarbonIcon;

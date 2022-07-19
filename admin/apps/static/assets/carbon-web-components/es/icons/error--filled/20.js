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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 20 20">${children}${children}${children}<path d="M10,1c-5,0-9,4-9,9s4,9,9,9s9-4,9-9S15,1,10,1z M13.5,14.5l-8-8l1-1l8,8L13.5,14.5z"></path><path d="M13.5,14.5l-8-8l1-1l8,8L13.5,14.5z" data-icon-path="inner-path" opacity="0"></path></svg>`;
export default svgResultCarbonIcon;

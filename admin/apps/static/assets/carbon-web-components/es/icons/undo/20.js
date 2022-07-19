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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 20 20">${children}<path d="M15,9.3c1.5,0,2.8,1.3,2.8,2.7c0,1.5-1.3,2.7-2.8,2.7h-4V16h4c2.3,0,4-1.7,4-4c0-2.2-1.8-4-4-4H3.4	l2.5-2.5L5,4.6l-4,4l4,4l0.9-0.9L3.4,9.3H15z"></path></svg>`;
export default svgResultCarbonIcon;

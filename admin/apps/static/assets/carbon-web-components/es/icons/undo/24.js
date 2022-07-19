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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 24 24">${children}<path d="M17.2,11.2c1.8,0,3.2,1.7,3.2,3.3c0,1.5-1.5,3.2-3.2,3.2H14v1.5h3.2c2.2,0,4.8-2.3,4.8-4.8s-2-4.8-4.8-4.8	H4.8l3-3L6.8,5.7L2,10.5l4.8,4.8l1.1-1.1l-3-3H17.2z"></path></svg>`;
export default svgResultCarbonIcon;

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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M16 20H18V28H16z"></path><path d="M23,4a7.0078,7.0078,0,0,0-7,7v3h2V11a5,5,0,1,1,5,5H5.8281l4.586-4.5859L9,10,2,17l7,7,1.4141-1.4141L5.8281,18H23A7,7,0,0,0,23,4Z"></path></svg>`;
export default svgResultCarbonIcon;

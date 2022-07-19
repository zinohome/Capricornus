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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M12,24a4,4,0,1,1,4-4A4.0042,4.0042,0,0,1,12,24Zm0-6a2,2,0,1,0,2,2A2.0023,2.0023,0,0,0,12,18Z"></path><path d="M30,6a4.0042,4.0042,0,0,0-4-4,3.949,3.949,0,0,0-1.8537.4768L7.7571,10.9579A9.9921,9.9921,0,1,0,21.066,24.1929l8.49-16.3994A3.9491,3.9491,0,0,0,30,6ZM26,4a2,2,0,1,1-2,2A2.0023,2.0023,0,0,1,26,4ZM22.0194,5.8083C22.0163,5.8732,22,5.9343,22,6a4.0042,4.0042,0,0,0,4,4c.0645,0,.1245-.016.1882-.019l-4.3318,8.3617a10.0168,10.0168,0,0,0-8.2158-8.1962ZM12,28a8,8,0,1,1,8-8A8.0092,8.0092,0,0,1,12,28Z"></path></svg>`;
export default svgResultCarbonIcon;

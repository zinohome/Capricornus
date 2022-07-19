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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M20,6a9.9355,9.9355,0,0,0-4,.8418A9.999,9.999,0,1,0,16,25.16,9.998,9.998,0,1,0,20,6ZM12,24A8,8,0,1,1,13.7573,8.2017a9.9734,9.9734,0,0,0,0,15.5986A7.9919,7.9919,0,0,1,12,24Zm8,0a7.9919,7.9919,0,0,1-1.7573-.2,9.9734,9.9734,0,0,0,0-15.5986A7.9972,7.9972,0,1,1,20,24Z"></path></svg>`;
export default svgResultCarbonIcon;

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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M16,2A14,14,0,1,0,30,16,14.0158,14.0158,0,0,0,16,2ZM27.9492,15H22.041a14.4088,14.4088,0,0,1,2.7383-7.1533A11.9392,11.9392,0,0,1,27.9492,15ZM17,15V4.0508a11.9181,11.9181,0,0,1,6.2874,2.4375A16.2646,16.2646,0,0,0,20.04,15Zm-2,0H11.96A16.2646,16.2646,0,0,0,8.7126,6.4883,11.9181,11.9181,0,0,1,15,4.0508Zm0,2V27.9492a11.9181,11.9181,0,0,1-6.2874-2.4375A16.2646,16.2646,0,0,0,11.96,17Zm2,0h3.04a16.2646,16.2646,0,0,0,3.2476,8.5117A11.9181,11.9181,0,0,1,17,27.9492ZM7.2207,7.8467A14.4088,14.4088,0,0,1,9.959,15H4.0508A11.9392,11.9392,0,0,1,7.2207,7.8467ZM4.0508,17H9.959a14.4088,14.4088,0,0,1-2.7383,7.1533A11.9392,11.9392,0,0,1,4.0508,17Zm20.7285,7.1533A14.4088,14.4088,0,0,1,22.041,17h5.9082A11.9392,11.9392,0,0,1,24.7793,24.1533Z"></path></svg>`;
export default svgResultCarbonIcon;

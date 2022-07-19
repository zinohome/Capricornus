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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M13.338 30L11.602 29 13.889 25 10 25 13.993 18 15.73 19 13.446 23 17.337 23 13.338 30z"></path><path d="M29.844,13.0347a1.52,1.52,0,0,0-1.231-.8658,5.3562,5.3562,0,0,1-3.4094-1.7158A6.4652,6.4652,0,0,1,23.9187,4.06a1.6039,1.6039,0,0,0-.3-1.5459,1.4547,1.4547,0,0,0-1.3591-.4922l-.0191.0039a7.8544,7.8544,0,0,0-6.1054,6.48A7.3725,7.3725,0,0,0,13.5,8a7.5511,7.5511,0,0,0-7.1494,5.2441A5.9926,5.9926,0,0,0,8,25V23a3.9926,3.9926,0,0,1-.6733-7.9292l.663-.1128.1456-.6562a5.496,5.496,0,0,1,10.7294,0l.1456.6562.6626.1128A3.9925,3.9925,0,0,1,19,23v2a5.9549,5.9549,0,0,0,5.88-7.1455,7.502,7.502,0,0,0,4.8669-3.3A1.537,1.537,0,0,0,29.844,13.0347Zm-5.6926,2.9179a5.9658,5.9658,0,0,0-3.502-2.7085A7.5084,7.5084,0,0,0,18.0288,9.55a6.0085,6.0085,0,0,1,3.77-5.3335,8.4582,8.4582,0,0,0,1.9392,7.5967A7.4037,7.4037,0,0,0,27.64,14.041,5.4419,5.4419,0,0,1,24.1514,15.9526Z"></path></svg>`;
export default svgResultCarbonIcon;

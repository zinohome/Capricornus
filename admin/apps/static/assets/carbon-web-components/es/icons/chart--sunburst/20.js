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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M16,2a1,1,0,0,0-1,1v7.09a5.9618,5.9618,0,0,0-2.46,1.043L7.8384,6.4311a1.4554,1.4554,0,0,0-2.087.0244A14.05,14.05,0,0,0,9.8047,28.5972a10.8482,10.8482,0,0,0,1.8989.7676,14.0982,14.0982,0,0,0,13.8443-3.1319,1.4336,1.4336,0,0,0,.0278-2.0639L20.877,19.47A5.963,5.963,0,0,0,21.91,17H29a1,1,0,0,0,1-1A14.0158,14.0158,0,0,0,16,2Zm0,10a4,4,0,1,1-4,4A4.0045,4.0045,0,0,1,16,12ZM6.83,8.251l4.2959,4.2959a5.91,5.91,0,0,0-.0113,6.9243L6.8381,23.7481A12.0168,12.0168,0,0,1,6.83,8.251Zm1.4228,16.91,4.2759-4.2759A5.9589,5.9589,0,0,0,15,21.91v6.042A11.8783,11.8783,0,0,1,8.2529,25.1612ZM17,27.9561V21.9092a5.9631,5.9631,0,0,0,2.4609-1.0273l4.2818,4.2817A11.8905,11.8905,0,0,1,17,27.9561ZM21.91,15A6.0063,6.0063,0,0,0,17,10.09V4.041A12.0208,12.0208,0,0,1,27.9585,15Z"></path></svg>`;
export default svgResultCarbonIcon;

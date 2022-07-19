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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M30,15h-6.07A8.0076,8.0076,0,0,0,17,8.0693V2H15V8.0693A8.0076,8.0076,0,0,0,8.07,15H2v2H8.07A8.0076,8.0076,0,0,0,15,23.9307V30h2V23.9307A8.0076,8.0076,0,0,0,23.9305,17H30ZM16,22a6,6,0,1,1,6-6A6.0066,6.0066,0,0,1,16,22Z"></path></svg>`;
export default svgResultCarbonIcon;

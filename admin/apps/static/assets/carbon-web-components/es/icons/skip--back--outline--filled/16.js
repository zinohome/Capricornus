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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2ZM10,22H8V10h2Zm14-1a1,1,0,0,1-1.4858.874l-9-5a1,1,0,0,1,0-1.748l9-5A1,1,0,0,1,24,11Z"></path><path d="M22 19.301L22 12.699 16.059 16 22 19.301z"></path><path fill="none" d="M23,22a1.0037,1.0037,0,0,1-.4858-.1257l-9-5a1,1,0,0,1,0-1.7486l9-5A1,1,0,0,1,24,11V21a1,1,0,0,1-1,1Zm-6.9409-6L22,19.3005V12.7Z"></path><path fill="none" d="M8 10H10V22H8z" transform="rotate(-180 9 16)"></path></svg>`;
export default svgResultCarbonIcon;

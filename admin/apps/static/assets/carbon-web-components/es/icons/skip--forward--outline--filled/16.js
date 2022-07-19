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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M10 19.301L15.941 16 10 12.699 10 19.301z"></path><path d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm2.4858,14.874-9,5A1,1,0,0,1,8,21V11a1,1,0,0,1,1.4858-.874l9,5a1,1,0,0,1,0,1.748ZM24,22H22V10h2Z"></path><path fill="none" d="M22 10H24V22H22zM8.4927 21.8618A1 1 0 018 21V11a1 1 0 011.4858-.8743l9 5a1 1 0 010 1.7486l-9 5a1.0009 1.0009 0 01-.9931-.0125zM10 12.7v6.601L15.9409 16z"></path></svg>`;
export default svgResultCarbonIcon;

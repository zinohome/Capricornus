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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M14,2a12,12,0,1,0,3.3928,23.5059l3.9246-7.8492A2.9846,2.9846,0,0,1,24,16h1.82A11.9348,11.9348,0,0,0,14,2ZM12,18.5908l-4-4L9.5908,13,12,15.4092,17.4092,10,19,11.5908Z"></path><path d="M27.38,28H20.6178L24,21.2358ZM24,18a1,1,0,0,0-.8947.5527l-5,10A1.0005,1.0005,0,0,0,19,30H29a1,1,0,0,0,.9214-1.3892L24.8946,18.5527A1,1,0,0,0,24,18Z"></path><path fill="none" d="M12 18.591L8 14.591 9.591 13 12 15.409 17.409 10 19 11.591 12 18.591z" data-icon-path="inner-path"></path></svg>`;
export default svgResultCarbonIcon;

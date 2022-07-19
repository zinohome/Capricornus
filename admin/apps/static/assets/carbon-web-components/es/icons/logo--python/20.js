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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M23.4882,9.14v2.9663a4.2843,4.2843,0,0,1-4.173,4.2352H12.6431a3.4077,3.4077,0,0,0-3.34,3.3945v6.3607c0,1.81,1.5742,2.8751,3.34,3.3945a11.1762,11.1762,0,0,0,6.6721,0c1.6817-.4869,3.34-1.4668,3.34-3.3945V23.55H15.983v-.8486H25.9951c1.9414,0,2.6648-1.3542,3.34-3.3867a11.4642,11.4642,0,0,0,0-6.7889c-.48-1.9327-1.3961-3.3867-3.34-3.3867ZM19.7356,25.2476a1.2731,1.2731,0,1,1-1.2534,1.269A1.2607,1.2607,0,0,1,19.7356,25.2476Z"></path><path fill="none" d="M19.7356,25.2476a1.2731,1.2731,0,1,1-1.2534,1.269A1.2607,1.2607,0,0,1,19.7356,25.2476Z"></path><path d="M15.8351,2a19.0717,19.0717,0,0,0-3.192.2725c-2.8268.4994-3.34,1.5447-3.34,3.4723V8.2909h6.68V9.14H6.7962a4.1708,4.1708,0,0,0-4.173,3.3867,12.4855,12.4855,0,0,0,0,6.7889c.4748,1.9776,1.6088,3.3867,3.55,3.3867H8.47V19.65a4.2449,4.2449,0,0,1,4.173-4.15h6.6721a3.3654,3.3654,0,0,0,3.34-3.3944V5.745a3.729,3.729,0,0,0-3.34-3.4723A20.8377,20.8377,0,0,0,15.8351,2ZM12.2226,4.0478a1.2731,1.2731,0,1,1-1.2534,1.2768A1.2675,1.2675,0,0,1,12.2226,4.0478Z"></path><path fill="none" d="M12.2226,4.0478a1.2731,1.2731,0,1,1-1.2534,1.2768A1.2675,1.2675,0,0,1,12.2226,4.0478Z"></path></svg>`;
export default svgResultCarbonIcon;

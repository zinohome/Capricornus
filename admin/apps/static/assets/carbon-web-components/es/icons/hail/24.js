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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<circle cx="21.5" cy="29.5" r="1.5"></circle><circle cx="24.5" cy="25.5" r="1.5"></circle><circle cx="7.5" cy="25.5" r="1.5"></circle><circle cx="4.5" cy="29.5" r="1.5"></circle><circle cx="10.499" cy="29.5" r="1.5"></circle><path d="M15.868 30.496L14.132 29.504 17.276 24 11.277 24 16.132 15.504 17.868 16.496 14.723 22 20.724 22 15.868 30.496z"></path><path d="M23.5,22H23V20h.5a4.4975,4.4975,0,0,0,.3564-8.981l-.8154-.0639-.0986-.812a6.9938,6.9938,0,0,0-13.8838,0l-.0991.812-.8155.0639A4.4975,4.4975,0,0,0,8.5,20H9v2H8.5A6.4973,6.4973,0,0,1,7.2,9.1362a8.9943,8.9943,0,0,1,17.6006,0A6.4974,6.4974,0,0,1,23.5,22Z"></path></svg>`;
export default svgResultCarbonIcon;

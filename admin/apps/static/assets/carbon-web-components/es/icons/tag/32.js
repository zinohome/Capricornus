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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M10,14a4,4,0,1,1,4-4A4.0045,4.0045,0,0,1,10,14Zm0-6a2,2,0,1,0,1.998,2.0044A2.002,2.002,0,0,0,10,8Z"></path><path d="M16.6436,29.4145,2.5858,15.3555A2,2,0,0,1,2,13.9414V4A2,2,0,0,1,4,2h9.9413a2,2,0,0,1,1.4142.5858L29.4144,16.6436a2.0005,2.0005,0,0,1,0,2.8285l-9.9424,9.9425a2.0008,2.0008,0,0,1-2.8285,0ZM4,4v9.9417L18.0578,28,28,18.0579,13.9416,4Z"></path></svg>`;
export default svgResultCarbonIcon;

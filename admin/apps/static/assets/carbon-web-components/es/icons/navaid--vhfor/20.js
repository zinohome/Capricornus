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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M22,28H10a1,1,0,0,1-.8438-.4631l-7-11a1,1,0,0,1,0-1.0738l7-11A1,1,0,0,1,10,4H22a1,1,0,0,1,.8438.4631l7,11a1,1,0,0,1,0,1.0738l-7,11A1,1,0,0,1,22,28ZM10.5488,26H21.4512l6.3633-10L21.4512,6H10.5488L4.1855,16Z"></path><path d="M19.5,24h-7a1.0005,1.0005,0,0,1-.8413-.4592l-4.5-7a1.0016,1.0016,0,0,1,0-1.0816l4.5-7A1.0005,1.0005,0,0,1,12.5,8h7a1.0005,1.0005,0,0,1,.8413.4592l4.5,7a1.0016,1.0016,0,0,1,0,1.0816l-4.5,7A1.0005,1.0005,0,0,1,19.5,24Zm-6.4541-2h5.9082l3.8569-6-3.8569-6H13.0459L9.189,16Z"></path></svg>`;
export default svgResultCarbonIcon;

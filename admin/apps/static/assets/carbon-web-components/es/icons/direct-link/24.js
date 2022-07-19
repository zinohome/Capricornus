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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M20.4131,14.584,12.416,6.5869a2.0016,2.0016,0,0,0-2.832,0L1.5869,14.584a2.0016,2.0016,0,0,0,0,2.832l3.2915,3.2915L3,22.5859,4.4141,24l1.8784-1.8784L9.584,25.4131a2.0016,2.0016,0,0,0,2.832,0l2.2559-2.2559-1.4156-1.4155L10.998,23.999,3.001,16.002l7.997-8.001,8.001,8.001L17.5,17.5l1.4146,1.4146,1.4985-1.4986a2.0016,2.0016,0,0,0,0-2.832Z"></path><path d="M30.4131,14.584l-3.2915-3.2915L29,9.4141,27.5859,8,25.7075,9.8784,22.416,6.5869a2.0016,2.0016,0,0,0-2.832,0L17.3281,8.8428l1.4146,1.4145L20.998,8.001l8.001,8.001-8.001,7.997-7.997-7.997,1.5-1.501-1.4156-1.4156L11.5869,14.584a2.0016,2.0016,0,0,0,0,2.832l7.9971,7.9971a2.0016,2.0016,0,0,0,2.832,0l7.9971-7.9971a2.0016,2.0016,0,0,0,0-2.832Z"></path></svg>`;
export default svgResultCarbonIcon;

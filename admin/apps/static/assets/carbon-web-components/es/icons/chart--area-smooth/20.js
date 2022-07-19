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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M30,6.6143l-1.3152.4365A20.9218,20.9218,0,0,1,23,8c-1.7344,0-3.3225-.9072-5.0039-1.8682C16.1621,5.084,14.2656,4,12,4,9.123,4,5.9146,6.2061,4,7.772V2H2V28a2.0025,2.0025,0,0,0,2,2H30ZM4,20.2944C5.874,17.3765,9.56,13,12,13c1.6379,0,2.96,1.1016,4.36,2.2686C17.8965,16.5488,19.6379,18,22,18a9.4686,9.4686,0,0,0,6-2.5288v4.9556A13.0026,13.0026,0,0,1,22,22a13.8619,13.8619,0,0,1-4.6838-.9487A15.682,15.682,0,0,0,12,20c-2.927,0-6.0676,2.959-8,5.1577ZM12,6c1.7344,0,3.3225.9072,5.0039,1.8682C18.8379,8.916,20.7344,10,23,10a21.432,21.432,0,0,0,5-.6782v3.3213C27.3167,13.4463,24.9155,16,22,16c-1.6379,0-2.96-1.1016-4.36-2.2686C16.1035,12.4512,14.3621,11,12,11c-2.9358,0-6.0632,3.3394-8,5.8447V10.4238C5.5461,8.9658,9.2588,6,12,6ZM4.249,28C5.8623,25.9087,9.41,22,12,22a13.8619,13.8619,0,0,1,4.6838.9487A15.682,15.682,0,0,0,22,24a14.7362,14.7362,0,0,0,6-1.34V28Z"></path></svg>`;
export default svgResultCarbonIcon;

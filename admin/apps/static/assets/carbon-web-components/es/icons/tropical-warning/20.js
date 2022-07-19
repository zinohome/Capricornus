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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M27.9487,25.6836a1,1,0,0,0-1.8955-.0049A3.44,3.44,0,0,1,23,28a3.44,3.44,0,0,1-3.0532-2.3213,1,1,0,0,0-1.8955.0049A3.4376,3.4376,0,0,1,15,28h-.4336C13.9241,26.7939,12,22.312,12,12v-.1313l1.1169.7446A6.46,6.46,0,0,1,14.4346,13.79l1.0007-1.8418a8.4469,8.4469,0,0,0-1.209-.9986L12.8025,10h1.5308a6.9861,6.9861,0,0,1,1.9934.3071l.9755-1.7954A9.0059,9.0059,0,0,0,14.3333,8H13.1169A7.0329,7.0329,0,0,1,18,6h.6669l1.0867-2H18a9.0361,9.0361,0,0,0-7,3.3638A9.0362,9.0362,0,0,0,4,4H2V6H4A7.0308,7.0308,0,0,1,8.8828,8H7.6665a9.06,9.06,0,0,0-5.4,1.8L.4,11.2l1.2,1.6L3.4668,11.4a7.04,7.04,0,0,1,4.2-1.4H9.1973l-1.4239.9492A8.457,8.457,0,0,0,4,18H6a6.46,6.46,0,0,1,2.8828-5.3867L10,11.8687V12c0,8.9365,1.3994,13.7539,2.355,16H2v2H15a4.9316,4.9316,0,0,0,4-1.9873,5.0192,5.0192,0,0,0,8,0,4.9955,4.9955,0,0,0,3,1.8833V27.8125A3.7616,3.7616,0,0,1,27.9487,25.6836Z"></path><path fill="none" d="M23.75,10h-1.5V6h1.5ZM23,11a1,1,0,1,0,1,1A1,1,0,0,0,23,11Z"></path><path d="M29.9115,13.9355,23.6284,2.3706a.7181.7181,0,0,0-1.2568,0L16.0885,13.9355A.72.72,0,0,0,16.72,15H29.28A.72.72,0,0,0,29.9115,13.9355ZM22.25,6h1.5v4h-1.5ZM23,13a1,1,0,1,1,1-1A1,1,0,0,1,23,13Z"></path></svg>`;
export default svgResultCarbonIcon;

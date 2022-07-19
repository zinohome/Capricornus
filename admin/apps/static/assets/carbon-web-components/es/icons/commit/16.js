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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M30,15H21.91A5.9925,5.9925,0,0,0,10.09,15H2v2h8.09A5.9925,5.9925,0,0,0,21.91,17H30ZM16,20a4,4,0,1,1,4-4A4.0045,4.0045,0,0,1,16,20Z"></path></svg>`;
export default svgResultCarbonIcon;

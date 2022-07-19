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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M3,10V22a2.002,2.002,0,0,0,2,2H27a2.0023,2.0023,0,0,0,2-2V10a2.0027,2.0027,0,0,0-2-2H5A2.0023,2.0023,0,0,0,3,10Zm2,0,2,0V22H5ZM27,22H9V10H27Z"></path></svg>`;
export default svgResultCarbonIcon;

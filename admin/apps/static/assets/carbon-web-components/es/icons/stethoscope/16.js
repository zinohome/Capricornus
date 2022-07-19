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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M24,2V4h2v6a4,4,0,0,1-8,0V4h2V2H16v8a6.0051,6.0051,0,0,0,5,5.91V22A6,6,0,0,1,9,22V15.8579a4,4,0,1,0-2,0V22a8,8,0,0,0,16,0V15.91A6.0051,6.0051,0,0,0,28,10V2ZM6,12a2,2,0,1,1,2,2A2.0023,2.0023,0,0,1,6,12Z"></path></svg>`;
export default svgResultCarbonIcon;

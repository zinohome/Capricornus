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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M26,6V8.17L5.64,11.87a2,2,0,0,0-1.64,2v4.34a2,2,0,0,0,1.64,2L8,20.56V24a2,2,0,0,0,2,2h8a2,2,0,0,0,2-2V22.74l6,1.09V26h2V6ZM18,24H10V20.93l8,1.45ZM6,18.17V13.83L26,10.2V21.8Z"></path></svg>`;
export default svgResultCarbonIcon;

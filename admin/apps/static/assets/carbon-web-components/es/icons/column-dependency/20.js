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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M30,10V2H22V5H17a2.0023,2.0023,0,0,0-2,2v8H10V12H2v8h8V17h5v8a2.0023,2.0023,0,0,0,2,2h5v3h8V22H22v3H17V17h5v3h8V12H22v3H17V7h5v3ZM8,18H4V14H8Zm16,6h4v4H24Zm0-10h4v4H24ZM24,4h4V8H24Z"></path></svg>`;
export default svgResultCarbonIcon;

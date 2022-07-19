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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M30,22H17V20h9V14H17V12h5V6H17V2H15V6H10v6h5v2H6v6h9v2H2v6H15v2h2V28H30ZM20,8v2H17V8Zm-8,2V8h3v2Zm12,6v2H17V16ZM8,18V16h7v2ZM4,26V24H15v2Zm24,0H17V24H28Z"></path></svg>`;
export default svgResultCarbonIcon;

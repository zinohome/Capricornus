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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M4 22H2V4A2.0023 2.0023 0 014 2H22V4H4zM21 17a3 3 0 10-3-3A3.0033 3.0033 0 0021 17zm0-4a1 1 0 11-1 1A1.0009 1.0009 0 0121 13z"></path><path d="M28,7H9A2.0025,2.0025,0,0,0,7,9V28a2.0025,2.0025,0,0,0,2,2H28a2.0025,2.0025,0,0,0,2-2V9A2.0025,2.0025,0,0,0,28,7Zm0,21H9v-6l4-3.9971,5.5859,5.586a2,2,0,0,0,2.8282,0L23,22.0034,28,27Zm0-3.8281-3.5859-3.586a2,2,0,0,0-2.8282,0L20,22.1719l-5.5859-5.586a2,2,0,0,0-2.8282,0L9,19.1719V9H28Z"></path></svg>`;
export default svgResultCarbonIcon;

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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<circle cx="16" cy="16" r="2"></circle><path d="M30.8638,15.4961l-7-12A1,1,0,0,0,23,3H9a1,1,0,0,0-.8638.4961l-7,12a1,1,0,0,0,0,1.0078l7,12A1,1,0,0,0,9,29H23a1,1,0,0,0,.8638-.4961l7-12a1,1,0,0,0,0-1.0078ZM22.4258,27H9.5742L3.1577,16,9.5742,5H22.4258l6.4165,11Z"></path></svg>`;
export default svgResultCarbonIcon;

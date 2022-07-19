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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M16,12a3.0033,3.0033,0,0,0-3,3v3h6V15A3.0033,3.0033,0,0,0,16,12Z"></path><path d="M16,6a9.0092,9.0092,0,0,0-9,9V28H25V15A9.01,9.01,0,0,0,16,6Zm5,14H11V15a5,5,0,0,1,10,0Z"></path><path d="M29,15H27A11,11,0,0,0,5,15H3a13,13,0,0,1,26,0Z"></path></svg>`;
export default svgResultCarbonIcon;

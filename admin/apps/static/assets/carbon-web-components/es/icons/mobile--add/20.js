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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M28 24L24 24 24 20 22 20 22 24 18 24 18 26 22 26 22 30 24 30 24 26 28 26 28 24z"></path><path d="M10,28V10H22v7h2V6a2.0023,2.0023,0,0,0-2-2H10A2.002,2.002,0,0,0,8,6V28a2.0023,2.0023,0,0,0,2,2h6l0-2ZM10,6H22l0,2H10Z"></path></svg>`;
export default svgResultCarbonIcon;

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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M16,23H12V9h4a4.0045,4.0045,0,0,1,4,4v6A4.0042,4.0042,0,0,1,16,23Zm-2-2h2a2.0023,2.0023,0,0,0,2-2V13a2.002,2.002,0,0,0-2-2H14Z"></path></svg>`;
export default svgResultCarbonIcon;

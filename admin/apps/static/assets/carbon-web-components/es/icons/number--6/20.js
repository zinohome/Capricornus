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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M18,14H14V11h5V9H14a2,2,0,0,0-2,2V21a2,2,0,0,0,2,2h4a2,2,0,0,0,2-2V16A2,2,0,0,0,18,14Zm-4,7V16h4v5Z"></path></svg>`;
export default svgResultCarbonIcon;

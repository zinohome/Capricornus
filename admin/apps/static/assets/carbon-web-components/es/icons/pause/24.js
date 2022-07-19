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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M12 8V24H8V8h4m0-2H8A2 2 0 006 8V24a2 2 0 002 2h4a2 2 0 002-2V8a2 2 0 00-2-2zM24 8V24H20V8h4m0-2H20a2 2 0 00-2 2V24a2 2 0 002 2h4a2 2 0 002-2V8a2 2 0 00-2-2z"></path></svg>`;
export default svgResultCarbonIcon;

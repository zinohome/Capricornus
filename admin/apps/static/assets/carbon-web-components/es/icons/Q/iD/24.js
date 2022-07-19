/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { svg } from 'lit-html';
import spread from '../../../globals/directives/spread';
const svgResultCarbonIcon = ({ children, ...attrs } = {}) =>
  svg`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${spread(
    attrs
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M10 9H12V11H10zM18 23H14V9h4a4 4 0 014 4v6A4 4 0 0118 23zm-2-2h2a2 2 0 002-2V13a2 2 0 00-2-2H16zM10 13H12V23H10z"></path></svg>`;
export default svgResultCarbonIcon;

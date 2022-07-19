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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M10 10H2V2h8zM4 8H8V4H4zM30 30H22V22h8zm-6-2h4V24H24zM20 27H8A6 6 0 018 15v2a4 4 0 000 8H20zM24 17V15a4 4 0 000-8H12V5H24a6 6 0 010 12z"></path><path d="M19,11H13l-3,4,6,6,6-6Z"></path></svg>`;
export default svgResultCarbonIcon;

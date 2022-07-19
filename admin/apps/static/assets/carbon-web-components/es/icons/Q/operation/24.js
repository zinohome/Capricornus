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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M23 26L21 26 26 16 21 6 23 6 28 16 23 26zM4 6H6V26H4zM16 9H12a2 2 0 00-2 2V21a2 2 0 002 2h4a2 2 0 002-2V11A2 2 0 0016 9zm0 12H12V11h4z"></path><path d="M13 15H15V17H13z"></path></svg>`;
export default svgResultCarbonIcon;

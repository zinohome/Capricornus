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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path fill="none" d="M13 15L13 23 13 23 20 19 13 15z" data-icon-path="inner-path"></path><path d="M26 10H6a2.0023 2.0023 0 00-2 2V26a2.0023 2.0023 0 002 2H26a2.0023 2.0023 0 002-2V12A2.0023 2.0023 0 0026 10zM13 23h0V15l7 4zM6 6H26V8H6zM8 2H24V4H8z"></path></svg>`;
export default svgResultCarbonIcon;

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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M2 26H30V28H2zM24 23H20a2.0023 2.0023 0 01-2-2V14a2.0023 2.0023 0 012-2h4a2.0023 2.0023 0 012 2v7A2.0023 2.0023 0 0124 23zm-4-9v7h4.0012L24 14zM12 23H8a2.0023 2.0023 0 01-2-2V6A2.0023 2.0023 0 018 4h4a2.0023 2.0023 0 012 2V21A2.0023 2.0023 0 0112 23zM8 6V21h4.0012L12 6z"></path></svg>`;
export default svgResultCarbonIcon;

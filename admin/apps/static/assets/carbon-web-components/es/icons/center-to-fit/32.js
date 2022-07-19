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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M8 2L2 2 2 8 4 8 4 4 8 4 8 2zM24 2L30 2 30 8 28 8 28 4 24 4 24 2zM8 30L2 30 2 24 4 24 4 28 8 28 8 30zM24 30L30 30 30 24 28 24 28 28 24 28 24 30zM24 24H8a2.0023 2.0023 0 01-2-2V10A2.0023 2.0023 0 018 8H24a2.0023 2.0023 0 012 2V22A2.0023 2.0023 0 0124 24zM8 10V22H24V10z"></path></svg>`;
export default svgResultCarbonIcon;

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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M4 2A2 2 0 002 4V20l1 2 1-2V4H8V14l1 2 1-2V2zM28 2H14v8l1 2 1-2V4h2V17l1 2 1-2V4h4V14l1 2 1-2V4h2V24l1 2 1-2V4A2 2 0 0028 2zM14 28L13 30 12 28 12 16 14 16 14 28z"></path><path d="M24 26L23 28 22 26 22 20 24 20 24 26zM8 24L7 26 6 24 6 18 8 18 8 24z"></path></svg>`;
export default svgResultCarbonIcon;

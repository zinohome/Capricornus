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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M30 6L26 6 26 2 24 2 24 6 20 6 20 8 24 8 24 12 26 12 26 8 30 8 30 6zM24 15v7.5562A3.9552 3.9552 0 0022 22a4 4 0 104 4V15zM22 28a2 2 0 112-2A2.0027 2.0027 0 0122 28zM17 6H10A2.002 2.002 0 008 8V22.5562A3.9557 3.9557 0 006 22a4 4 0 104 4V8h7zM6 28a2 2 0 112-2A2.0023 2.0023 0 016 28z"></path></svg>`;
export default svgResultCarbonIcon;

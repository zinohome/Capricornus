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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M28 25H20a2.0027 2.0027 0 01-2-2V20h2v3h8V9H20v3H18V9a2.0023 2.0023 0 012-2h8a2.0023 2.0023 0 012 2V23A2.0027 2.0027 0 0128 25zM8 15H12V17H8z"></path><path d="M20 15H24V17H20zM14 15H18V17H14zM12 25H4a2.0023 2.0023 0 01-2-2V9A2.002 2.002 0 014 7h8a2.002 2.002 0 012 2v3H12V9H4V23h8V20h2v3A2.0023 2.0023 0 0112 25z"></path></svg>`;
export default svgResultCarbonIcon;

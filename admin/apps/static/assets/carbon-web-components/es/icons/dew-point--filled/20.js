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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M24 10a4 4 0 114-4A4.0045 4.0045 0 0124 10zm0-6a2 2 0 102 2A2.0021 2.0021 0 0024 4zM14.5 30A5.4962 5.4962 0 019 24.52c0-3.4426 4.3442-21.0141 4.5293-21.76a1 1 0 011.9414 0C15.6558 3.5059 20 21.0774 20 24.52A5.4962 5.4962 0 0114.5 30z"></path></svg>`;
export default svgResultCarbonIcon;

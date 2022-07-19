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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<circle cx="10" cy="20" r="2"></circle><circle cx="10" cy="28" r="2"></circle><circle cx="10" cy="14" r="2"></circle><circle cx="28" cy="4" r="2"></circle><circle cx="22" cy="6" r="2"></circle><circle cx="28" cy="10" r="2"></circle><circle cx="20" cy="12" r="2"></circle><circle cx="28" cy="22" r="2"></circle><circle cx="26" cy="28" r="2"></circle><circle cx="20" cy="26" r="2"></circle><circle cx="22" cy="20" r="2"></circle><circle cx="16" cy="4" r="2"></circle><circle cx="4" cy="24" r="2"></circle><circle cx="4" cy="16" r="2"></circle></svg>`;
export default svgResultCarbonIcon;

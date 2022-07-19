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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M2 16H7V30H2zM23 30H9V15.1973l3.0422-4.5635.8453-5.9165A2.0094 2.0094 0 0114.8672 3H15a3.0033 3.0033 0 013 3v6h8a4.0045 4.0045 0 014 4v7A7.0078 7.0078 0 0123 30z"></path></svg>`;
export default svgResultCarbonIcon;

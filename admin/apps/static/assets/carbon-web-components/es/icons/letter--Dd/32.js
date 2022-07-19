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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M23 9v4H19a2 2 0 00-2 2v6a2 2 0 002 2h6V9zm-4 6h4v6H19zM11 23H7V9h4a4 4 0 014 4v6A4 4 0 0111 23zM9 21h2a2 2 0 002-2V13a2 2 0 00-2-2H9z"></path></svg>`;
export default svgResultCarbonIcon;

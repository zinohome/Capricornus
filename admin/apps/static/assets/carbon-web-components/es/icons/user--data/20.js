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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M28 8H30V16H28zM23 5H25V16H23zM18 10H20V16H18zM16 30H14V24a3.0033 3.0033 0 00-3-3H7a3.0033 3.0033 0 00-3 3v6H2V24a5.0059 5.0059 0 015-5h4a5.0059 5.0059 0 015 5zM9 9a3 3 0 11-3 3A3 3 0 019 9M9 7a5 5 0 105 5A5 5 0 009 7z"></path></svg>`;
export default svgResultCarbonIcon;

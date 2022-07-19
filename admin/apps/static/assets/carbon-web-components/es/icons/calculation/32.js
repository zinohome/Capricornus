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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M14 8L10 8 10 4 8 4 8 8 4 8 4 10 8 10 8 14 10 14 10 10 14 10 14 8zM4 19H14V21H4zM4 24H14V26H4zM18 8H28V10H18zM24.41 22L28 18.41 26.59 17 23 20.59 19.41 17 18 18.41 21.59 22 18 25.59 19.41 27 23 23.41 26.59 27 28 25.59 24.41 22z"></path></svg>`;
export default svgResultCarbonIcon;

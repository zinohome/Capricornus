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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M20 6a9.9539 9.9539 0 00-4 .8379 9.9953 9.9953 0 010 18.3242A9.9988 9.9988 0 1020 6zM10 16a9.9976 9.9976 0 016-9.1621 10 10 0 100 18.3242A9.9976 9.9976 0 0110 16z"></path></svg>`;
export default svgResultCarbonIcon;

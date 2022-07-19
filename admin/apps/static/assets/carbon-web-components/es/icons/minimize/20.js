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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M4 18L4 20 10.586 20 2 28.582 3.414 30 12 21.414 12 28 14 28 14 18 4 18zM30 3.416L28.592 2 20 10.586 20 4 18 4 18 14 28 14 28 12 21.414 12 30 3.416z"></path></svg>`;
export default svgResultCarbonIcon;

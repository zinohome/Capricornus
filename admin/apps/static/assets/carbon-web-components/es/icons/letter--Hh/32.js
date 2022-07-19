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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M13 9L13 15 9 15 9 9 7 9 7 23 9 23 9 17 13 17 13 23 15 23 15 9 13 9zM23 13H19V9H17V23h2V15h4v8h2V15A2 2 0 0023 13z"></path></svg>`;
export default svgResultCarbonIcon;

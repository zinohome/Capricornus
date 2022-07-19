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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M6 12L4 12 4 4 12 4 12 6 6 6 6 12zM28 12L26 12 26 6 20 6 20 4 28 4 28 12zM12 28L4 28 4 20 6 20 6 26 12 26 12 28zM28 28L20 28 20 26 26 26 26 20 28 20 28 28zM15 10H17V14H15zM10 15H14V17H10zM18 15H22V17H18zM15 18H17V22H15z"></path></svg>`;
export default svgResultCarbonIcon;

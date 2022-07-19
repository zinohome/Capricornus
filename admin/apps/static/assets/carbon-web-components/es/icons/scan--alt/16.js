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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M22 24H10a2 2 0 01-2-2V19h2v3H22V19h2v3A2 2 0 0122 24zM2 15H30V17H2zM24 13H22V10H10v3H8V10a2 2 0 012-2H22a2 2 0 012 2zM30 10L28 10 28 4 22 4 22 2 30 2 30 10zM4 10L2 10 2 2 10 2 10 4 4 4 4 10zM10 30L2 30 2 22 4 22 4 28 10 28 10 30zM30 30L22 30 22 28 28 28 28 22 30 22 30 30z"></path></svg>`;
export default svgResultCarbonIcon;

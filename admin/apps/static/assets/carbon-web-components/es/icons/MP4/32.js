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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M28 10v8h0V10m1-1H27v8H24V9H22V19h5v4h2V19h1V17H29V9zM14 23H12V9h6a2 2 0 012 2v5a2 2 0 01-2 2H14zm0-7h4V11H14zM8 9L6.49 14 6 15.98 5.54 14 4 9 2 9 2 23 4 23 4 15 3.84 13 4.42 15 6 19.63 7.58 15 8.16 13 8 15 8 23 10 23 10 9 8 9z"></path></svg>`;
export default svgResultCarbonIcon;

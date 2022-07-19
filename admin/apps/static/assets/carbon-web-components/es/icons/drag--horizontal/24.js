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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M12 4L12 15 5.83 15 8.41 12.41 7 11 2 16 7 21 8.41 19.59 5.83 17 12 17 12 28 14 28 14 4 12 4zM25 11L23.59 12.41 26.17 15 20 15 20 4 18 4 18 28 20 28 20 17 26.17 17 23.59 19.59 25 21 30 16 25 11z"></path></svg>`;
export default svgResultCarbonIcon;

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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M26.41 25L30 21.41 28.59 20 25 23.59 21.41 20 20 21.41 23.59 25 20 28.59 21.41 30 25 26.41 28.59 30 30 28.59 26.41 25zM18 2A12.0351 12.0351 0 006 14v6.2L2.4 16.6 1 18l6 6 6-6-1.4-1.4L8 20.2V14a10 10 0 0120 0v3h2V14A12.0351 12.0351 0 0018 2z"></path></svg>`;
export default svgResultCarbonIcon;

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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M24 13H16V23h2V15h2v8h2V15h2v8h2V15A2 2 0 0024 13zM12 9L10.48 14 10 15.98 9.54 14 8 9 6 9 6 23 8 23 8 15 7.84 13 8.42 15 10 19.63 11.58 15 12.16 13 12 15 12 23 14 23 14 9 12 9z"></path></svg>`;
export default svgResultCarbonIcon;

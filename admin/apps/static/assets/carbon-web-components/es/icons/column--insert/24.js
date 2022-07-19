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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M28 30H22a2.0021 2.0021 0 01-2-2V10a2.0021 2.0021 0 012-2h6a2.0021 2.0021 0 012 2V28A2.0021 2.0021 0 0128 30zM22 10V28h6V10zM16 9L21.586 3.414 20.172 2 16 6.172 11.828 2 10.414 3.414 16 9zM10 30H4a2.0021 2.0021 0 01-2-2V10A2.0021 2.0021 0 014 8h6a2.0021 2.0021 0 012 2V28A2.0021 2.0021 0 0110 30zM4 10V28h6V10z"></path></svg>`;
export default svgResultCarbonIcon;

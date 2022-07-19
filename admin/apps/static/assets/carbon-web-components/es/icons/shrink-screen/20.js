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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M28 28H17a2.0023 2.0023 0 01-2-2V20a2.0023 2.0023 0 012-2H28a2.0027 2.0027 0 012 2v6A2.0027 2.0027 0 0128 28zM17 20v6H28.002L28 20zM12 10L12 13.586 7.707 9.293 6.293 10.707 10.586 15 7 15 7 17 14 17 14 10 12 10z"></path><path d="M13,22H4a2.0023,2.0023,0,0,1-2-2V7A2.002,2.002,0,0,1,4,5H26a2.0023,2.0023,0,0,1,2,2v9H26V7H4V20h9Z"></path></svg>`;
export default svgResultCarbonIcon;

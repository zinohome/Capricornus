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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M16,30A14.0158,14.0158,0,0,1,2,16H4A12,12,0,1,0,16,4V2a14,14,0,0,1,0,28Z"></path><path d="M4 12L4 10 8.586 10 2 3.414 3.414 2 10 8.586 10 4 12 4 12 12 4 12zM16 10v6H10a6 6 0 106-6z"></path></svg>`;
export default svgResultCarbonIcon;

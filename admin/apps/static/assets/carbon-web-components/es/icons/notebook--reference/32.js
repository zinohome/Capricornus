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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M4 20L4 22 7.586 22 2 27.586 3.414 29 9 23.414 9 27 11 27 11 20 4 20zM19 10H26V12H19zM19 15H26V17H19zM19 20H26V22H19z"></path><path d="M28,5H4A2.002,2.002,0,0,0,2,7V17H4V7H15V27H28a2.002,2.002,0,0,0,2-2V7A2.002,2.002,0,0,0,28,5ZM17,25V7H28l.0015,18Z"></path></svg>`;
export default svgResultCarbonIcon;

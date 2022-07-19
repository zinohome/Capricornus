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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M30,30H4a2.0023,2.0023,0,0,1-2-2V2H4V28H30Z"></path><circle cx="9" cy="6" r="3"></circle><circle cx="9" cy="22" r="3"></circle><circle cx="18" cy="14" r="3"></circle><path d="M9,17a3,3,0,1,1,3-3A3.0033,3.0033,0,0,1,9,17Zm0-4a1,1,0,1,0,1,1A1.001,1.001,0,0,0,9,13Z"></path><circle cx="27" cy="6" r="3"></circle><circle cx="27" cy="22" r="3"></circle><path d="M27 17a3 3 0 113-3A3.0033 3.0033 0 0127 17zm0-4a1 1 0 101 1A1.001 1.001 0 0027 13zM18 26a3 3 0 113-3A3.0033 3.0033 0 0118 26zm0-4a1 1 0 101 1A1.001 1.001 0 0018 22zM18 8a3 3 0 113-3A3.0033 3.0033 0 0118 8zm0-4a1 1 0 101 1A1.001 1.001 0 0018 4z"></path></svg>`;
export default svgResultCarbonIcon;

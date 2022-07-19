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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M6 22L7.414 20.586 3.828 17 12 17 12 15 3.828 15 7.414 11.414 6 10 0 16 6 22z"></path><path d="M16,10a5.9815,5.9815,0,0,0-4.2427,1.7573L16,16l-4.2427,4.2427A6,6,0,1,0,16,10Z"></path><path d="M16,2A13.9581,13.9581,0,0,0,6.105,6.105L7.5188,7.5186a12,12,0,1,1,0,16.9628L6.105,25.895A13.9974,13.9974,0,1,0,16,2Z"></path></svg>`;
export default svgResultCarbonIcon;

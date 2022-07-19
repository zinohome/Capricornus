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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M24 2H26V9H24z"></path><rect width="3" height="3" x="23.5" y="11" rx="1.5"></rect><path d="M23.8218,18H15.083L11.8643,5.9653a4,4,0,0,0-7.7276,2.07L8.5454,24.5168A2,2,0,0,0,10.4775,26H19v2H4v2H19a2,2,0,0,0,2-2V26h3a4.0046,4.0046,0,0,0,3.98-4.4A4.1215,4.1215,0,0,0,23.8218,18ZM24,24H10.4775L6.0686,7.5181A2,2,0,1,1,9.9324,6.4829L13.5466,20H24a2,2,0,0,1,0,4Z"></path></svg>`;
export default svgResultCarbonIcon;

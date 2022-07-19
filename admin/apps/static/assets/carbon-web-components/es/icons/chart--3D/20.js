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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M28,23v3.5859l-5-5V15a1,1,0,0,0-.5527-.8945L17,11.3818V5.8281l2.5859,2.586L21,7,16,2,11,7l1.4141,1.4141L15,5.8281v5.5537L9.5527,14.1055A1,1,0,0,0,9,15v6.5859l-5,5V23H2v7H9V28H5.4141l4.7832-4.7832,5.3554,2.6777a1.001,1.001,0,0,0,.8946,0l5.3554-2.6777L26.5859,28H23v2h7V23Zm-13,.3818-4-2V16.6182l4,2Zm1-6.5L12.2363,15,16,13.1182,19.7637,15Zm5,4.5-4,2V18.6182l4-2Z"></path></svg>`;
export default svgResultCarbonIcon;

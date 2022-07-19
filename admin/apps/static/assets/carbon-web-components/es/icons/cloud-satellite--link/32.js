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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M30.9763,24.9748l-5.0015,5.0015a3.501,3.501,0,0,1-4.9511-4.9511L22.4383,26.44A1.5,1.5,0,0,0,24.56,28.5617L29.5617,23.56A1.5,1.5,0,0,0,27.44,21.4383l-1.4146-1.4146a3.501,3.501,0,0,1,4.9511,4.9511Z"></path><path d="M20.0252,21.0237l-5.0015,5.0015a3.501,3.501,0,0,0,4.9511,4.9511L18.56,29.5617A1.5,1.5,0,0,1,16.4383,27.44L21.44,22.4383A1.5,1.5,0,0,1,23.5617,24.56l1.4146,1.4146a3.501,3.501,0,0,0-4.9511-4.9511Z"></path><circle cx="7" cy="20" r="2"></circle><path d="M14,20a4,4,0,1,1,4-4A4.0118,4.0118,0,0,1,14,20Zm0-6a2,2,0,1,0,2,2A2.0059,2.0059,0,0,0,14,14Z"></path><circle cx="21" cy="12" r="2"></circle><path d="M11.3076,27.2725,3,22.4258V9.5742L14,3.1577,25.4961,9.8638l1.0078-1.7276-12-7a1,1,0,0,0-1.0078,0l-12,7A.9994.9994,0,0,0,1,9V23a1.0008,1.0008,0,0,0,.4961.8643L10.3,29Z"></path></svg>`;
export default svgResultCarbonIcon;

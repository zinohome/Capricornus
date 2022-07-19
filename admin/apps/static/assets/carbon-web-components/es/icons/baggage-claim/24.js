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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<circle cx="6" cy="26" r="2"></circle><path d="M28,18H25V16a2.0023,2.0023,0,0,0-2-2H19a2.0023,2.0023,0,0,0-2,2v2H14a2.0023,2.0023,0,0,0-2,2v8a2.0023,2.0023,0,0,0,2,2H28a2.0023,2.0023,0,0,0,2-2V20A2.0023,2.0023,0,0,0,28,18Zm-9-2h4v2H19Zm9,12H14V20H28Z"></path><path d="M10,6h4v6h2V6h4v6h2V6h4v6h2V6.0049A2.0047,2.0047,0,0,0,25.9951,4H4.0049A2.0047,2.0047,0,0,0,2,6.0049v13.99A2.0047,2.0047,0,0,0,4.0049,22H10ZM8,20H4V6H8Z"></path></svg>`;
export default svgResultCarbonIcon;

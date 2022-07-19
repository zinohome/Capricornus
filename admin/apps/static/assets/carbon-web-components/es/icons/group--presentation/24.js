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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M10 30H8V27H4v3H2V27a2.0023 2.0023 0 012-2H8a2.0023 2.0023 0 012 2zM30 30H28V27H24v3H22V27a2.0023 2.0023 0 012-2h4a2.0023 2.0023 0 012 2zM20 30H18V27H14v3H12V27a2.0023 2.0023 0 012-2h4a2.0023 2.0023 0 012 2z"></path><circle cx="16" cy="22" r="2"></circle><circle cx="6" cy="22" r="2"></circle><circle cx="26" cy="22" r="2"></circle><circle cx="21" cy="18" r="2"></circle><circle cx="11" cy="18" r="2"></circle><path d="M26,14H6a2.0023,2.0023,0,0,1-2-2V4A2.0023,2.0023,0,0,1,6,2H26a2.0023,2.0023,0,0,1,2,2v8A2.0023,2.0023,0,0,1,26,14ZM6,4v8H26V4Z"></path></svg>`;
export default svgResultCarbonIcon;

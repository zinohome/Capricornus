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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M30,17V15H17V11h2a2.0023,2.0023,0,0,0,2-2V4a2.0023,2.0023,0,0,0-2-2H13a2.0023,2.0023,0,0,0-2,2V9a2.0023,2.0023,0,0,0,2,2h2v4H2v2H8v4H6a2.0023,2.0023,0,0,0-2,2v5a2.0023,2.0023,0,0,0,2,2h6a2.0023,2.0023,0,0,0,2-2V23a2.0023,2.0023,0,0,0-2-2H10V17H22v4H20a2.0023,2.0023,0,0,0-2,2v5a2.0023,2.0023,0,0,0,2,2h6a2.0023,2.0023,0,0,0,2-2V23a2.0023,2.0023,0,0,0-2-2H24V17ZM13,4h6V9H13ZM12,28H6V23h6Zm14,0H20V23h6Z"></path></svg>`;
export default svgResultCarbonIcon;

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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M12 6H6A2 2 0 004 8v6a2 2 0 002 2h6a2 2 0 002-2V8A2 2 0 0012 6zM6 14V8h6v6zM26 6H20a2 2 0 00-2 2V24a2 2 0 002 2h6a2 2 0 002-2V8A2 2 0 0026 6zM20 24V8h6V24z"></path></svg>`;
export default svgResultCarbonIcon;

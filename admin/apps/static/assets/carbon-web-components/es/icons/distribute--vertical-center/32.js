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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M30 21H26V20a2.0023 2.0023 0 00-2-2H8a2.0023 2.0023 0 00-2 2v1H2v2H6v1a2.0023 2.0023 0 002 2H24a2.0023 2.0023 0 002-2V23h4zm-6 3H8V20l16-.001zM30 9H22V8a2.0023 2.0023 0 00-2-2H12a2.0023 2.0023 0 00-2 2V9H2v2h8v1a2.0023 2.0023 0 002 2h8a2.0023 2.0023 0 002-2V11h8zM20 12H12V8l8-.001z"></path></svg>`;
export default svgResultCarbonIcon;

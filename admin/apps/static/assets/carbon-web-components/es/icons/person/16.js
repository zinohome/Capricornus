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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M18 30H14a2 2 0 01-2-2V21a2 2 0 01-2-2V13a3 3 0 013-3h6a3 3 0 013 3v6a2 2 0 01-2 2v7A2 2 0 0118 30zM13 12a.94.94 0 00-1 1v6h2v9h4V19h2V13a.94.94 0 00-1-1zM16 9a4 4 0 114-4h0A4 4 0 0116 9zm0-6a2 2 0 102 2h0a2 2 0 00-2-2z"></path></svg>`;
export default svgResultCarbonIcon;

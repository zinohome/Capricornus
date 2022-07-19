/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { svg } from 'lit-html';
import spread from '../../../globals/directives/spread';
const svgResultCarbonIcon = ({ children, ...attrs } = {}) =>
  svg`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${spread(
    attrs
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M15 21a3 3 0 01-3 3h-.1a5 5 0 100 2H12a5 5 0 005-5zM7 28a3 3 0 113-3A3 3 0 017 28zM15 13H17V19H15zM25 2a5 5 0 00-4.9 4H20a5 5 0 00-5 5h2a3 3 0 013-3h.1A5 5 0 1025 2zm0 8a3 3 0 113-3A3 3 0 0125 10z"></path></svg>`;
export default svgResultCarbonIcon;

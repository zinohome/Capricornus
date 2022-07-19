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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M19 13a2 2 0 00-2 2v6a2 2 0 002 2h4v4h2V13zm4 8H19V15h4zM13 9H9a2 2 0 00-2 2V21a2 2 0 002 2h1v2a2 2 0 002 2h2V25H12V23h1a2 2 0 002-2V11A2 2 0 0013 9zM9 21V11h4V21z"></path></svg>`;
export default svgResultCarbonIcon;

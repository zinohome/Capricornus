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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M23 13H19V9H17V23h6a2 2 0 002-2V15A2 2 0 0023 13zm-4 8V15h4v6zM15 12a3 3 0 00-3-3H7V23h5a3 3 0 003-3V18a3 3 0 00-.78-2A3 3 0 0015 14zM9 11h3a1 1 0 011 1v2a1 1 0 01-1 1H9zm4 9a1 1 0 01-1 1H9V17h3a1 1 0 011 1z"></path></svg>`;
export default svgResultCarbonIcon;

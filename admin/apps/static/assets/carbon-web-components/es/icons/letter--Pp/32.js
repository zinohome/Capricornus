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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M23 13H17V27h2V23h4a2 2 0 002-2V15A2 2 0 0023 13zm-4 8V15h4v6zM9 23H7V9h6a2 2 0 012 2v5a2 2 0 01-2 2H9zm0-7h4V11H9z"></path></svg>`;
export default svgResultCarbonIcon;

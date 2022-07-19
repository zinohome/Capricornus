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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M23 13H18v2h5v2H19a2 2 0 00-2 2v2a2 2 0 002 2h6V15A2 2 0 0023 13zm0 8H19V19h4zM13 9H9a2 2 0 00-2 2V23H9V18h4v5h2V11A2 2 0 0013 9zM9 16V11h4v5z"></path></svg>`;
export default svgResultCarbonIcon;

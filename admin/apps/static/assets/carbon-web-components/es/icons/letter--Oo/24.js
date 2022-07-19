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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M23 23H19a2 2 0 01-2-2V15a2 2 0 012-2h4a2 2 0 012 2v6A2 2 0 0123 23zm-4-8v6h4V15zM13 23H9a2 2 0 01-2-2V11A2 2 0 019 9h4a2 2 0 012 2V21A2 2 0 0113 23zM9 11V21h4V11z"></path></svg>`;
export default svgResultCarbonIcon;

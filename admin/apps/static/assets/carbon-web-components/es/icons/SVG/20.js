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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M30 23H24a2 2 0 01-2-2V11a2 2 0 012-2h6v2H24V21h4V17H26V15h4zM18 9L16 22 14 9 12 9 14.52 23 17.48 23 20 9 18 9zM8 23H2V21H8V17H4a2 2 0 01-2-2V11A2 2 0 014 9h6v2H4v4H8a2 2 0 012 2v4A2 2 0 018 23z"></path></svg>`;
export default svgResultCarbonIcon;

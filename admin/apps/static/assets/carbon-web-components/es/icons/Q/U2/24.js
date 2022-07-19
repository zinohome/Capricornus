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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M13 23H9a2 2 0 01-2-2V9H9V21h4V9h2V21A2 2 0 0113 23zM25 23H17V17a2 2 0 012-2h4V11H17V9h6a2 2 0 012 2v4a2 2 0 01-2 2H19v4h6z"></path></svg>`;
export default svgResultCarbonIcon;

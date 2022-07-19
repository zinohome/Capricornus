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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16">${children}<path d="M8,2.4142,13.5858,8,8,13.5858,2.4142,8,8,2.4142M8,1,1,8l7,7,7-7L8,1Z"></path><path d="M8,2.4142,13.5858,8,8,13.5858,2.4142,8,8,2.4142"></path></svg>`;
export default svgResultCarbonIcon;

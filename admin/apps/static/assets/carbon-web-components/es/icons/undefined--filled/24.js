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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M29.4162,14.5905,17.41,2.5838a1.9937,1.9937,0,0,0-2.8192,0L2.5838,14.5905a1.9934,1.9934,0,0,0,0,2.819L14.5905,29.4162a1.9937,1.9937,0,0,0,2.8192,0L29.4162,17.41A1.9934,1.9934,0,0,0,29.4162,14.5905ZM21,18H11V14H21Z"></path><path fill="none" d="M11 14H21V18H11z" data-icon-path="inner-path"></path></svg>`;
export default svgResultCarbonIcon;

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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M2,16A14,14,0,1,0,16,2,14,14,0,0,0,2,16Zm6-1H20.15L14.57,9.3926,16,8l8,8-8,8-1.43-1.4272L20.15,17H8Z"></path><path fill="none" d="M16 8L14.57 9.393 20.15 15 8 15 8 17 20.15 17 14.57 22.573 16 24 24 16 16 8z" data-icon-path="inner-path"></path></svg>`;
export default svgResultCarbonIcon;

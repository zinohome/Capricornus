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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm8,15H11.85l5.58,5.5728L16,24,8,16l8-8,1.43,1.3926L11.85,15H24Z"></path><path fill="none" d="M16 8L17.43 9.393 11.85 15 24 15 24 17 11.85 17 17.43 22.573 16 24 8 16 16 8z" data-icon-path="inner-path"></path></svg>`;
export default svgResultCarbonIcon;

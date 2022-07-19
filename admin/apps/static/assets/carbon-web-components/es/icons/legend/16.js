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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M16 22H30V24H16z"></path><rect width="6" height="6" x="4" y="20" rx="1"></rect><path d="M16 8H30V10H16zM9.5 12h-5a.5.5 0 01-.4473-.7236l2.5-5.0224a.5206.5206 0 01.8945 0l2.5 5.0225A.5.5 0 019.5 12z"></path></svg>`;
export default svgResultCarbonIcon;

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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M12 16a4 4 0 104-4A4 4 0 0012 16zm6 0a2 2 0 11-2-2A2 2 0 0118 16zM16 27.17L10.4 21.58 9 23 16 30 23 23 21.59 21.59 16 27.17zM16 4.83L21.58 10.4 23 9 16 2 9 9 10.41 10.41 16 4.83z"></path></svg>`;
export default svgResultCarbonIcon;

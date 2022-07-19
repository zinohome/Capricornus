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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M28,2H17a2.002,2.002,0,0,0-2,2v6H4a2.002,2.002,0,0,0-2,2V28a2.0023,2.0023,0,0,0,2,2H15a2.0023,2.0023,0,0,0,2-2V22H28a2.0027,2.0027,0,0,0,2-2V4A2.0023,2.0023,0,0,0,28,2Zm0,2,0,4H17V4ZM15.0009,22H4V18H15ZM17,10H28.0007l.0005,4H17Zm-2,2v4H4V12ZM4,28V24H15.0011l0,4Zm13-8V16H28.0015l0,4Z"></path></svg>`;
export default svgResultCarbonIcon;

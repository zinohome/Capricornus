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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M4,18A12,12,0,1,0,16,6H12V1L6,7l6,6V8h4A10,10,0,1,1,6,18Z"></path><path d="M18.58,15.58H15.13L15,18.15H15a4.83,4.83,0,0,1,.26-.45,1.59,1.59,0,0,1,.33-.35,1.53,1.53,0,0,1,.44-.23,2,2,0,0,1,.6-.08,2.54,2.54,0,0,1,.92.16,2.06,2.06,0,0,1,.74.48,2.28,2.28,0,0,1,.5.77,2.73,2.73,0,0,1,.18,1,2.87,2.87,0,0,1-.19,1.07,2.36,2.36,0,0,1-.55.84,2.44,2.44,0,0,1-.89.55,3.23,3.23,0,0,1-1.21.2,3.79,3.79,0,0,1-.94-.11,3,3,0,0,1-.74-.32,2.45,2.45,0,0,1-.55-.45,4.13,4.13,0,0,1-.41-.55l1.06-.81.27.41a1.82,1.82,0,0,0,.34.34,1.59,1.59,0,0,0,.43.22,1.52,1.52,0,0,0,.55.08,1.29,1.29,0,0,0,1-.36,1.41,1.41,0,0,0,.33-1V19.5a1.18,1.18,0,0,0-1.28-1.27,1.44,1.44,0,0,0-.77.18,1.94,1.94,0,0,0-.48.39l-1.19-.17.29-4.31h4.52Z"></path></svg>`;
export default svgResultCarbonIcon;

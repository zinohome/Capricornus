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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path fill="none" d="M14.9 7.2H17.1V24.799H14.9z" data-icon-path="inner-path" transform="rotate(-45 16 16)"></path><path d="M16,2A13.914,13.914,0,0,0,2,16,13.914,13.914,0,0,0,16,30,13.914,13.914,0,0,0,30,16,13.914,13.914,0,0,0,16,2Zm5.4449,21L9,10.5557,10.5557,9,23,21.4448Z"></path></svg>`;
export default svgResultCarbonIcon;

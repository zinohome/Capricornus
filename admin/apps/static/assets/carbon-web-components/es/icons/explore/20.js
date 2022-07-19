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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M22.707,9.2931a.9992.9992,0,0,0-1.0234-.2417l-9,3a1.001,1.001,0,0,0-.6323.6323l-3,9a1,1,0,0,0,1.2651,1.2651l9-3a1.0013,1.0013,0,0,0,.6323-.6324l3-9A1,1,0,0,0,22.707,9.2931ZM11.5811,20.419l2.2094-6.6284L18.21,18.21Z"></path><path d="M16,30A14,14,0,1,1,30,16,14.0158,14.0158,0,0,1,16,30ZM16,4A12,12,0,1,0,28,16,12.0137,12.0137,0,0,0,16,4Z"></path></svg>`;
export default svgResultCarbonIcon;

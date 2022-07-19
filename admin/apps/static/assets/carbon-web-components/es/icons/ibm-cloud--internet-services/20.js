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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M27.7983,10a10,10,0,0,0-19.62.124A7.4964,7.4964,0,0,0,9.5,25H11V23H9.5a5.4961,5.4961,0,0,1-.377-10.9795l.8365-.0571.09-.8335A7.9934,7.9934,0,0,1,25.7368,10Z"></path><path d="M27,24a2.9716,2.9716,0,0,0-1.9253.7188l-4.1008-2.461C20.9814,22.1719,21,22.0884,21,22s-.0186-.1709-.0259-.2568l4.1016-2.461A2.9712,2.9712,0,0,0,27,20a3.021,3.021,0,1,0-2.9434-2.4385l-3.9121,2.3472a3,3,0,1,0-.0009,4.1836l3.913,2.3476A2.9979,2.9979,0,1,0,27,24Zm0-8a1,1,0,1,1-1,1A1.0009,1.0009,0,0,1,27,16Zm-9,7a1,1,0,1,1,1-1A1.0009,1.0009,0,0,1,18,23Zm9,5a1,1,0,1,1,1-1A1.0009,1.0009,0,0,1,27,28Z"></path></svg>`;
export default svgResultCarbonIcon;

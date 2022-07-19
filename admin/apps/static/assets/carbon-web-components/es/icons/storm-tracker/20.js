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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M16,2a1,1,0,0,0-.9736.771l-1.7229,7.3223a10.0653,10.0653,0,1,0,8.6032,8.603l7.3223-1.7227A1,1,0,0,0,30,16,14.0158,14.0158,0,0,0,16,2ZM11.293,20.707A1,1,0,0,0,12,21a1.013,1.013,0,0,0,.229-.0264l3.7622-.8852a3.996,3.996,0,1,1-4.08-4.08l-.8852,3.7622A1,1,0,0,0,11.293,20.707Zm2.05-2.0508,2.271-9.65a7.5018,7.5018,0,0,1,7.38,7.38ZM20,20a8,8,0,1,1-8-8,8.1017,8.1017,0,0,1,.8438.0469L12.38,14.019C12.2532,14.0107,12.127,14,12,14a6,6,0,1,0,6,6c0-.127-.011-.2534-.019-.38l1.9721-.4643A8.1048,8.1048,0,0,1,20,20Zm4.9707-4.0791a9.4981,9.4981,0,0,0-8.8914-8.8916l.7068-3.0039A12.0193,12.0193,0,0,1,27.9746,15.2139Z"></path></svg>`;
export default svgResultCarbonIcon;

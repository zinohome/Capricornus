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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M28.5,32a3.4762,3.4762,0,0,1-2.4751-1.0254L21.897,26.8469a6.496,6.496,0,0,1-7.3482-8.9563l.5879-1.34L19.293,20.707a1.0234,1.0234,0,0,0,1.4135,0,.999.999,0,0,0,.0005-1.4141l-4.1562-4.1565,1.34-.5881a6.4965,6.4965,0,0,1,8.9566,7.3486l4.1274,4.1282A3.5,3.5,0,0,1,28.5,32Zm-6.03-7.4087,4.9693,4.9692a1.5352,1.5352,0,0,0,2.1211,0,1.4985,1.4985,0,0,0,0-2.1208v0l-4.9692-4.97.188-.5823A4.496,4.496,0,0,0,20.5,16q-.126,0-.25.0068l1.8716,1.8721a2.9992,2.9992,0,0,1,0,4.2424,3.0722,3.0722,0,0,1-4.2427-.0005l-1.8716-1.8715Q16,20.3741,16,20.5A4.4968,4.4968,0,0,0,21.8877,24.78Z"></path><path d="M25,5H22V4a2.0058,2.0058,0,0,0-2-2H12a2.0058,2.0058,0,0,0-2,2V5H7A2.0058,2.0058,0,0,0,5,7V28a2.0058,2.0058,0,0,0,2,2h7V28H7V7h3v3H22V7h3v5h2V7A2.0058,2.0058,0,0,0,25,5ZM20,8H12V4h8Z"></path></svg>`;
export default svgResultCarbonIcon;

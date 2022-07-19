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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M16,10a8.5975,8.5975,0,0,0-7.9648,6A8.5975,8.5975,0,0,0,16,22a8.5975,8.5975,0,0,0,7.9648-6A8.5975,8.5975,0,0,0,16,10Zm0,10a4,4,0,1,1,4-4A4.0045,4.0045,0,0,1,16,20Z"></path><path d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,22a10.6543,10.6543,0,0,1-9.97-7.7578L5.9692,16l.0606-.2422A10.6543,10.6543,0,0,1,16,8a10.6543,10.6543,0,0,1,9.97,7.7578L26.0308,16l-.0606.2422A10.6543,10.6543,0,0,1,16,24Z"></path><circle cx="16" cy="16" r="2"></circle><path fill="none" d="M16,20a4,4,0,1,1,4-4A4.0045,4.0045,0,0,1,16,20Zm0-6a2,2,0,1,0,2,2A2.0021,2.0021,0,0,0,16,14Z"></path><path fill="none" d="M16,24a10.6547,10.6547,0,0,1-9.97-7.7576L5.9692,16l.0606-.2424A10.6547,10.6547,0,0,1,16,8a10.6547,10.6547,0,0,1,9.97,7.7576L26.0308,16l-.0606.2424A10.6547,10.6547,0,0,1,16,24ZM8.0352,16A8.5975,8.5975,0,0,0,16,22a8.5975,8.5975,0,0,0,7.9648-6A8.5975,8.5975,0,0,0,16,10,8.5975,8.5975,0,0,0,8.0352,16Z"></path></svg>`;
export default svgResultCarbonIcon;

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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M19,26a4,4,0,1,1,4-4A4.0045,4.0045,0,0,1,19,26Zm0-6a2,2,0,1,0,2,2A2.0021,2.0021,0,0,0,19,20Z"></path><path d="M27 29H11a2 2 0 01-2-2V18a2 2 0 012-2h3.2793l.5441-1.6324A2 2 0 0116.7208 13h4.5584a2 2 0 011.8974 1.3676L23.7207 16H27a2 2 0 012 2v9A2 2 0 0127 29zM11 27H27V18H22.2792l-1-3H16.7207l-1 3H11zM27 11H29V13H27zM27 7H29V9H27zM27 3H29V5H27zM23 3H25V5H23zM19 3H21V5H19zM15 3H17V5H15zM11 3H13V5H11zM7 3H9V5H7zM3 3H5V5H3zM3 7H5V9H3zM3 11H5V13H3zM3 15H5V17H3zM3 19H5V21H3zM3 23H5V25H3zM3 27H5V29H3z"></path></svg>`;
export default svgResultCarbonIcon;

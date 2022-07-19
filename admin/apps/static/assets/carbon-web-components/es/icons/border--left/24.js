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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M-9 15H17V17H-9z" transform="rotate(-90 4 16)"></path><path d="M7 27H9V29H7z" transform="rotate(-90 8 28)"></path><path d="M11 27H13V29H11z" transform="rotate(-90 12 28)"></path><path d="M15 27H17V29H15z" transform="rotate(-90 16 28)"></path><path d="M19 27H21V29H19z" transform="rotate(-90 20 28)"></path><path d="M23 27H25V29H23z" transform="rotate(-90 24 28)"></path><path d="M27 27H29V29H27z" transform="rotate(-90 28 28)"></path><path d="M27 23H29V25H27z" transform="rotate(-90 28 24)"></path><path d="M27 19H29V21H27z" transform="rotate(-90 28 20)"></path><path d="M27 15H29V17H27z" transform="rotate(-90 28 16)"></path><path d="M27 7H29V9H27z" transform="rotate(-90 28 8)"></path><path d="M27 11H29V13H27z" transform="rotate(-90 28 12)"></path><path d="M7 3H9V5H7z" transform="rotate(-90 8 4)"></path><path d="M11 3H13V5H11z" transform="rotate(-90 12 4)"></path><path d="M15 3H17V5H15z" transform="rotate(-90 16 4)"></path><path d="M19 3H21V5H19z" transform="rotate(-90 20 4)"></path><path d="M23 3H25V5H23z" transform="rotate(-90 24 4)"></path><path d="M27 3H29V5H27z" transform="rotate(-90 28 4)"></path><path d="M8 10H18V12H8zM8 15H14V17H8z"></path></svg>`;
export default svgResultCarbonIcon;

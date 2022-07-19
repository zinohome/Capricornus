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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M7 11H9V21H7zM11 11H13V21H11zM15 11H17V21H15zM19 11H21V21H19zM23 11H25V21H23z"></path><path d="M28,26H4a2.0023,2.0023,0,0,1-2-2V8A2.0023,2.0023,0,0,1,4,6H28a2.0023,2.0023,0,0,1,2,2V24A2.0023,2.0023,0,0,1,28,26ZM4,8V24H28V8Z"></path></svg>`;
export default svgResultCarbonIcon;

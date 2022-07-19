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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M28,28H4a2.0021,2.0021,0,0,1-2-2V21H4v5H28V21h2v5A2.0021,2.0021,0,0,1,28,28Z"></path><path d="M7 21H25V23H7zM7 16H25V18H7zM7 11H25V13H7zM7 6H25V8H7z"></path></svg>`;
export default svgResultCarbonIcon;

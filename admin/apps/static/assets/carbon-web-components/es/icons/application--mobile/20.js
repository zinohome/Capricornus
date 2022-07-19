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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M23 7H27V11H23zM23 13H27V17H23zM17 7H21V11H17zM17 13H21V17H17z"></path><circle cx="14.5" cy="24.5" r="1.5"></circle><path d="M21,30H8a2.0023,2.0023,0,0,1-2-2V4A2.0023,2.0023,0,0,1,8,2H21V4H8V28H21V20h2v8A2.0023,2.0023,0,0,1,21,30Z"></path></svg>`;
export default svgResultCarbonIcon;

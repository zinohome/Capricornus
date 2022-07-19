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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M4 21H2v3a2.0059 2.0059 0 002 2H7V24H4zM4 8H7V6H4A2.0059 2.0059 0 002 8v3H4zM17 6H23V8H17zM9 6H15V8H9zM17 24H23V26H17zM28 15L4 15 4 13 2 13 2 19 4 19 4 17 28 17 28 19 30 19 30 13 28 13 28 15zM28 24H25v2h3a2.0059 2.0059 0 002-2V21H28zM28 6H25V8h3v3h2V8A2.0059 2.0059 0 0028 6zM9 24H15V26H9z"></path><circle cx="7" cy="12" r="1"></circle><circle cx="7" cy="20" r="1"></circle></svg>`;
export default svgResultCarbonIcon;

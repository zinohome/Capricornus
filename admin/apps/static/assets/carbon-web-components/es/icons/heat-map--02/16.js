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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<circle cx="21" cy="20" r="2"></circle><circle cx="14" cy="12" r="2"></circle><circle cx="29" cy="19" r="1"></circle><path d="M26.5 30A3.5 3.5 0 1130 26.5 3.5041 3.5041 0 0126.5 30zm0-5A1.5 1.5 0 1028 26.5 1.5017 1.5017 0 0026.5 25zM14 30a3.958 3.958 0 01-2.126-.6211 6.9977 6.9977 0 114.1109-6.8384A3.9916 3.9916 0 0114 30zm-1.8843-3.0278l.5391.4946a1.9915 1.9915 0 102.0039-3.343l-.6909-.2432.03-.8467a5.0085 5.0085 0 10-2.5166 4.3023zM24 16a6.0067 6.0067 0 01-6-6 5.3246 5.3246 0 01.0269-.5327A3.9564 3.9564 0 0116 6a4.0045 4.0045 0 014-4 3.9564 3.9564 0 013.4673 2.0271C23.6484 4.009 23.8252 4 24 4a6 6 0 010 12zM20 4a2.0021 2.0021 0 00-2 2 1.9805 1.9805 0 001.43 1.9023l.9018.2706-.2153.9162A3.9938 3.9938 0 1024 6a4.0064 4.0064 0 00-.9121.1162l-.9155.2141-.27-.9006A1.9807 1.9807 0 0020 4zM6.5 11A4.5 4.5 0 1111 6.5 4.5051 4.5051 0 016.5 11zm0-7A2.5 2.5 0 109 6.5 2.503 2.503 0 006.5 4z"></path></svg>`;
export default svgResultCarbonIcon;

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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M30 15L17 15 17 2 15 2 15 15 2 15 2 17 15 17 15 30 17 30 17 17 30 17 30 15z"></path><path d="M25.586 20L27 21.414 23.414 25 27 28.586 25.586 30 20.586 25 25.586 20zM11 30H3a1 1 0 01-.8945-1.4473l4-8a1.0412 1.0412 0 011.789 0l4 8A1 1 0 0111 30zM4.6182 28H9.3818L7 23.2363zM28 12H22a2.0023 2.0023 0 01-2-2V4a2.0023 2.0023 0 012-2h6a2.0023 2.0023 0 012 2v6A2.0023 2.0023 0 0128 12zM22 4v6h6.001L28 4zM7 12a5 5 0 115-5A5.0059 5.0059 0 017 12zM7 4a3 3 0 103 3A3.0033 3.0033 0 007 4z"></path></svg>`;
export default svgResultCarbonIcon;

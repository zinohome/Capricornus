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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M20,22h2L17,10H15L10,22h2l1.24-3h5.53Zm-5.93-5,1.82-4.42h.25L18,17Z"></path><path d="M12 28H6a2 2 0 01-2-2V6A2 2 0 016 4H26a2 2 0 012 2V17H26V6H6V26h6zM23 27.18L20.41 24.59 19 26 23 30 30 23 28.59 21.59 23 27.18z"></path></svg>`;
export default svgResultCarbonIcon;

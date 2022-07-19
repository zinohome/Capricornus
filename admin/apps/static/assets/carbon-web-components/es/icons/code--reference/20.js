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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M4 20L4 22 8.586 22 2 28.586 3.414 30 10 23.414 10 28 12 28 12 20 4 20zM30 10L24 4 22.586 5.414 27.172 10 22.586 14.586 24 16 30 10z"></path><path d="M8.944 9.001H24.974000000000004V11.001H8.944z" transform="rotate(-74.995 16.96 10)"></path><path d="M4 10L10 4 11.414 5.414 6.828 10 11.414 14.586 10 16 4 10z"></path></svg>`;
export default svgResultCarbonIcon;

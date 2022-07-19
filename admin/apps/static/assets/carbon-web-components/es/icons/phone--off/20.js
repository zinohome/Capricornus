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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M9.19 18.56A25.66 25.66 0 015 6.08V6A1 1 0 016 5h5.28l1.5 3.77L9.94 11.64l.06.48a13 13 0 001.46 4.17l1.46-1.46a9.34 9.34 0 01-.84-2.52l2.13-2.15A2 2 0 0014.65 8L13.13 4.26A2 2 0 0011.27 3H5.76A3 3 0 003 6.23 28 28 0 007.79 20zM27.77 18.86L24 17.35a2 2 0 00-2.17.41l-2.17 2.15A9.17 9.17 0 0115.45 18L30 3.41 28.59 2 2 28.59 3.41 30l7-7c3.38 3.18 8.28 5.62 15.39 6H26a3 3 0 003-3V20.72A2 2 0 0027.77 18.86zM27 26v.06a1 1 0 01-1.06.94c-6.51-.37-11-2.54-14.11-5.42L14 19.44A10.77 10.77 0 0019.88 22l.48.06 2.87-2.85L27 20.72z"></path></svg>`;
export default svgResultCarbonIcon;

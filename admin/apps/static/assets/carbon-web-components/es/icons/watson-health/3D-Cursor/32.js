/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { svg } from 'lit-html';
import spread from '../../../globals/directives/spread';
const svgResultCarbonIcon = ({ children, ...attrs } = {}) =>
  svg`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${spread(
    attrs
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M13 4L4 4 4 13.01 6 13.01 6 6 13 6 13 4zM29.49 13.12l-9-5a1 1 0 00-1 0l-9 5A1 1 0 0010 14V24a1 1 0 00.52.87l9 5A1 1 0 0020 30a1.05 1.05 0 00.49-.13l9-5A1 1 0 0030 24V14A1 1 0 0029.49 13.12zM19 27.3l-7-3.89V15.69l7 3.89zm1-9.45L13.06 14 20 10.14 26.94 14zm8 5.56L21 27.3V19.58l7-3.89z"></path></svg>`;
export default svgResultCarbonIcon;

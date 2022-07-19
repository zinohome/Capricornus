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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M28.8281 7.1719a4.0941 4.0941 0 00-5.6562 0L.3433 30H9.5889a4.9682 4.9682 0 003.5356-1.4648L28.8281 12.8281a3.9984 3.9984 0 000-5.6562zM12.2928 20.8787l2.086-2.0859 2.8293 2.8294-2.0857 2.0862zM11.71 27.1211A2.9824 2.9824 0 019.5889 28H5.1714l5.7073-5.7072 2.83 2.83zm15.7037-15.707l-8.792 8.7939-2.8293-2.8292 8.7931-8.7929a2.0473 2.0473 0 012.8282 0 1.9995 1.9995 0 010 2.8282zM15 2a2.9948 2.9948 0 00-2.8157 2H7.8156A2.9925 2.9925 0 104 7.8154v4.3687a3 3 0 102 0V7.8159A2.9959 2.9959 0 007.8156 6h4.3686A2.9947 2.9947 0 1015 2zM5 16a1 1 0 111-1A1.0008 1.0008 0 015 16zM5 6A1 1 0 116 5 1.0008 1.0008 0 015 6zM15 6a1 1 0 111-1A1.0008 1.0008 0 0115 6z"></path></svg>`;
export default svgResultCarbonIcon;

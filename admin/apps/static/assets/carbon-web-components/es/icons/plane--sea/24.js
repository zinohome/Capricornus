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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M30 30H28a4.9316 4.9316 0 01-4-1.9873 5.0192 5.0192 0 01-8 0 5.0192 5.0192 0 01-8 0A4.9316 4.9316 0 014 30H2V28H4a3.44 3.44 0 003.0532-2.3215A.9712.9712 0 018 25a1.0069 1.0069 0 01.9487.6838A3.4381 3.4381 0 0012 28a3.44 3.44 0 003.0532-2.3215A.99.99 0 0116 25a1.0069 1.0069 0 01.9487.6838A3.4381 3.4381 0 0020 28a3.44 3.44 0 003.0532-2.3215 1 1 0 011.8955.0053A3.4381 3.4381 0 0028 28h2zM28 6v4H25.5L23.4 7.2A3.0129 3.0129 0 0021 6H15a3.0033 3.0033 0 00-3 3v1H8.6182L7.8945 8.5527l-1-2A1 1 0 006 6H3A1 1 0 002 7v6a3.0033 3.0033 0 003 3h6.82l-.6666 4H7a1 1 0 000 2H27a1 1 0 000-2H22.847L22.18 16h.1629a4.9662 4.9662 0 003.5351-1.4648L28 12.4141V16h2V6zM14 9a1.0009 1.0009 0 011-1h6a1.0045 1.0045 0 01.8.4L23 10H14zm6.82 11H13.18l.6666-4h6.306zm1.5237-6H5a1.0009 1.0009 0 01-1-1V8H5.3818l.7237 1.4473L7.3818 12h18.204l-1.1214 1.1211A2.9789 2.9789 0 0122.3433 14z"></path></svg>`;
export default svgResultCarbonIcon;

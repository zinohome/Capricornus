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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M28,2H4A2,2,0,0,0,2,4V28a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V4A2,2,0,0,0,28,2ZM22.5859,13.4141,18,8.8281v5.7686a5.0206,5.0206,0,0,1-1.0957,3.124l-2.2471,2.8086A3.01,3.01,0,0,0,14,22.4033V27H12V22.4033a5.0206,5.0206,0,0,1,1.0957-3.124l2.2471-2.8086A3.01,3.01,0,0,0,16,14.5967V8.8281l-4.5859,4.586L10,12l7-7,7,7Z"></path><path fill="none" d="M22.5859,13.4141,18,8.8281v5.7686a5.0206,5.0206,0,0,1-1.0957,3.124l-2.2471,2.8086A3.01,3.01,0,0,0,14,22.4033V27H12V22.4033a5.0206,5.0206,0,0,1,1.0957-3.124l2.2471-2.8086A3.01,3.01,0,0,0,16,14.5967V8.8281l-4.5859,4.586L10,12l7-7,7,7Z" data-icon-path="inner-path"></path></svg>`;
export default svgResultCarbonIcon;

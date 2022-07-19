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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M26,16c-.0879,0-.1731.0093-.26.0132L24.2368,9H28V7H23a1,1,0,0,0-.978,1.21L22.62,11H12.3872l-1-3H14V6H7V8H9.28l1.0411,3.123-2.57,5.1392A6,6,0,1,0,11.91,23h2.61a1.991,1.991,0,0,0,1.5616-.75L23.14,13.4258l.6436,3.0039A5.9891,5.9891,0,1,0,26,16ZM6,26a4,4,0,1,1,.8364-7.9092L5.1055,21.5527l.009.0044A.9834.9834,0,0,0,5,22a.9931.9931,0,0,0,1.8853.4429l.0092.0044L8.6182,19A3.9835,3.9835,0,0,1,6,26Zm5.91-5a5.9986,5.9986,0,0,0-2.3733-3.8364l1.6787-3.3574L13.613,21Zm3.4577-1.06L13.054,13h7.8654ZM26,26a3.9882,3.9882,0,0,1-1.7859-7.56l.8079,3.77.02-.0044A.9859.9859,0,0,0,26,23a1,1,0,0,0,1-1,.9456.9456,0,0,0-.0415-.2056l.02-.0044-.8086-3.7729A3.9931,3.9931,0,0,1,26,26Z"></path></svg>`;
export default svgResultCarbonIcon;

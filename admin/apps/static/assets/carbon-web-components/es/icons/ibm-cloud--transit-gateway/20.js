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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M25.9,20.9l3.5-3.5a1.9333,1.9333,0,0,0,0-2.8L24.1,9.3l1.4-1.4A.9015.9015,0,0,0,26,8a2,2,0,1,0-2-2,.9015.9015,0,0,0,.1.5L18,12.6a3.6333,3.6333,0,0,0-4,0L10.7,9.3,16,4l3.5,3.5,1.4-1.4L17.4,2.6a1.9333,1.9333,0,0,0-2.8,0L9.3,7.9,7.9,6.5A.9015.9015,0,0,0,8,6,2,2,0,1,0,6,8a.9015.9015,0,0,0,.5-.1L12.6,14a3.6333,3.6333,0,0,0,0,4L9.3,21.3,4,16l3.5-3.5L6.1,11.1,2.6,14.6a1.9333,1.9333,0,0,0,0,2.8l5.3,5.3L6.5,24.1A.9015.9015,0,0,0,6,24a2,2,0,1,0,2,2,.9015.9015,0,0,0-.1-.5L14,19.4a3.6333,3.6333,0,0,0,4,0l3.3,3.3L16,28l-3.5-3.5-1.4,1.4,3.5,3.5a1.9333,1.9333,0,0,0,2.8,0l5.3-5.3,1.4,1.4c0,.2-.1.3-.1.5a2,2,0,1,0,2-2,.9015.9015,0,0,0-.5.1L19.4,18a3.6333,3.6333,0,0,0,0-4l3.3-3.3L28,16l-3.5,3.5ZM16,18a2,2,0,1,1,2-2A2.0059,2.0059,0,0,1,16,18Z"></path></svg>`;
export default svgResultCarbonIcon;

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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<circle cx="16" cy="22.5" r="1.5"></circle><path d="M17,19H15V15h2a2,2,0,0,0,0-4H15a2.0023,2.0023,0,0,0-2,2v.5H11V13a4.0045,4.0045,0,0,1,4-4h2a4,4,0,0,1,0,8Z"></path><path d="M16,30a2.0763,2.0763,0,0,1-1.4732-.6094L2.6094,17.4732a2.0855,2.0855,0,0,1,0-2.9464L14.5268,2.6094a2.0855,2.0855,0,0,1,2.9464,0L29.3906,14.5268a2.0855,2.0855,0,0,1,0,2.9464L17.4732,29.3906A2.0763,2.0763,0,0,1,16,30ZM16,3.9992a.0841.0841,0,0,0-.0591.0244L4.0236,15.9409a.0838.0838,0,0,0,0,.1182L15.9409,27.9764a.0842.0842,0,0,0,.1182,0L27.9764,16.0591a.0838.0838,0,0,0,0-.1182L16.0591,4.0236A.0841.0841,0,0,0,16,3.9992Z"></path></svg>`;
export default svgResultCarbonIcon;

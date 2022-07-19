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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M29.2227,17.9639,25.9194,17.21a9.7843,9.7843,0,0,0-1.5249-6.6245l2.54-2.0254L25.6875,6.9961,23.1482,9.0205A9.97,9.97,0,0,0,17,6.0508V3H15V6.0508a9.97,9.97,0,0,0-6.1482,2.97L6.3125,6.9961,5.0654,8.56l2.54,2.0254A9.7843,9.7843,0,0,0,6.0806,17.21l-3.3033.7544.4454,1.9492L6.52,19.1606a10.0359,10.0359,0,0,0,4.2688,5.358l-1.33,2.7631,1.8018.8677L12.59,25.3882a9.8113,9.8113,0,0,0,6.8208,0L20.74,28.1494l1.8018-.8682-1.33-2.7626a10.0359,10.0359,0,0,0,4.2688-5.358l3.2973.7525ZM24,16c0,.2573-.0148.5112-.0386.7627l-5-1.1416a2.9664,2.9664,0,0,0-.1376-.5942L22.82,11.84A7.9392,7.9392,0,0,1,24,16Zm-9,0a1,1,0,1,1,1,1A1.0009,1.0009,0,0,1,15,16Zm6.5758-5.7256L17.58,13.4609a3.0028,3.0028,0,0,0-.58-.2768V8.0693A7.9762,7.9762,0,0,1,21.5758,10.2744ZM15,8.0693v5.1148a3.0028,3.0028,0,0,0-.58.2768l-3.9956-3.1865A7.9762,7.9762,0,0,1,15,8.0693ZM8,16a7.9392,7.9392,0,0,1,1.18-4.16l3.9962,3.1866a2.9664,2.9664,0,0,0-.1376.5942l-5,1.1416C8.0148,16.5112,8,16.2573,8,16Zm.4835,2.7124,4.9752-1.1362a3.0132,3.0132,0,0,0,.4146.5366L11.6594,22.71A8.031,8.031,0,0,1,8.4835,18.7124ZM16,24a7.9679,7.9679,0,0,1-2.54-.42l2.2206-4.6123A2.9988,2.9988,0,0,0,16,19a2.9988,2.9988,0,0,0,.319-.0322L18.54,23.58A7.9546,7.9546,0,0,1,16,24Zm4.3406-1.29-2.2139-4.5976a3.0132,3.0132,0,0,0,.4146-.5366l4.9752,1.1362A8.031,8.031,0,0,1,20.3406,22.71Z"></path></svg>`;
export default svgResultCarbonIcon;

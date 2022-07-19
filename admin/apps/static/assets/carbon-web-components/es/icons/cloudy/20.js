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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M30.0005,15.5005a6.5324,6.5324,0,0,0-5.1992-6.3638,8.9943,8.9943,0,0,0-17.6006,0,6.5321,6.5321,0,0,0-5.2,6.3638,6.4543,6.4543,0,0,0,1.6887,4.35A5.9829,5.9829,0,0,0,8,30H19a5.9764,5.9764,0,0,0,5.6094-8.1016A6.5051,6.5051,0,0,0,30.0005,15.5005ZM19,28H8a3.9925,3.9925,0,0,1-.6731-7.9292L7.99,19.958l.1458-.6562a5.496,5.496,0,0,1,10.7294,0l.1458.6562.6626.1128A3.9925,3.9925,0,0,1,19,28Zm4.5-8h-.0554a5.9562,5.9562,0,0,0-2.7959-1.7564,7.4952,7.4952,0,0,0-14.2984,0,5.9877,5.9877,0,0,0-1.0315.4073A4.4446,4.4446,0,0,1,4,15.5005a4.5171,4.5171,0,0,1,4.144-4.481l.8155-.0639.0991-.812a6.9938,6.9938,0,0,1,13.8838,0l.0986.812.8154.0639a4.4975,4.4975,0,0,1-.3564,8.981Z"></path></svg>`;
export default svgResultCarbonIcon;

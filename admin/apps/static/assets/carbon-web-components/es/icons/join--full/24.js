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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path fill="none" d="M16,9.0752a7.9941,7.9941,0,0,1,0,13.85,7.9941,7.9941,0,0,1,0-13.85m0-2.2373a9.9953,9.9953,0,0,0,0,18.3242A9.9953,9.9953,0,0,0,16,6.8379Z" data-icon-path="inner-path"></path><path d="M10,16a9.9976,9.9976,0,0,1,6-9.1621,10,10,0,1,0,0,18.3242A9.9976,9.9976,0,0,1,10,16Z"></path><path d="M16,9.0752a7.9941,7.9941,0,0,0,0,13.85,7.9941,7.9941,0,0,0,0-13.85Z"></path><path d="M20,6a9.9539,9.9539,0,0,0-4,.8379,9.9953,9.9953,0,0,1,0,18.3242A9.9988,9.9988,0,1,0,20,6Z"></path></svg>`;
export default svgResultCarbonIcon;

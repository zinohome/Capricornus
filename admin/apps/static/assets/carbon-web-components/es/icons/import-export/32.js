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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M28 24v4H4V24H2v4l.0076-.0049A1.9977 1.9977 0 004 30H28a2 2 0 002-2h0V24zM27.6 14.6L24 18.2 24 4 22 4 22 18.2 18.4 14.6 17 16 23 22 29 16 27.6 14.6zM9 4L3 10 4.4 11.4 8 7.8 8 22 10 22 10 7.8 13.6 11.4 15 10 9 4z"></path></svg>`;
export default svgResultCarbonIcon;

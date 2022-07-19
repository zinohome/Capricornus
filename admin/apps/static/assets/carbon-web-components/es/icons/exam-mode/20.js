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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M25 23v3H7V16.83l3.59 3.58L12 19 6 13 0 19l1.41 1.41L5 16.83V26a2 2 0 002 2H25a2 2 0 002-2V23zM27 7v9.17l3.59-3.58L32 14l-6 6-6-6 1.41-1.41L25 16.17V7H13V5H25A2 2 0 0127 7zM8 10H4A2 2 0 012 8V4A2 2 0 014 2H8a2 2 0 012 2V8A2 2 0 018 10zM4 4V8H8V4z"></path></svg>`;
export default svgResultCarbonIcon;

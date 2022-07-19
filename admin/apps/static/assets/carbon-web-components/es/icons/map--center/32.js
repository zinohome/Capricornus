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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M23 26H25V30H23zM23 18H25V22H23zM26 23H30V25H26zM18 23H22V25H18zM25.3418 10.06l-22-8A1 1 0 002.06 3.3415l8 22A1.0011 1.0011 0 0010.9839 26H11a1 1 0 00.9287-.6289L15.77 15.7692l9.6015-3.8408a1 1 0 00-.0293-1.8687zM14.6284 14.0709v0l-.3979.1591-.1591.3979 0 0-3.0268 7.5678L4.6719 4.6715l17.5244 6.3726z"></path></svg>`;
export default svgResultCarbonIcon;

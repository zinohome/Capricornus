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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<circle cx="9" cy="7" r="1"></circle><path d="M27,22V18a2,2,0,0,0-2-2H17V12h9a2,2,0,0,0,2-2V4a2,2,0,0,0-2-2H6A2,2,0,0,0,4,4v6a2,2,0,0,0,2,2h9v4H7a2,2,0,0,0-2,2v4H2v8h8V22H7V18h8v4H12v8h8V22H17V18h8v4H22v8h8V22ZM8,28H4V24H8Zm10-4v4H14V24ZM6,10V4H26v6ZM28,28H24V24h4Z"></path></svg>`;
export default svgResultCarbonIcon;

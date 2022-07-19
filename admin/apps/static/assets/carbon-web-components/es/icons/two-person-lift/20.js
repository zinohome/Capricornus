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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M26.96 30l-1.9215-6.7253a1.0008 1.0008 0 01.3369-1.0554L29.874 18.62 28.52 13.2014l-2.7382 3.4234A1.0026 1.0026 0 0125 17H20V15h4.52l3.6993-4.6248a1 1 0 011.7509.3824l2 8a.9989.9989 0 01-.3447 1.0232l-4.48 3.5845 1.7389 6.0854zM23 5.5A3.5 3.5 0 1126.5 9 3.5042 3.5042 0 0123 5.5zm2 0A1.5 1.5 0 1026.5 4 1.5017 1.5017 0 0025 5.5z"></path><path d="M20.0039,19A2.0039,2.0039,0,0,1,18,16.9961V15.0039A2.0039,2.0039,0,0,1,20.0039,13H22V10H10v3h1.9961A2.0039,2.0039,0,0,1,14,15.0039v1.9922A2.0039,2.0039,0,0,1,11.9961,19H10v3H22V19Z"></path><path d="M5.04 30l1.9215-6.7253a1.0013 1.0013 0 00-.3369-1.0555L2.126 18.62l1.3545-5.4185 2.7382 3.4234A1.0026 1.0026 0 007 17h5V15H7.4805L3.7812 10.3752a1 1 0 00-1.7509.3824l-2 8A.9989.9989 0 00.375 19.7808l4.4805 3.5844-1.739 6.0855zM5.5 9A3.5 3.5 0 119 5.5 3.5042 3.5042 0 015.5 9zm0-5A1.5 1.5 0 107 5.5 1.5017 1.5017 0 005.5 4z"></path></svg>`;
export default svgResultCarbonIcon;

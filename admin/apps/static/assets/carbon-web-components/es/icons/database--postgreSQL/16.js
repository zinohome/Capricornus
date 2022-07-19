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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M22.98 28.875c-4.0474 0-5.5879-1.0579-5.5879-2.8284a2.2112 2.2112 0 012.1387-2.3v-.253a1.9725 1.9725 0 01-1.541-2c0-1.242 1.0576-1.8628 2.2075-2.1158v-.0918a3.622 3.622 0 01-2.1846-3.4953c0-2.4375 1.7246-4.07 4.9673-4.07a6.6768 6.6768 0 012.0923.2988v-.3908a1.5341 1.5341 0 011.7016-1.7476h1.8623v2.2534H26.0835v.322a3.5926 3.5926 0 011.8628 3.3343c0 2.4145-1.7022 4.0241-4.9668 4.0241a7.3717 7.3717 0 01-1.84-.207 1.23 1.23 0 00-.8505 1.0808c0 .5979.5058.8967 1.5634.8967h3.2193c2.9433 0 4.208 1.2649 4.208 3.4263C29.28 27.5183 27.5781 28.875 22.98 28.875zm1.4941-4.7371H20.3809A1.474 1.474 0 0019.76 25.38c0 .92.69 1.4717 2.5293 1.4717h1.4716c1.9092 0 2.76-.4829 2.76-1.4946C26.5205 24.5979 25.9688 24.1379 24.4736 24.1379zm.667-8.163v-.3912c0-1.2187-.7588-1.84-2.1611-1.84s-2.1621.6209-2.1621 1.84v.3912c0 1.1955.7588 1.84 2.1621 1.84S25.1406 17.17 25.1406 15.9749zM4.603 24V7.95h7.22c2.9668 0 4.76 2 4.76 4.967 0 2.9893-1.7935 4.9668-4.76 4.9668H7.6387V24zm3.0357-8.738h3.9092a1.6886 1.6886 0 001.8852-1.8167V12.3875a1.672 1.672 0 00-1.8852-1.7935H7.6387z"></path></svg>`;
export default svgResultCarbonIcon;

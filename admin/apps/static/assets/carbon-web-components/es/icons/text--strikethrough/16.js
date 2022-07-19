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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M28,15H17.9563c-.4522-.1237-.9037-.2324-1.3381-.3352-2.8077-.6641-4.396-1.1506-4.396-3.4231a2.8684,2.8684,0,0,1,.7866-2.145,4.7888,4.7888,0,0,1,3.0137-1.09c2.8291-.07,4.1347.8894,5.2011,2.35l1.6153-1.1792a7.4727,7.4727,0,0,0-6.83-3.1706,6.7726,6.7726,0,0,0-4.4,1.6611,4.8274,4.8274,0,0,0-1.3862,3.5735A4.3723,4.3723,0,0,0,11.9573,15H4v2H17.6519c1.9668.57,3.1432,1.3123,3.1733,3.3579a3.119,3.119,0,0,1-.8623,2.3931A5.8241,5.8241,0,0,1,16.2432,24a6.6344,6.6344,0,0,1-5.1451-2.6912L9.5649,22.593A8.5262,8.5262,0,0,0,16.2119,26c.0088-.0012.042,0,.1,0A7.67,7.67,0,0,0,21.36,24.1812a5.0779,5.0779,0,0,0,1.4648-3.8531A4.952,4.952,0,0,0,21.6753,17H28Z"></path></svg>`;
export default svgResultCarbonIcon;

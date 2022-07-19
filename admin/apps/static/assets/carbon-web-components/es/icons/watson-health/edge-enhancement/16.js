/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { svg } from 'lit-html';
import spread from '../../../globals/directives/spread';
const svgResultCarbonIcon = ({ children, ...attrs } = {}) =>
  svg`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${spread(
    attrs
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M11.8164 4.7646L11.1328 2.887A13.976 13.976 0 006.9507 5.3278L8.2358 6.8593A11.9729 11.9729 0 0111.8164 4.7646zM5.5913 10L3.86 9a14.14 14.14 0 00-1.6382 4.5872l1.9677.3469A12.1519 12.1519 0 015.5913 10zM16 26A10 10 0 0016 6h0z"></path><path d="M30,16A14,14,0,0,0,16,2V4a11.9933,11.9933,0,0,1,4.0493,23.2847c-.1682.06-.334.1294-.5044.1821-.2512.0771-.51.1362-.7683.1973-.1262.03-.25.0693-.3772.0952-.2908.0591-.5884.0976-.8862.1352-.1.0122-.1983.0342-.2988.044A12.0015,12.0015,0,0,1,5.416,21.6548c-.0664-.127-.133-.2534-.1953-.3843-.0547-.1123-.106-.227-.1572-.3413A13.1207,13.1207,0,0,1,4.19,18l-1.9677.4131A13.9173,13.9173,0,0,0,2.7,20.2993l-.0251.0083A13.9615,13.9615,0,0,0,16,30q.7134,0,1.415-.0713c.135-.0137.2654-.042.3995-.06.3286-.0424.6574-.0839.9814-.1494.18-.0366.3533-.0908.5308-.1338.2685-.0659.5383-.125.8027-.2065.2463-.0762.4831-.1724.7234-.2612.18-.0664.3635-.1211.5412-.1953l-.0009-.0025A14.0015,14.0015,0,0,0,30,16Z"></path></svg>`;
export default svgResultCarbonIcon;

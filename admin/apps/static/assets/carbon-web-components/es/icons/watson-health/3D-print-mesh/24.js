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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M29.9761,15.7832l-2-9a.9992.9992,0,0,0-.4214-.6152l-6-4A1.0008,1.0008,0,0,0,21,2H11a1.0008,1.0008,0,0,0-.5547.168l-6,4a.9992.9992,0,0,0-.4214.6152l-2,9a1.0019,1.0019,0,0,0,.0181.5039l3,10a1,1,0,0,0,.6709.6709l10,3,.0051.0005a.9789.9789,0,0,0,.564,0l.0051-.0005,10-3a1,1,0,0,0,.6709-.6709l3-10A1.0019,1.0019,0,0,0,29.9761,15.7832Zm-19.05.833L7.0168,8.7974l7.2815,2.6479ZM16,12.4971,19.5889,18H12.4111ZM19.3818,20,16,26.7637,12.6182,20Zm-1.68-8.5547,7.2815-2.6479-3.91,7.8188ZM18.19,9.14l3.0961-4.747,3.5152,2.3432ZM16,8.8364,12.8459,4h6.3082Zm-2.19.3032L7.1992,6.7358l3.5152-2.3432Zm-4.8439,8.03-4.802-1.8007L5.3652,9.9668ZM14.07,27.377,7.5679,25.4263l3.1284-4.7969Zm7.2334-6.7476,3.1284,4.7969L17.93,27.377ZM26.6348,9.9668l1.2006,5.4019-4.802,1.8007ZM4.5374,17.6445l4.5944,1.7227L6.3391,23.65ZM25.6609,23.65l-2.7927-4.2827,4.5944-1.7227Z"></path></svg>`;
export default svgResultCarbonIcon;

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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M25.3481 28.875c-4.0473 0-5.5878-1.0579-5.5878-2.8284a2.2115 2.2115 0 012.1386-2.3v-.253a1.9726 1.9726 0 01-1.5405-2c0-1.242 1.0576-1.8628 2.207-2.1158v-.0918a3.6228 3.6228 0 01-2.1845-3.4953c0-2.4375 1.7246-4.07 4.9672-4.07A6.6717 6.6717 0 0127.44 12.02v-.3908a1.5343 1.5343 0 011.7022-1.7476h1.8623v2.2534H28.4521v.322a3.5917 3.5917 0 011.8628 3.3343c0 2.4145-1.7016 4.0241-4.9668 4.0241a7.3662 7.3662 0 01-1.8393-.207 1.23 1.23 0 00-.8511 1.0808c0 .5979.5059.8967 1.564.8967H27.44c2.9434 0 4.208 1.2649 4.208 3.4263C31.6484 27.5183 29.9473 28.875 25.3481 28.875zm1.4947-4.7371H22.75a1.473 1.473 0 00-.6211 1.2417c0 .92.6895 1.4717 2.5293 1.4717H26.13c1.9087 0 2.76-.4829 2.76-1.4946C28.89 24.5979 28.3374 24.1379 26.8428 24.1379zm.667-8.163v-.3912c0-1.2187-.7588-1.84-2.1617-1.84s-2.1616.6209-2.1616 1.84v.3912c0 1.1955.7588 1.84 2.1616 1.84S27.51 17.17 27.51 15.9749zM2.2344 7.95H5.66l4.1162 7.8413h.0923l4.07-7.8413h3.2886V24H14.3525V12.48h-.0918L13.0186 15.032l-3.2881 6.07-3.2881-6.07L5.2007 12.48H5.1084V24H2.2344z"></path></svg>`;
export default svgResultCarbonIcon;

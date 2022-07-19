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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M28.8281 3.1719a4.0941 4.0941 0 00-5.6562 0L4.05 22.292A6.9537 6.9537 0 002 27.2412V30H4.7559a6.9523 6.9523 0 004.95-2.05L28.8281 8.8286a3.999 3.999 0 000-5.6567zM10.91 18.26l2.8286 2.8286L11.6172 23.21 8.7886 20.3818zM8.2915 26.5356A4.9665 4.9665 0 014.7559 28H4v-.7588a4.9669 4.9669 0 011.4644-3.5351l1.91-1.91 2.8286 2.8281zM27.4141 7.4141L15.1528 19.6748l-2.8286-2.8286 12.2617-12.26a2.0473 2.0473 0 012.8282 0 1.9995 1.9995 0 010 2.8282zM6.5 15A3.4994 3.4994 0 014.0249 9.026l3.5005-3.5a1.5019 1.5019 0 000-2.121 1.537 1.537 0 00-2.1216 0L3.415 5.3936 2 3.98 3.99 1.9915a3.5849 3.5849 0 014.95 0 3.5039 3.5039 0 010 4.949L5.439 10.44a1.5019 1.5019 0 000 2.121 1.5369 1.5369 0 002.1215 0l4.0249-4.0243L13 9.9507 8.9746 13.975A3.4754 3.4754 0 016.5 15z"></path></svg>`;
export default svgResultCarbonIcon;

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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path fill="none" d="M23.75,10h-1.5V6h1.5ZM23,11a1,1,0,1,0,1,1A1,1,0,0,0,23,11Z" data-icon-path="inner-path"></path><path d="M29.9115 13.9355L23.6284 2.3706a.7181.7181 0 00-1.2568 0L16.0885 13.9355A.72.72 0 0016.72 15H29.28A.72.72 0 0029.9115 13.9355zM22.25 6h1.5v4h-1.5zM23 13a1 1 0 111-1A1 1 0 0123 13zM26 19V17H17V28a2.0027 2.0027 0 002 2h3V28H19V19zM12 30H9V28h3V15.5664L8.4854 13.4575l1.0292-1.7148 3.5147 2.1084A2.0115 2.0115 0 0114 15.5664V28A2.0024 2.0024 0 0112 30z"></path><path d="M18.6638,5.0059l.96-1.7671A8.9324,8.9324,0,0,0,15,2,8.0275,8.0275,0,0,0,8.0786,6.001C8.0525,6,8.0264,6,8,6A6,6,0,0,0,8,18V16A4,4,0,0,1,8,8a2.7009,2.7009,0,0,1,.387.0391l.863.1142.3086-.6675A6.0192,6.0192,0,0,1,15,4,6.8916,6.8916,0,0,1,18.6638,5.0059Z"></path></svg>`;
export default svgResultCarbonIcon;

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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M15.3472 29.9851a13.9282 13.9282 0 01-4.2051-.8516l.6943-1.8754a11.929 11.929 0 003.6026.729zm4.2651-.4558l-.5146-1.9326a11.915 11.915 0 003.3632-1.4827l1.0782 1.6846A13.915 13.915 0 0119.6123 29.5293zM7.395 27.0439a14.0632 14.0632 0 01-2.94-3.1218l1.6484-1.1333a12.0521 12.0521 0 002.522 2.6785zM2.5967 20.0544A14.0512 14.0512 0 012.0005 16H4a12.0412 12.0412 0 00.5117 3.4763zM26 17l-1.4141 1.4141L26.1719 20H15.8157a2.9874 2.9874 0 00-.2742-.5762l4.481-5.601A2.9676 2.9676 0 0021 14a3 3 0 10-2.8157-4H13.8157a2.982 2.982 0 00-5.6314 0H2v2H8.1843a2.982 2.982 0 005.6314 0h4.3686a2.9874 2.9874 0 00.2742.5762l-4.481 5.601A2.9676 2.9676 0 0013 18a3 3 0 102.8157 4H26.1719l-1.586 1.5859L26 25l4-4zm-5-7a1 1 0 11-1 1A1.0009 1.0009 0 0121 10zM11 12a1 1 0 111-1A1.0009 1.0009 0 0111 12zm2 10a1 1 0 111-1A1.0009 1.0009 0 0113 22zM28 16a12.0412 12.0412 0 00-.5117-3.4763l1.915-.5781A14.0551 14.0551 0 0130 16zM25.8965 9.2112a12.0521 12.0521 0 00-2.522-2.6785l1.23-1.5766a14.0632 14.0632 0 012.94 3.1218zM9.5391 5.886L8.4609 4.2014a13.915 13.915 0 013.9268-1.7307l.5146 1.9326A11.915 11.915 0 009.5391 5.886zM20.1636 4.7419a11.929 11.929 0 00-3.6026-.729l.0918-1.998a13.9282 13.9282 0 014.2051.8516z"></path></svg>`;
export default svgResultCarbonIcon;

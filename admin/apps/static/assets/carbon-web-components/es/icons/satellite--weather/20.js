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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M26.5 12H19a4 4 0 010-8h.0835A4.7864 4.7864 0 0123 2a4.9816 4.9816 0 014.6543 3.2034A3.4667 3.4667 0 0130 8.5 3.5041 3.5041 0 0126.5 12zM19 6a2 2 0 000 4h7.5A1.5017 1.5017 0 0028 8.5a1.4855 1.4855 0 00-1.2778-1.4739L26.061 6.927l-.1616-.6487a2.9568 2.9568 0 00-5.4873-.7121L20.1143 6zM13 28V24.8882a7.9363 7.9363 0 004.707-2.2818.9995.9995 0 000-1.414L13.4644 16.95 16 14.4141 14.5859 13 12.05 15.5356 7.8076 11.293a.9994.9994 0 00-1.414 0 7.9993 7.9993 0 000 11.3134c.1621.1622.3327.3125.5058.459L4.4321 28H2v2H30V28zm-2 0H6.6685L8.59 24.1567A7.8927 7.8927 0 0011 24.873zM7.8076 21.1924a6.0036 6.0036 0 01-.6489-7.72l8.3686 8.3681a6.0026 6.0026 0 01-7.72-.6484z"></path></svg>`;
export default svgResultCarbonIcon;

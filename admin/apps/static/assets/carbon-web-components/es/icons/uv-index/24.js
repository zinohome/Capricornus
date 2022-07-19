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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M16,5.9121l1.7444,2.9326.7822,1.315,1.4739-.4107,3.1206-.87L22.2512,12,21.84,13.4731l1.315.7823L26.0876,16l-2.9323,1.7441-1.315.7818L22.2512,20l.87,3.1211-3.1208-.87L18.5266,21.84l-.7822,1.315L16,26.0879l-1.7444-2.9326-.7822-1.315L12,22.251l-3.1208.87L9.7488,20l.4109-1.4741-1.315-.7818L5.9124,16l2.9323-1.7446,1.315-.7823L9.7488,12l-.87-3.1206L12,9.749l1.4739.4107.7822-1.315L16,5.9121M16,2,12.5366,7.8223,6,6l1.8223,6.5366L2,16l5.8223,3.4629L6,26l6.5366-1.8223L16,30l3.4634-5.8223L26,26l-1.8223-6.5371L30,16l-5.8223-3.4634L26,6,19.4634,7.8223,16,2Z"></path></svg>`;
export default svgResultCarbonIcon;

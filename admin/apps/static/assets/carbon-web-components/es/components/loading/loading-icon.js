let _ = t => t,
    _t,
    _t2;

/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { html } from 'lit-html';
import settings from 'carbon-components/es/globals/js/settings';
import LOADING_TYPE from './types';
const {
  prefix
} = settings;
/**
 * @param Object options The options.
 * @param [options.assistiveText] The assistive text for the spinner icon.
 * @param [options.type] The spinner type.
 * @returns The spinner icon.
 */

export default (({
  assistiveText,
  type
}) => {
  const radius = type === LOADING_TYPE.SMALL ? '42' : '44';
  return html(_t || (_t = _` <svg class="${0}--loading__svg" viewBox="0 0 100 100"> ${0} <circle ?hidden="${0}" class="${0}--loading__background" cx="50%" cy="50%" r="${0}"/> <circle class="${0}--loading__stroke" cx="50%" cy="50%" r="${0}"/> </svg> `), prefix, !assistiveText ? undefined : html(_t2 || (_t2 = _` <title>${0}</title> `), assistiveText), type !== LOADING_TYPE.SMALL, prefix, radius, prefix, radius);
});
//# sourceMappingURL=loading-icon.js.map

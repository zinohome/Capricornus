/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { LitElement } from 'lit-element';
import { LOADING_TYPE } from './defs';
/**
 * Spinner indicating loading state.
 * @element bx-loading
 */
declare class BXLoading extends LitElement {
    /**
     * The assistive text for the spinner icon.
     */
    assistiveText: string;
    /**
     * Spinner type.
     */
    type: LOADING_TYPE;
    /**
     * `true` if spinner should stop.
     */
    inactive: boolean;
    render(): import("lit-element").TemplateResult;
    static styles: any;
}
export { LOADING_TYPE };
export default BXLoading;

//# sourceMappingURL=loading.d.ts.map

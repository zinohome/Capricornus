/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { LitElement } from 'lit-element';
import { INLINE_LOADING_STATE } from './defs';
export { INLINE_LOADING_STATE };
/**
 * Lnline loading spinner.
 * @element bx-inline-loading
 */
declare class BXInlineLoading extends LitElement {
    /**
     * @returns The template for the status icon.
     */
    private _renderIcon;
    /**
     * The loading status.
     */
    status: INLINE_LOADING_STATE;
    connectedCallback(): void;
    render(): import("lit-element").TemplateResult;
    static styles: any;
}
export default BXInlineLoading;

//# sourceMappingURL=inline-loading.d.ts.map

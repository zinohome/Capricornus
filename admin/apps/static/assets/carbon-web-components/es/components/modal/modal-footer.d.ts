/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { LitElement } from 'lit-element';
/**
 * Modal footer.
 * @element bx-modal-footer
 */
declare class BXModalFooter extends LitElement {
    /**
     * `true` if this modal footer has more than two buttons.
     */
    private _hasMoreThanTwoButtons;
    /**
     * Handles `slotchange` event.
     */
    private _handleSlotChange;
    render(): import("lit-element").TemplateResult;
    /**
     * A selector that selects the child buttons.
     */
    static get selectorButtons(): string;
    static styles: any;
}
export default BXModalFooter;

//# sourceMappingURL=modal-footer.d.ts.map

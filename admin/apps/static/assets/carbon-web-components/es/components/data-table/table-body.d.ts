/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { LitElement } from 'lit-element';
import { TABLE_COLOR_SCHEME } from './defs';
/**
 * Data table body.
 * @element bx-table-body
 */
declare class BXTableBody extends LitElement {
    /**
     * The `<slot>` element in the shadow DOM.
     */
    private _slotNode;
    /**
     * Updates `even`/`odd` properties of the child `<bx-table-row>`s.
     */
    private _updateZebra;
    /**
     * Handles `slotchange` event in the `<slot>` element in the shadow DOM.
     */
    private _handleSlotChange;
    /**
     * The color scheme.
     */
    colorScheme: TABLE_COLOR_SCHEME;
    connectedCallback(): void;
    updated(changedProperties: any): void;
    render(): import("lit-element").TemplateResult;
    static styles: any;
}
export default BXTableBody;

//# sourceMappingURL=table-body.d.ts.map

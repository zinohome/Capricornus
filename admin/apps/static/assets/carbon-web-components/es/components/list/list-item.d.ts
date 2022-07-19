/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { LitElement } from 'lit-element';
/**
 * List item.
 * @element bx-list-item
 * @slot nested - The nested child list.
 */
declare class BXListItem extends LitElement {
    /**
     * `true` if there is slotted nested child list.
     */
    private _hasNestedChild;
    /**
     * Handles `slotchange` event for the `<slot>` for the nested child list.
     * @param event The event.
     */
    private _handleSlotChangeNested;
    /**
     * `true` if this list item is a child of a nested list.
     * `<bx-ordered-list>` or `<bx-unordered-list>` automatically sets this property.
     */
    nested: boolean;
    connectedCallback(): void;
    render(): import("lit-element").TemplateResult;
    /**
     * A selector that will return nested list.
     */
    static get selectorNestedList(): string;
    static styles: any;
}
export default BXListItem;

//# sourceMappingURL=list-item.d.ts.map

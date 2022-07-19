/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import BXDropdownItem from '../dropdown/dropdown-item';
/**
 * Multi select item.
 * @element bx-multi-select-item
 */
declare class BXMultiSelectItem extends BXDropdownItem {
    /**
     * The property to hide when item is filtered from input
     */
    filtered: any;
    /**
     * The `name` attribute for the `<input>` for selection.
     */
    selectionName: string;
    render(): import("lit-element").TemplateResult;
    /**
     * A selector that will return multi select.
     */
    static get selectorList(): string;
    static styles: any;
}
export default BXMultiSelectItem;

//# sourceMappingURL=multi-select-item.d.ts.map

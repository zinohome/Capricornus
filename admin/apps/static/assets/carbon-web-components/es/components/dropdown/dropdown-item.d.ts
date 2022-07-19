/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { LitElement } from 'lit-element';
import { DROPDOWN_SIZE } from './dropdown';
/**
 * Dropdown item.
 * @element bx-dropdown-item
 * @csspart selected-icon The selected icon.
 */
declare class BXDropdownItem extends LitElement {
    /**
     * `true` if this dropdown item should be disabled.
     */
    disabled: boolean;
    /**
     * `true` if this dropdown item should be highlighted.
     * If `true`, parent `<dropdown>` selects/deselects this dropdown item upon keyboard interaction.
     * @private
     */
    highlighted: boolean;
    /**
     * `true` if this dropdown item should be selected.
     * @private
     */
    selected: boolean;
    /**
     * Dropdown size.
     */
    size: DROPDOWN_SIZE;
    /**
     * The `value` attribute that is set to the parent `<bx-dropdown>` when this dropdown item is selected.
     */
    value: string;
    render(): import("lit-element").TemplateResult;
    static styles: any;
}
export default BXDropdownItem;

//# sourceMappingURL=dropdown-item.d.ts.map

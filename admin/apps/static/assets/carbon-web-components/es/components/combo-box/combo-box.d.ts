/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { TemplateResult } from 'lit-html';
import BXDropdown from '../dropdown/dropdown';
import BXComboBoxItem from './combo-box-item';
export { DROPDOWN_COLOR_SCHEME, DROPDOWN_SIZE, DROPDOWN_TYPE } from '../dropdown/dropdown';
/**
 * Combo box.
 * @element bx-combo-box
 * @fires bx-combo-box-beingselected
 *   The custom event fired before a combo box item is selected upon a user gesture.
 *   Cancellation of this event stops changing the user-initiated selection.
 * @fires bx-combo-box-beingtoggled
 *   The custom event fired before the open state of this combo box is toggled upon a user gesture.
 *   Cancellation of this event stops the user-initiated toggling.
 * @fires bx-combo-box-selected - The custom event fired after a combo box item is selected upon a user gesture.
 * @fires bx-combo-box-toggled - The custom event fired after the open state of this combo box is toggled upon a user gesture.
 */
declare class BXComboBox extends BXDropdown {
    /**
     * The text content that should be set to the `<input>` for filtering.
     */
    protected _filterInputValue: string;
    protected _shouldTriggerBeFocusable: boolean;
    /**
     * The `<input>` for filtering.
     */
    private _filterInputNode;
    /**
     * The menu containing all selectable items.
     */
    private _itemMenu;
    /**
     * The selection button.
     */
    private _selectionButtonNode;
    /**
     * @param item A combo box item.
     * @returns `true` if the given combo box item matches the query text user types.
     */
    protected _testItemWithQueryText(item: any): boolean;
    /**
     * The default item matching callback.
     * @param item The combo box item.
     * @param queryText The query text user types.
     * @returns `true` if the given combo box item matches the given query text.
     */
    protected _defaultItemMatches(item: BXComboBoxItem, queryText: string): boolean;
    /**
     * Handles `input` event on the `<input>` for filtering.
     */
    protected _handleInput(): void;
    protected _handleClickInner(event: MouseEvent): void;
    protected _handleKeypressInner(event: KeyboardEvent): void;
    /**
     * Handles user-initiated clearing the `<input>` for filtering.
     */
    protected _handleUserInitiatedClearInput(): void;
    protected _handleUserInitiatedSelectItem(item?: BXComboBoxItem): void;
    protected _selectionDidChange(itemToSelect?: BXComboBoxItem): void;
    protected _renderTriggerContent(): TemplateResult;
    protected _renderFollowingTriggerContent(): TemplateResult | void;
    /**
     * The `aria-label` attribute for the icon to clear selection.
     */
    clearSelectionLabel: string;
    /**
     * The `aria-label` attribute for the `<input>` for filtering.
     */
    inputLabel: string;
    /**
     * The custom item matching callback.
     */
    itemMatches: (item: BXComboBoxItem, queryText: string) => boolean;
    shouldUpdate(changedProperties: any): boolean;
    updated(): void;
    static TRIGGER_KEYS: Set<string>;
    /**
     * A selector that will return highlighted items.
     */
    static get selectorItemHighlighted(): string;
    /**
     * A selector that will return combo box items.
     */
    static get selectorItem(): string;
    /**
     * A selector that will return selected items.
     */
    static get selectorItemSelected(): string;
    /**
     * The name of the custom event fired before this combo box item is being toggled upon a user gesture.
     * Cancellation of this event stops the user-initiated action of toggling this combo box item.
     */
    static get eventBeforeToggle(): string;
    /**
     * The name of the custom event fired after this combo box item is toggled upon a user gesture.
     */
    static get eventToggle(): string;
    /**
     * The name of the custom event fired before a combo box item is selected upon a user gesture.
     * Cancellation of this event stops changing the user-initiated selection.
     */
    static get eventBeforeSelect(): string;
    /**
     * The name of the custom event fired after a a combo box item is selected upon a user gesture.
     */
    static get eventSelect(): string;
    static styles: any;
}
export default BXComboBox;

//# sourceMappingURL=combo-box.d.ts.map

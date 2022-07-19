/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { TemplateResult } from 'lit-element';
import BXDropdown from '../dropdown/dropdown';
import BXMultiSelectItem from './multi-select-item';
export { DROPDOWN_COLOR_SCHEME, DROPDOWN_SIZE, DROPDOWN_TYPE } from '../dropdown/dropdown';
/**
 * Multi select.
 * @element bx-multi-select
 * @fires bx-multi-select-beingselected
 *   The custom event fired before a multi select item is selected upon a user gesture.
 *   Cancellation of this event stops changing the user-initiated selection.
 * @fires bx-multi-select-selected - The custom event fired after a multi select item is selected upon a user gesture.
 * @fires bx-multi-select-beingtoggled
 *   The custom event fired before the open state of this multi select is toggled upon a user gesture.
 *   Cancellation of this event stops the user-initiated toggling.
 * @fires bx-multi-select-toggled
 *   The custom event fired after the open state of this multi select is toggled upon a user gesture.
 */
declare class BXMultiSelect extends BXDropdown {
    filterable: any;
    /**
     * The count of selected items.
     */
    private _selectedItemsCount;
    /**
     * The clear button.
     */
    private _clearButtonNode;
    /**
     * The selection button.
     */
    private _selectionButtonNode;
    /**
     * The `<input>` for filtering.
     */
    private _filterInputNode;
    /**
     * The trigger button.
     */
    private _triggerNode;
    protected _selectionShouldChange(itemToSelect?: BXMultiSelectItem): boolean;
    protected _selectionDidChange(itemToSelect?: BXMultiSelectItem): void;
    protected _handleClickInner(event: MouseEvent): void;
    /**
     * Handler for the `keypress` event, ensures filter still works upon entering space
     */
    protected _handleKeypressInner(event: KeyboardEvent): void;
    /**
     * Special andler for the `keypress` event, ensures space selection for filterable
     * variation is disabled
     */
    protected _handleKeypressInnerFlterable(event: KeyboardEvent): void;
    protected _renderPrecedingTriggerContent(): TemplateResult | undefined;
    /**
      @returns The main content of the trigger button.
     */
    protected _renderTriggerContent(): TemplateResult;
    protected _renderFollowingTriggerContent(): TemplateResult | void;
    /**
     * Handles `input` event on the `<input>` for filtering.
     */
    protected _handleInput(): void;
    /**
     * Navigate through dropdown items.
     * @param direction `-1` to navigate backward, `1` to navigate forward.
     */
    protected _navigate(direction: number): void;
    /**
     * Handles user-initiated clearing the `<input>` for filtering.
     */
    protected _handleUserInitiatedClearInput(): void;
    /**
     * The `aria-label` attribute for the icon to clear selection.
     */
    clearSelectionLabel: string;
    /**
     * An assistive text for screen reader to announce, telling that an item is unselected.
     */
    unselectedItemAssistiveText: string;
    /**
     * An assistive text for screen reader to announce, telling that all items are unselected.
     */
    unselectedAllAssistiveText: string;
    shouldUpdate(changedProperties: any): boolean;
    /**
     * A selector to ignore the `click` events from.
     * Primary for the checkbox label where the `click` event will happen from the associated check box.
     */
    private static get selectorIgnoreClickInner();
    /**
     * A selector that will return highlighted items.
     */
    static get selectorItemHighlighted(): string;
    /**
     * A selector that will return multi select items.
     * We use a separate property from `.itemTagName` due to the nature in difference of tag name vs. selector.
     */
    static get selectorItem(): string;
    /**
     * A selector that will return remaining items after a filter.
     */
    static get selectorItemFiltered(): string;
    /**
     * A selector that will return remaining items after a filter.
     */
    static get selectorItemResults(): string;
    /**
     * A selector that will return selected items.
     */
    static get selectorItemSelected(): string;
    /**
     * The name of the custom event fired before this multi select item is being toggled upon a user gesture.
     * Cancellation of this event stops the user-initiated action of toggling this multi select item.
     */
    static get eventBeforeToggle(): string;
    /**
     * The name of the custom event fired after this multi select item is toggled upon a user gesture.
     */
    static get eventToggle(): string;
    /**
     * The name of the custom event fired before a multi select item is selected upon a user gesture.
     * Cancellation of this event stops changing the user-initiated selection.
     */
    static get eventBeforeSelect(): string;
    /**
     * The name of the custom event fired after a a multi select item is selected upon a user gesture.
     */
    static get eventSelect(): string;
    static styles: any;
}
export default BXMultiSelect;

//# sourceMappingURL=multi-select.d.ts.map

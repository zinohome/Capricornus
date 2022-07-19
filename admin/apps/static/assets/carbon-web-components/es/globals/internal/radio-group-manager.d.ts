/**
 * @license
 *
 * Copyright IBM Corp. 2019
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * The navigation direction.
 */
export declare enum NAVIGATION_DIRECTION {
    /**
     * Navigating backward.
     */
    BACKWARD = -1,
    /**
     * Navigating forward.
     */
    FORWARD = 1
}
export interface ManagedRadioButtonDelegate {
    /**
     * `true` if this radio button is selected.
     */
    checked: boolean;
    /**
     * The tab index.
     */
    tabIndex: number;
    /**
     * The name of the radio group.
     */
    name: string;
    /**
     * @param other A node to compare this radio button's DOM position in document with.
     * @returns
     *   An integer value, the same format as `Node.compareDocumentPosition` does,
     *   whose bits represent the calling this radio button's relationship to the given node within the document.
     */
    compareDocumentPosition(other: ManagedRadioButtonDelegate): number;
    /**
     * Focuses on the radio button.
     */
    focus(): void;
}
declare type ManagedRadioButton = HTMLInputElement | ManagedRadioButtonDelegate;
/**
 * An object that manages radio groups in a document.
 * There must be only one instance for one document.
 */
declare class RadioGroupManager {
    /**
     * Radio groups, keyed by their names.
     */
    private _groups;
    private constructor();
    /**
     * @param radio A radio button.
     * @returns
     *   `true` if the given radio button should be focusable, which is either:
     *   - The radio button is selected
     *   - No radio button is selected and the radio button is first one in the radio group
     */
    shouldBeFocusable(radio: ManagedRadioButton): boolean;
    /**
     * @param radio A radio button.
     * @returns The sorted radio group the given radio button is in.
     */
    getSortedGroup(radio: ManagedRadioButton): ManagedRadioButton[];
    /**
     * Manages a radio button.
     * @param radio The radio button to manage.
     * @returns This object.
     */
    add(radio: ManagedRadioButton): this;
    /**
     * Unmanages a radio button.
     * @param radio The radio button to unmanage.
     * @param name The old name of the radio button to unmanage.
     * @returns `true` if `element` was actually managed.
     */
    delete(radio: ManagedRadioButton, name?: string): boolean;
    /**
     * Selects or focuses on a radio button.
     * @param radio The radio button to select.
     */
    select(radio: ManagedRadioButton): void;
    /**
     * @param radio The currently selected radio button.
     * @param direction The direction to navigate to.
     * @returns The radio button that should be selected next.
     */
    navigate(radio: ManagedRadioButton, direction: NAVIGATION_DIRECTION): ManagedRadioButton;
    /**
     * `RadioGroupManager` instances associated with documents.
     */
    private static _instances;
    /**
     * @param document A document element.
     * @returns The `RadioGroupManager` instance associated with the given document.
     */
    static get(document: Document): any;
}
export default RadioGroupManager;

//# sourceMappingURL=radio-group-manager.d.ts.map

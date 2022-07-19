/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
export { FORM_ELEMENT_COLOR_SCHEME as TABS_COLOR_SCHEME } from '../../globals/shared-enums';
/**
 * Navigation direction for narrow mode, associated with key symbols.
 */
export declare const NAVIGATION_DIRECTION_NARROW: {
    Up: number;
    ArrowUp: number;
    Down: number;
    ArrowDown: number;
};
/**
 * The keyboard action categories for dropdown.
 */
export declare enum TABS_KEYBOARD_ACTION {
    /**
     * Not doing any action.
     */
    NONE = "none",
    /**
     * Keyboard action to close menu.
     */
    CLOSING = "closing",
    /**
     * Keyboard action to navigate back/forward.
     */
    NAVIGATING = "navigating",
    /**
     * Keyboard action to open/close menu on the trigger button or select/deselect a menu item.
     */
    TRIGGERING = "triggering"
}
/**
 * Tabs types.
 */
export declare enum TABS_TYPE {
    /**
     * Regular tabs.
     */
    REGULAR = "",
    /**
     * Container type.
     */
    CONTAINER = "container"
}

//# sourceMappingURL=defs.d.ts.map

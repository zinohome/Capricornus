/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import BXFloatingMenu, { FLOATING_MENU_ALIGNMENT, FLOATING_MENU_DIRECTION } from '../floating-menu/floating-menu';
/**
 * Tooltip body.
 */
declare class BXTooltipBody extends BXFloatingMenu {
    /**
     * How the menu is aligned to the trigger button.
     */
    alignment: FLOATING_MENU_ALIGNMENT;
    /**
     * The menu direction.
     */
    direction: FLOATING_MENU_DIRECTION;
    /**
     * `true` if the dropdown should be open.
     */
    open: boolean;
    /**
     * Handles `keydown` event on this element.
     */
    private _handleKeydown;
    /**
     * The position of this tooltip body.
     */
    get position(): import("../floating-menu/floating-menu").FloatingMenuPosition;
    connectedCallback(): void;
    render(): import("lit-element").TemplateResult;
    static styles: any;
}
export default BXTooltipBody;

//# sourceMappingURL=tooltip-body.d.ts.map

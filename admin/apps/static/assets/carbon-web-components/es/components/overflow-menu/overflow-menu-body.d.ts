/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import BXFloatingMenu, { FLOATING_MENU_ALIGNMENT, FLOATING_MENU_DIRECTION } from '../floating-menu/floating-menu';
import { OVERFLOW_MENU_COLOR_SCHEME } from './defs';
/**
 * Overflow menu body.
 * @element bx-overflow-menu-body
 */
declare class BXOverflowMenuBody extends BXFloatingMenu {
    /**
     * How the menu is aligned to the trigger button.
     */
    alignment: FLOATING_MENU_ALIGNMENT;
    /**
     * The color scheme.
     */
    colorScheme: OVERFLOW_MENU_COLOR_SCHEME;
    /**
     * The menu direction.
     */
    direction: FLOATING_MENU_DIRECTION;
    /**
     * `true` if the menu should be open.
     * @private
     */
    open: boolean;
    connectedCallback(): void;
    render(): import("lit-element").TemplateResult;
    static styles: any;
}
export default BXOverflowMenuBody;

//# sourceMappingURL=overflow-menu-body.d.ts.map

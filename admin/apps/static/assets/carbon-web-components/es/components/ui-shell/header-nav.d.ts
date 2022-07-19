/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { LitElement } from 'lit-element';
/**
 * Header.
 * @element bx-header-nav
 * @csspart menu-body The menu body.
 * @csspart divider The divider.
 */
declare class BXHeaderNav extends LitElement {
    /**
     * The `aria-label` attribute for the menu bar UI.
     */
    menuBarLabel: string;
    connectedCallback(): void;
    render(): import("lit-element").TemplateResult;
    static styles: any;
}
export default BXHeaderNav;

//# sourceMappingURL=header-nav.d.ts.map

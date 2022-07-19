/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import BXContentSwitcherItem from '../content-switcher/content-switcher-item';
import { TABS_TYPE } from './tabs';
/**
 * Basic tab.
 * @element bx-tab
 */
declare class BXTab extends BXContentSwitcherItem {
    /**
     * `true` if this tab should be highlighted.
     * If `true`, parent `<bx-tabs>` selects/deselects this tab upon keyboard interaction.
     * @private
     */
    highlighted: boolean;
    /**
     * `true` if this tab is in a focused `<bx-tabs>`.
     * @private
     */
    inFocus: boolean;
    /**
     * Tab type.
     */
    type: TABS_TYPE;
    connectedCallback(): void;
    render(): import("lit-element").TemplateResult;
    static styles: any;
}
export default BXTab;

//# sourceMappingURL=tab.d.ts.map

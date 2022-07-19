/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import BXCheckbox from '../checkbox/checkbox';
import { TOGGLE_SIZE } from './defs';
export { TOGGLE_SIZE };
/**
 * Basic toggle.
 * @element bx-toggle
 * @slot label-text - The label text.
 * @slot checked-text - The text for the checked state.
 * @slot unchecked-text - The text for the unchecked state.
 * @fires bx-toggle-changed - The custom event fired after this changebox changes its checked state.
 */
declare class BXToggle extends BXCheckbox {
    protected _renderCheckmark(): import("lit-element").TemplateResult | undefined;
    /**
     * The text for the checked state.
     */
    checkedText: string;
    /**
     * Toggle size.
     */
    size: TOGGLE_SIZE;
    /**
     * The text for the unchecked state.
     */
    uncheckedText: string;
    render(): import("lit-element").TemplateResult;
    /**
     * The name of the custom event fired after this changebox changes its checked state.
     */
    static get eventChange(): string;
    static styles: any;
}
export default BXToggle;

//# sourceMappingURL=toggle.d.ts.map

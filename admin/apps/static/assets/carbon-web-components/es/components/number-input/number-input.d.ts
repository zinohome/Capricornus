/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { NUMBER_INPUT_COLOR_SCHEME, NUMBER_INPUT_VALIDATION_STATUS } from './defs';
import BXInput, { INPUT_SIZE } from '../input/input';
export { NUMBER_INPUT_COLOR_SCHEME, NUMBER_INPUT_VALIDATION_STATUS };
/**
 * Number input.
 * @element bx-number-input
 * @slot helper-text - The helper text.
 * @slot label-text - The label text.
 * @slot validity-message - The validity message. If present and non-empty, this input shows the UI of its invalid state.
 */
export default class BXNumberInput extends BXInput {
    /**
     * Handles `input` event on the `<input>` in the shadow DOM.
     */
    protected _handleInput(event: Event): void;
    /**
     * Handles `click` event on the up button in the shadow DOM.
     */
    protected _handleUserInitiatedStepDown(_: Event): void;
    /**
     * Handles `click` event on the down button in the shadow DOM.
     */
    protected _handleUserInitiatedStepUp(_: Event): void;
    /**
     * The underlying input element
     */
    protected _input: HTMLInputElement;
    _testValidity(): string;
    _getValidityMessage(state: string): any;
    protected _min: string;
    protected _max: string;
    protected _step: string;
    /**
     * The color scheme.
     */
    colorScheme: NUMBER_INPUT_COLOR_SCHEME;
    /**
     * The minimum value allowed in the input
     */
    get min(): string;
    set min(value: string);
    /**
     * The maximum value allowed in the input
     */
    get max(): string;
    set max(value: string);
    /**
     * The amount the value should increase or decrease by
     */
    get step(): string;
    set step(value: string);
    /**
     * Set to `true` to enable the mobile variant of the number input
     */
    mobile: boolean;
    /**
     * Aria text for the button that increments the value
     */
    incrementButtonAssistiveText: string;
    /**
     * Aria text for the button that decrements the value
     */
    decrementButtonAssistiveText: string;
    /**
     * The input box size.
     */
    size: INPUT_SIZE;
    /**
     * The validity message shown when the value is greater than the maximum
     *
     * Also available via the `validity-message-max` slot
     */
    validityMessageMax: string;
    /**
     * The validity message shown when the value is less than the minimum
     *
     * Also available via the `validity-message-min` slot
     */
    validityMessageMin: string;
    /**
     * Handles incrementing the value in the input
     */
    stepUp(): void;
    /**
     * Handles decrementing the value in the input
     */
    stepDown(): void;
    createRenderRoot(): ShadowRoot;
    render(): import("lit-element").TemplateResult;
    /**
     * The name of the custom event fired after the value is changed upon a user gesture.
     */
    static get eventInput(): string;
    static styles: any;
}

//# sourceMappingURL=number-input.d.ts.map

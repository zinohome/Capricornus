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
 * Skeleton of progress indicator.
 */
declare class BXProgressIndicatorSkeleton extends LitElement {
    /**
     * `true` if the progress indicator should be vertical. Corresponds to the attribute with the same name.
     */
    vertical: boolean;
    updated(changedProperties: any): void;
    render(): import("lit-element").TemplateResult;
    /**
     * A selector that will return progress steps.
     */
    static get selectorStep(): string;
    static styles: any;
}
export default BXProgressIndicatorSkeleton;

//# sourceMappingURL=progress-indicator-skeleton.d.ts.map

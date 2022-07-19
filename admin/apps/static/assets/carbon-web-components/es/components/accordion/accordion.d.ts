/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { LitElement } from 'lit-element';
import { ACCORDION_SIZE } from './defs';
export { ACCORDION_SIZE };
/**
 * Accordion container.
 * @element bx-accordion
 */
declare class BXAccordion extends LitElement {
    /**
     * Accordion size.
     */
    size: ACCORDION_SIZE;
    connectedCallback(): void;
    updated(changedProperties: any): void;
    render(): import("lit-element").TemplateResult;
    static get selectorAccordionItems(): string;
    static styles: any;
}
export default BXAccordion;

//# sourceMappingURL=accordion.d.ts.map

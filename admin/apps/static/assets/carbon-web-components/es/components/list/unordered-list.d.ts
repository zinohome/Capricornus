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
 * Ordered list.
 */
declare class BXUnorderedList extends LitElement {
    /**
     * `true` if expressive theme enabled.
     */
    isExpressive: boolean;
    connectedCallback(): void;
    render(): import("lit-element").TemplateResult;
    /**
     * A selector that will return list item.
     */
    static get selectorListItem(): string;
    static styles: any;
}
export default BXUnorderedList;

//# sourceMappingURL=unordered-list.d.ts.map

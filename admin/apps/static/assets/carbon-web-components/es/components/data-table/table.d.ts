/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { LitElement } from 'lit-element';
import { TABLE_COLOR_SCHEME, TABLE_SIZE } from './defs';
export { TABLE_COLOR_SCHEME, TABLE_SIZE };
/**
 * Data table.
 * @element bx-table
 */
declare class BXTable extends LitElement {
    /**
     * The table size.
     */
    size: TABLE_SIZE;
    /**
     * `true` if this table should support sorting.
     */
    sort: boolean;
    connectedCallback(): void;
    updated(changedProperties: any): void;
    render(): import("lit-element").TemplateResult;
    /**
     * The CSS selector to find the rows, including header rows.
     */
    static get selectorRowsWithHeader(): string;
    static styles: any;
}
export default BXTable;

//# sourceMappingURL=table.d.ts.map

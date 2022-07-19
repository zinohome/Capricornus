/**
 * @license
 *
 * Copyright IBM Corp. 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { LitElement } from 'lit-element';
/**
 * Table row of collapsible details.
 * @element bx-table-expanded-row
 */
declare class BXTableExpandedRow extends LitElement {
    /**
     * The colspan.
     */
    colSpan: number;
    /**
     * `true` if the table row should be expanded.
     */
    expanded: boolean;
    /**
     * `true` if the table row should be highlighted.
     */
    highlighted: boolean;
    render(): import("lit-element").TemplateResult;
    static styles: any;
}
export default BXTableExpandedRow;

//# sourceMappingURL=table-expanded-row.d.ts.map

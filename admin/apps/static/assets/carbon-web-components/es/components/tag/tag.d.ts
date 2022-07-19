/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { LitElement } from 'lit-element';
import { TAG_SIZE, TAG_TYPE } from './defs';
export { TAG_SIZE, TAG_TYPE };
/**
 * Tag.
 * @element bx-tag
 */
export default class BXTag extends LitElement {
    /**
     * `true` if the tag should be disabled
     */
    disabled: boolean;
    /**
     * The size of the tag.
     */
    size: TAG_SIZE;
    /**
     * The type of the tag.
     */
    type: TAG_TYPE;
    render(): import("lit-element").TemplateResult;
    static styles: any;
}

//# sourceMappingURL=tag.d.ts.map

/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { LitElement } from 'lit-element';
/**
 * The shell UI for file uploader.
 * @element bx-file-uploader
 * @slot helper-text The helper text.
 * @slot label-text The label text.
 */
declare class BXFileUploader extends LitElement {
    /**
     * The helper text.
     */
    helperText: string;
    /**
     * The label text.
     */
    labelText: string;
    render(): import("lit-element").TemplateResult;
    static styles: any;
}
export default BXFileUploader;

//# sourceMappingURL=file-uploader.d.ts.map

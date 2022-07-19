/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { LitElement } from 'lit-element';
import { FILE_UPLOADER_ITEM_SIZE, FILE_UPLOADER_ITEM_STATE } from './defs';
export { FILE_UPLOADER_ITEM_SIZE, FILE_UPLOADER_ITEM_STATE };
/**
 * File uploader item.
 * @element bx-file-uploader-item
 * @slot validity-message The validity message.
 * @slot validity-message-supplement The supplemental validity message.
 * @fires bx-file-uploader-item-beingdeleted
 *   The custom event fired before this file uploader item is being deleted upon a user gesture.
 *   Cancellation of this event stops the user-initiated action of deleting this file uploader item.
 * @fires bx-file-uploader-item-deleted - The custom event fired after this file uploader item is deleted upon a user gesture.
 */
declare class BXFileUploaderItem extends LitElement {
    /**
     * Handles `click` event on the delete button.
     */
    private _handleClickDeleteButton;
    /**
     * @returns The content showing the editing UI of this file uploader item.
     */
    private _renderEditing;
    /**
     * @returns The content showing this file uploader's file uploading status as in progress.
     */
    private _renderUploading;
    /**
     * @returns The content showing this file uploader's file uploading status as complete.
     */
    private _renderUploaded;
    /**
     * @returns The content showing this file uploader's status.
     */
    private _renderStatus;
    /**
     * The `aria-label` attribute for the icon to delete this file uploader item.
     */
    deleteAssistiveText: string;
    /**
     * Controls the invalid state and visibility of the `validityMessage`.
     */
    invalid: boolean;
    /**
     * The size of this file uploader item.
     */
    size: FILE_UPLOADER_ITEM_SIZE;
    /**
     * The state of this file uploader item.
     */
    state: FILE_UPLOADER_ITEM_STATE;
    /**
     * The `aria-label` attribute for the icon to indicate file uploading is in progress.
     */
    uploadingAssistiveText: string;
    /**
     * The `aria-label` attribute for the icon to indicate file uploading is complete.
     */
    uploadedAssistiveText: string;
    /**
     * The validity message.
     */
    validityMessage: string;
    render(): import("lit-element").TemplateResult;
    /**
     * The name of the custom event fired before this file uplodaer item is being deleted upon a user gesture.
     * Cancellation of this event stops the user-initiated action of deleting this file uploader item.
     */
    static get eventBeforeDelete(): string;
    /**
     * The name of the custom event fired after this file uplodaer item is deleted upon a user gesture.
     */
    static get eventDelete(): string;
    static styles: any;
}
export default BXFileUploaderItem;

//# sourceMappingURL=file-uploader-item.d.ts.map

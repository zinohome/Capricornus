/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { NOTIFICATION_TYPE } from './defs';
import BXInlineNotification from './inline-notification';
/**
 * Toast notification.
 * @element bx-toast-notification
 * @slot subtitle - The subtitle.
 * @slot title - The title.
 * @fires bx-notification-beingclosed
 *   The custom event fired before this notification is being closed upon a user gesture.
 *   Cancellation of this event stops the user-initiated action of closing this notification.
 * @fires bx-notification-closed - The custom event fired after this notification is closed upon a user gesture.
 */
declare class BXToastNotification extends BXInlineNotification {
    protected _type: NOTIFICATION_TYPE;
    protected _renderText(): import("lit-element").TemplateResult;
    /**
     * The caption.
     */
    caption: string;
    render(): import("lit-element").TemplateResult;
    static styles: any;
}
export default BXToastNotification;

//# sourceMappingURL=toast-notification.d.ts.map

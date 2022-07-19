/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Component } from 'react';
export interface ComponentProps {
  /**
   * `true` if the accordion item should be disabled.
   */
  disabled?: boolean;
  /**
   * `true` if the accordion item should be open.
   */

  /**
   * `true` if the accordion item should be open.
   */
  open?: boolean;
  /**
   * The title text.
   */

  /**
   * The title text.
   */
  titleText?: string;
  /**
   * The event handler for the custom event fired before this accordion item is being toggled upon a user gesture.
   * Cancellation of this event stops the user-initiated action of toggling this accordion item.
   */

  /**
   * The event handler for the custom event fired before this accordion item is being toggled upon a user gesture.
   * Cancellation of this event stops the user-initiated action of toggling this accordion item.
   */
  onBeforeToggle?: (event: CustomEvent) => void;
  /**
   * The event handler for the custom event fired after this accordion item is toggled upon a user gesture.
   */

  /**
   * The event handler for the custom event fired after this accordion item is toggled upon a user gesture.
   */
  onToggle?: (event: CustomEvent) => void;
  [prop: string]: unknown;
}
/**
 * Accordion item.
 * @element bx-accordion-item
 * @fires bx-accordion-item-beingtoggled
 *   The custom event fired before this accordion item is being toggled upon a user gesture.
 *   Cancellation of this event stops the user-initiated action of toggling this accordion item.
 * @fires bx-accordion-item-toggled - The custom event fired after this accordion item is toggled upon a user gesture.
 * @csspart expando The expando button.
 * @csspart expando-icon The expando icon.
 * @csspart title The title.
 * @csspart content The content.
 */

/**
 * Accordion item.
 * @element bx-accordion-item
 * @fires bx-accordion-item-beingtoggled
 *   The custom event fired before this accordion item is being toggled upon a user gesture.
 *   Cancellation of this event stops the user-initiated action of toggling this accordion item.
 * @fires bx-accordion-item-toggled - The custom event fired after this accordion item is toggled upon a user gesture.
 * @csspart expando The expando button.
 * @csspart expando-icon The expando icon.
 * @csspart title The title.
 * @csspart content The content.
 */
declare class BXAccordionItem extends Component<ComponentProps> {}

export default BXAccordionItem;

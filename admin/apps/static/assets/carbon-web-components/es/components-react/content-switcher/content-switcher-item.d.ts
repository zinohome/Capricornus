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
   * `true` if this content switcher item should be disabled.
   */
  disabled?: boolean;
  /**
   * `true` to hide the divider at the left.
   * @private
   */

  /**
   * `true` to hide the divider at the left.
   * @private
   */
  hideDivider?: boolean;
  /**
   * `true` if the content switcher button should be selected.
   * @private
   */

  /**
   * `true` if the content switcher button should be selected.
   * @private
   */
  selected?: boolean;
  /**
   * The element ID of target panel.
   */

  /**
   * The element ID of target panel.
   */
  target?: string;
  /**
   * The `value` attribute that is set to the parent `<bx-content-switcher>` when this content switcher item is selected.
   */

  /**
   * The `value` attribute that is set to the parent `<bx-content-switcher>` when this content switcher item is selected.
   */
  value?: string;
  [prop: string]: unknown;
}
/**
 * Content switcher button.
 * @element bx-content-switcher-item
 */

/**
 * Content switcher button.
 * @element bx-content-switcher-item
 */
declare class BXContentSwitcherItem extends Component<ComponentProps> {}

export default BXContentSwitcherItem;

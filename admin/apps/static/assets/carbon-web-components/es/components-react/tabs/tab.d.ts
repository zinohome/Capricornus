/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Component } from 'react';
import { ComponentProps as ParentComponentProps } from '../content-switcher/content-switcher-item';
export interface ComponentProps extends ParentComponentProps {
  /**
   * `true` if this tab should be highlighted.
   * If `true`, parent `<bx-tabs>` selects/deselects this tab upon keyboard interaction.
   * @private
   */
  highlighted?: boolean;
  /**
   * `true` if this tab is in a focused `<bx-tabs>`.
   * @private
   */

  /**
   * `true` if this tab is in a focused `<bx-tabs>`.
   * @private
   */
  inFocus?: boolean;
  /**
   * Tab type.
   */

  /**
   * Tab type.
   */
  type?: string;
}
/**
 * Basic tab.
 * @element bx-tab
 */

/**
 * Basic tab.
 * @element bx-tab
 */
declare class BXTab extends Component<ComponentProps> {}

export default BXTab;

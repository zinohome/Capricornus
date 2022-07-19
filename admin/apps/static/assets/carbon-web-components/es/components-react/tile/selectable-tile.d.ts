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
   * The a11y text for the checkmark icon of the selected state.
   */
  checkmarkLabel?: string;
  /**
   * The color scheme.
   */

  /**
   * The color scheme.
   */
  colorScheme?: string;
  /**
   * The form name.
   */

  /**
   * The form name.
   */
  name?: string;
  /**
   * `true` to show the selected state.
   */

  /**
   * `true` to show the selected state.
   */
  selected?: boolean;
  /**
   * The form value.
   */

  /**
   * The form value.
   */
  value?: string;
  [prop: string]: unknown;
}
/**
 * Multi-selectable tile.
 * @element bx-selectable-tile
 */

/**
 * Multi-selectable tile.
 * @element bx-selectable-tile
 */
declare class BXSelectableTile extends Component<ComponentProps> {}

export default BXSelectableTile;

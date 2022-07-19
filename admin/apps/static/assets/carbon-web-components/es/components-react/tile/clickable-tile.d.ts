/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Component } from 'react';
import { ComponentProps as ParentComponentProps } from '../link/link';
export interface ComponentProps extends ParentComponentProps {
  /**
   * The color scheme.
   */
  colorScheme?: string;
  /**
   * The a11y role for `<a>`.
   */

  /**
   * The a11y role for `<a>`.
   */
  linkRole?: string;
}
/**
 * Clickable tile.
 * @element bx-clickable-tile
 */

/**
 * Clickable tile.
 * @element bx-clickable-tile
 */
declare class BXClickableTile extends Component<ComponentProps> {}

export default BXClickableTile;

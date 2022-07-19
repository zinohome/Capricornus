/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Component } from 'react';
import { ComponentProps as ParentComponentProps } from '../floating-menu/floating-menu';
export interface ComponentProps extends ParentComponentProps {
  /**
   * How the menu is aligned to the trigger button.
   */
  alignment?: string;
  /**
   * The menu direction.
   */

  /**
   * The menu direction.
   */
  direction?: string;
  /**
   * `true` if the dropdown should be open.
   */

  /**
   * `true` if the dropdown should be open.
   */
  open?: boolean;
}
/**
 * Tooltip body.
 */

/**
 * Tooltip body.
 */
declare class BXTooltipBody extends Component<ComponentProps> {}

export default BXTooltipBody;

/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Component } from 'react';
import { ComponentProps as ParentComponentProps } from '../checkbox/checkbox';
export interface ComponentProps extends ParentComponentProps {
  /**
   * The text for the checked state.
   */
  checkedText?: string;
  /**
   * Toggle size.
   */

  /**
   * Toggle size.
   */
  size?: string;
  /**
   * The text for the unchecked state.
   */

  /**
   * The text for the unchecked state.
   */
  uncheckedText?: string;
  /**
   * The event handler for the custom event fired after this changebox changes its checked state.
   */

  /**
   * The event handler for the custom event fired after this changebox changes its checked state.
   */
  onChange?: (event: CustomEvent) => void;
}
/**
 * Basic toggle.
 * @element bx-toggle
 * @slot label-text - The label text.
 * @slot checked-text - The text for the checked state.
 * @slot unchecked-text - The text for the unchecked state.
 * @fires bx-toggle-changed - The custom event fired after this changebox changes its checked state.
 */

/**
 * Basic toggle.
 * @element bx-toggle
 * @slot label-text - The label text.
 * @slot checked-text - The text for the checked state.
 * @slot unchecked-text - The text for the unchecked state.
 * @fires bx-toggle-changed - The custom event fired after this changebox changes its checked state.
 */
declare class BXToggle extends Component<ComponentProps> {}

export default BXToggle;

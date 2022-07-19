/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Component } from 'react';
import { ComponentProps as ParentComponentProps } from './tooltip-definition';
export interface ComponentProps extends ParentComponentProps {}
/**
 * Icon tooltip.
 * @element bx-tooltip-icon
 * @slot body - The tooltip body content.
 */

/**
 * Icon tooltip.
 * @element bx-tooltip-icon
 * @slot body - The tooltip body content.
 */
declare class BXTooltipIcon extends Component<ComponentProps> {}

export default BXTooltipIcon;

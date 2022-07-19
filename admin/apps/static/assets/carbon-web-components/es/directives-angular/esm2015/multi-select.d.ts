/**
 * @license
 *
 * Copyright IBM Corp. 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { SelectMultipleControlValueAccessor } from '@angular/forms';
export declare class BXMultiSelectDirective extends SelectMultipleControlValueAccessor {
    /**
     * Registers `onChange` handler.
     * @param fn The event listener.
     */
    registerOnChange(fn: (selected: string[]) => void): void;
}

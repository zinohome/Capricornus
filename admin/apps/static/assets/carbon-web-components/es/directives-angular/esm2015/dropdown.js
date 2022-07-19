/**
 * @fileoverview added by tsickle
 * Generated from: dropdown.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 *
 * Copyright IBM Corp. 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Directive, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, SelectControlValueAccessor } from '@angular/forms';
import settings from 'carbon-components/es/globals/js/settings';
/** @type {?} */
const prefix = settings.prefix;
// eslint-disable-line prefer-destructuring
/** @type {?} */
const host = {
    '(blur)': 'onTouched()',
};
// NOTE: Referring `BXDropdown.eventChange` seems to cause ng-packagr to package up `src/components/dropdown/dropdown.ts` code,
// Which is not desirable
host[`(${prefix}-dropdown-selected)`] = 'onChange($event.detail.item.value)';
export class BXDropdownDirective extends SelectControlValueAccessor {
} // eslint-disable-line import/prefer-default-export
BXDropdownDirective.decorators = [
    { type: Directive, args: [{
                selector: `${prefix}-dropdown[formControlName],${prefix}-dropdown[formControl],${prefix}-dropdown[ngModel]`,
                host,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => BXDropdownDirective)),
                        // eslint-disable-line no-use-before-define
                        multi: true,
                    },
                ],
            },] },
];

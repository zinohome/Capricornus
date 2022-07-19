/**
 * @fileoverview added by tsickle
 * Generated from: select.ts
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
import { NG_VALUE_ACCESSOR, DefaultValueAccessor } from '@angular/forms';
import settings from 'carbon-components/es/globals/js/settings';
/** @type {?} */
const prefix = settings.prefix;
// eslint-disable-line prefer-destructuring
export class BXSelectDirective extends DefaultValueAccessor {
} // eslint-disable-line import/prefer-default-export
BXSelectDirective.decorators = [
    { type: Directive, args: [{
                selector: `${prefix}-select[formControlName],${prefix}-select[formControl],${prefix}-select[ngModel]`,
                host: {
                    '(input)': 'onChange($event.target.value)',
                    '(blur)': 'onTouched()',
                },
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => BXSelectDirective)),
                        // eslint-disable-line no-use-before-define
                        multi: true,
                    },
                ],
            },] },
];

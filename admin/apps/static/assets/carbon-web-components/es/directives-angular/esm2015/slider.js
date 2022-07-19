/**
 * @fileoverview added by tsickle
 * Generated from: slider.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Directive, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, NumberValueAccessor } from '@angular/forms';
import settings from 'carbon-components/es/globals/js/settings';
/** @type {?} */
const prefix = settings.prefix;
// eslint-disable-line prefer-destructuring
/** @type {?} */
const host = {
    '(blur)': 'onTouched()',
};
// NOTE: Referring `BXSlider.eventChange` seems to cause ng-packagr to package up `src/components/slider.ts` code,
// Which is not desirable
host[`(${prefix}-slider-changed)`] = 'onChange($event.detail.value)';
export class BXSliderDirective extends NumberValueAccessor {
} // eslint-disable-line import/prefer-default-export
BXSliderDirective.decorators = [
    { type: Directive, args: [{
                selector: `${prefix}-slider[formControlName],${prefix}-slider[formControl],${prefix}-slider[ngModel]`,
                host,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => BXSliderDirective)),
                        // eslint-disable-line no-use-before-define
                        multi: true,
                    },
                ],
            },] },
];

/**
 * @fileoverview added by tsickle
 * Generated from: toggle.ts
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
import { NG_VALUE_ACCESSOR, CheckboxControlValueAccessor } from '@angular/forms';
import settings from 'carbon-components/es/globals/js/settings';
/** @type {?} */
const prefix = settings.prefix;
// eslint-disable-line prefer-destructuring
/** @type {?} */
const host = {
    '(blur)': 'onTouched()',
};
// NOTE: Referring `BXCheckbox.eventChange` seems to cause ng-packagr to package up `src/components/checkbox.ts` code,
// Which is not desirable
host[`(${prefix}-toggle-changed)`] = 'onChange($event.target.checked)';
export class BXToggleDirective extends CheckboxControlValueAccessor {
} // eslint-disable-line import/prefer-default-export
BXToggleDirective.decorators = [
    { type: Directive, args: [{
                selector: `
    ${prefix}-toggle[formControlName],${prefix}-toggle[formControl],${prefix}-toggle[ngModel],
  `,
                host,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => BXToggleDirective)),
                        // eslint-disable-line no-use-before-define
                        multi: true,
                    },
                ],
            },] },
];

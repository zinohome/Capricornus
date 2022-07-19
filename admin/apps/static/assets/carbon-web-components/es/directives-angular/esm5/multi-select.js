var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @fileoverview added by tsickle
 * Generated from: multi-select.ts
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
import { NG_VALUE_ACCESSOR, SelectMultipleControlValueAccessor } from '@angular/forms';
import settings from 'carbon-components/es/globals/js/settings';
/** @type {?} */
var prefix = settings.prefix;
// eslint-disable-line prefer-destructuring
/** @type {?} */
var host = {
    '(blur)': 'onTouched()',
};
// NOTE: Referring `BXMultiSelect.eventChange` seems to cause
// ng-packagr to package up `src/components/multi-select/multi-select.ts` code, Which is not desirable
host["(" + prefix + "-multi-select-selected)"] = 'onChange($event.detail.item.value)';
var BXMultiSelectDirective = /** @class */ (function (_super) {
    __extends(BXMultiSelectDirective, _super);
    function BXMultiSelectDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Registers `onChange` handler.
     * @param fn The event listener.
     */
    /**
     * Registers `onChange` handler.
     * @param {?} fn The event listener.
     * @return {?}
     */
    BXMultiSelectDirective.prototype.registerOnChange = /**
     * Registers `onChange` handler.
     * @param {?} fn The event listener.
     * @return {?}
     */
    function (fn) {
        // NOTE: Referring `BXMultiSelect` seems to cause ng-packagr to package up `src/components/multi-select/multi-select.ts` code,
        this.onChange = (/**
         * @param {?} selectedValue
         * @return {?}
         */
        function handleOnChange(selectedValue) {
            var oldValue = this.value;
            /** @type {?} */
            var oldValues = !oldValue ? [] : oldValue.split(',');
            /** @type {?} */
            var values = oldValues.indexOf(selectedValue) < 0
                ? oldValues.concat(selectedValue)
                : oldValues.filter((/**
                 * @param {?} oldItemValue
                 * @return {?}
                 */
                function (oldItemValue) { return oldItemValue !== selectedValue; }));
            /** @type {?} */
            var value = values.join(',');
            this.value = value;
            fn(value);
        });
    };
    BXMultiSelectDirective.decorators = [
        { type: Directive, args: [{
                    selector: prefix + "-multi-select[formControlName]," + prefix + "-multi-select[formControl]," + prefix + "-multi-select[ngModel]",
                    host: host,
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return BXMultiSelectDirective; })),
                            // eslint-disable-line no-use-before-define
                            multi: true,
                        },
                    ],
                },] },
    ];
    return BXMultiSelectDirective;
}(SelectMultipleControlValueAccessor));
export { BXMultiSelectDirective };

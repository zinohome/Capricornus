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
 * Generated from: input.ts
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
import { NG_VALUE_ACCESSOR, DefaultValueAccessor } from '@angular/forms';
import settings from 'carbon-components/es/globals/js/settings';
/** @type {?} */
var prefix = settings.prefix;
// eslint-disable-line prefer-destructuring
var BXInputDirective = /** @class */ (function (_super) {
    __extends(BXInputDirective, _super);
    function BXInputDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BXInputDirective.decorators = [
        { type: Directive, args: [{
                    selector: [
                        prefix + "-input[formControlName]," + prefix + "-input[formControl]," + prefix + "-input[ngModel]",
                        prefix + "-textarea[formControlName]," + prefix + "-textarea[formControl]," + prefix + "-textarea[ngModel]",
                    ].join(','),
                    host: {
                        '(input)': '_handleInput($event.target.value)',
                        '(blur)': 'onTouched()',
                        '(compositionstart)': '_compositionStart()',
                        '(compositionend)': '_compositionEnd($event.target.value)',
                    },
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return BXInputDirective; })),
                            // eslint-disable-line no-use-before-define
                            multi: true,
                        },
                    ],
                },] },
    ];
    return BXInputDirective;
}(DefaultValueAccessor)); // eslint-disable-line import/prefer-default-export
export { BXInputDirective };

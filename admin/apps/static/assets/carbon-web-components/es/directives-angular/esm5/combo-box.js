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
 * Generated from: combo-box.ts
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
var prefix = settings.prefix;
// eslint-disable-line prefer-destructuring
/** @type {?} */
var host = {
    '(blur)': 'onTouched()',
};
// NOTE: Referring `BXComboBox.eventChange` seems to cause ng-packagr to package up `src/components/combo-box/combo-box.ts` code,
// Which is not desirable
host["(" + prefix + "-combo-box-selected)"] = 'onChange($event.detail.item.value)';
var BXComboBoxDirective = /** @class */ (function (_super) {
    __extends(BXComboBoxDirective, _super);
    function BXComboBoxDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BXComboBoxDirective.decorators = [
        { type: Directive, args: [{
                    selector: prefix + "-combo-box[formControlName]," + prefix + "-combo-box[formControl]," + prefix + "-combo-box[ngModel]",
                    host: host,
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return BXComboBoxDirective; })),
                            // eslint-disable-line no-use-before-define
                            multi: true,
                        },
                    ],
                },] },
    ];
    return BXComboBoxDirective;
}(SelectControlValueAccessor)); // eslint-disable-line import/prefer-default-export
export { BXComboBoxDirective };

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FILE_UPLOADER_ITEM_STATE = exports.FILE_UPLOADER_ITEM_SIZE = void 0;

/**
 * @license
 *
 * Copyright IBM Corp. 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * The state of `<bx-file-uploader-item>`.
 */
let FILE_UPLOADER_ITEM_STATE;
/**
 * File uploader item size.
 */

exports.FILE_UPLOADER_ITEM_STATE = FILE_UPLOADER_ITEM_STATE;

(function (FILE_UPLOADER_ITEM_STATE) {
  FILE_UPLOADER_ITEM_STATE["UPLOADING"] = "uploading";
  FILE_UPLOADER_ITEM_STATE["UPLOADED"] = "uploaded";
  FILE_UPLOADER_ITEM_STATE["EDITING"] = "editing";
})(FILE_UPLOADER_ITEM_STATE || (exports.FILE_UPLOADER_ITEM_STATE = FILE_UPLOADER_ITEM_STATE = {}));

let FILE_UPLOADER_ITEM_SIZE;
exports.FILE_UPLOADER_ITEM_SIZE = FILE_UPLOADER_ITEM_SIZE;

(function (FILE_UPLOADER_ITEM_SIZE) {
  FILE_UPLOADER_ITEM_SIZE["REGULAR"] = "";
  FILE_UPLOADER_ITEM_SIZE["SMALL"] = "sm";
  FILE_UPLOADER_ITEM_SIZE["FIELD"] = "field";
})(FILE_UPLOADER_ITEM_SIZE || (exports.FILE_UPLOADER_ITEM_SIZE = FILE_UPLOADER_ITEM_SIZE = {}));
//# sourceMappingURL=defs.js.map

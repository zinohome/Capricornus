"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TABLE_SORT_DIRECTION = exports.TABLE_SORT_CYCLES = exports.TABLE_SORT_CYCLE = exports.TABLE_SIZE = exports.TABLE_COLOR_SCHEME = void 0;

/**
 * @license
 *
 * Copyright IBM Corp. 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Table color scheme.
 */
let TABLE_COLOR_SCHEME;
/**
 * Table size.
 */

exports.TABLE_COLOR_SCHEME = TABLE_COLOR_SCHEME;

(function (TABLE_COLOR_SCHEME) {
  TABLE_COLOR_SCHEME["REGULAR"] = "";
  TABLE_COLOR_SCHEME["ZEBRA"] = "zebra";
})(TABLE_COLOR_SCHEME || (exports.TABLE_COLOR_SCHEME = TABLE_COLOR_SCHEME = {}));

let TABLE_SIZE;
/**
 * Table sort state.
 */

exports.TABLE_SIZE = TABLE_SIZE;

(function (TABLE_SIZE) {
  TABLE_SIZE["COMPACT"] = "compact";
  TABLE_SIZE["SHORT"] = "short";
  TABLE_SIZE["REGULAR"] = "";
  TABLE_SIZE["TALL"] = "tall";
})(TABLE_SIZE || (exports.TABLE_SIZE = TABLE_SIZE = {}));

let TABLE_SORT_DIRECTION;
/**
 * Table sort cycle.
 */

exports.TABLE_SORT_DIRECTION = TABLE_SORT_DIRECTION;

(function (TABLE_SORT_DIRECTION) {
  TABLE_SORT_DIRECTION["NONE"] = "none";
  TABLE_SORT_DIRECTION["ASCENDING"] = "ascending";
  TABLE_SORT_DIRECTION["DESCENDING"] = "descending";
})(TABLE_SORT_DIRECTION || (exports.TABLE_SORT_DIRECTION = TABLE_SORT_DIRECTION = {}));

let TABLE_SORT_CYCLE;
/**
 * Mapping of table sort cycles to table sort states.
 */

exports.TABLE_SORT_CYCLE = TABLE_SORT_CYCLE;

(function (TABLE_SORT_CYCLE) {
  TABLE_SORT_CYCLE["BI_STATES_FROM_ASCENDING"] = "bi-states-from-ascending";
  TABLE_SORT_CYCLE["BI_STATES_FROM_DESCENDING"] = "bi-states-from-descending";
  TABLE_SORT_CYCLE["TRI_STATES_FROM_ASCENDING"] = "tri-states-from-ascending";
  TABLE_SORT_CYCLE["TRI_STATES_FROM_DESCENDING"] = "tri-states-from-descending";
})(TABLE_SORT_CYCLE || (exports.TABLE_SORT_CYCLE = TABLE_SORT_CYCLE = {}));

const TABLE_SORT_CYCLES = {
  [TABLE_SORT_CYCLE.BI_STATES_FROM_ASCENDING]: [TABLE_SORT_DIRECTION.ASCENDING, TABLE_SORT_DIRECTION.DESCENDING],
  [TABLE_SORT_CYCLE.BI_STATES_FROM_DESCENDING]: [TABLE_SORT_DIRECTION.DESCENDING, TABLE_SORT_DIRECTION.ASCENDING],
  [TABLE_SORT_CYCLE.TRI_STATES_FROM_ASCENDING]: [TABLE_SORT_DIRECTION.NONE, TABLE_SORT_DIRECTION.ASCENDING, TABLE_SORT_DIRECTION.DESCENDING],
  [TABLE_SORT_CYCLE.TRI_STATES_FROM_DESCENDING]: [TABLE_SORT_DIRECTION.NONE, TABLE_SORT_DIRECTION.DESCENDING, TABLE_SORT_DIRECTION.ASCENDING]
};
exports.TABLE_SORT_CYCLES = TABLE_SORT_CYCLES;
//# sourceMappingURL=defs.js.map

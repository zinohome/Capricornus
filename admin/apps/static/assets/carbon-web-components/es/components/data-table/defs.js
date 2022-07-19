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
export let TABLE_COLOR_SCHEME;
/**
 * Table size.
 */

(function (TABLE_COLOR_SCHEME) {
  TABLE_COLOR_SCHEME["REGULAR"] = "";
  TABLE_COLOR_SCHEME["ZEBRA"] = "zebra";
})(TABLE_COLOR_SCHEME || (TABLE_COLOR_SCHEME = {}));

export let TABLE_SIZE;
/**
 * Table sort state.
 */

(function (TABLE_SIZE) {
  TABLE_SIZE["COMPACT"] = "compact";
  TABLE_SIZE["SHORT"] = "short";
  TABLE_SIZE["REGULAR"] = "";
  TABLE_SIZE["TALL"] = "tall";
})(TABLE_SIZE || (TABLE_SIZE = {}));

export let TABLE_SORT_DIRECTION;
/**
 * Table sort cycle.
 */

(function (TABLE_SORT_DIRECTION) {
  TABLE_SORT_DIRECTION["NONE"] = "none";
  TABLE_SORT_DIRECTION["ASCENDING"] = "ascending";
  TABLE_SORT_DIRECTION["DESCENDING"] = "descending";
})(TABLE_SORT_DIRECTION || (TABLE_SORT_DIRECTION = {}));

export let TABLE_SORT_CYCLE;
/**
 * Mapping of table sort cycles to table sort states.
 */

(function (TABLE_SORT_CYCLE) {
  TABLE_SORT_CYCLE["BI_STATES_FROM_ASCENDING"] = "bi-states-from-ascending";
  TABLE_SORT_CYCLE["BI_STATES_FROM_DESCENDING"] = "bi-states-from-descending";
  TABLE_SORT_CYCLE["TRI_STATES_FROM_ASCENDING"] = "tri-states-from-ascending";
  TABLE_SORT_CYCLE["TRI_STATES_FROM_DESCENDING"] = "tri-states-from-descending";
})(TABLE_SORT_CYCLE || (TABLE_SORT_CYCLE = {}));

export const TABLE_SORT_CYCLES = {
  [TABLE_SORT_CYCLE.BI_STATES_FROM_ASCENDING]: [TABLE_SORT_DIRECTION.ASCENDING, TABLE_SORT_DIRECTION.DESCENDING],
  [TABLE_SORT_CYCLE.BI_STATES_FROM_DESCENDING]: [TABLE_SORT_DIRECTION.DESCENDING, TABLE_SORT_DIRECTION.ASCENDING],
  [TABLE_SORT_CYCLE.TRI_STATES_FROM_ASCENDING]: [TABLE_SORT_DIRECTION.NONE, TABLE_SORT_DIRECTION.ASCENDING, TABLE_SORT_DIRECTION.DESCENDING],
  [TABLE_SORT_CYCLE.TRI_STATES_FROM_DESCENDING]: [TABLE_SORT_DIRECTION.NONE, TABLE_SORT_DIRECTION.DESCENDING, TABLE_SORT_DIRECTION.ASCENDING]
};
//# sourceMappingURL=defs.js.map

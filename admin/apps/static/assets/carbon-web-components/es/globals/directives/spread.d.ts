/**
 * @license
 *
 * Copyright IBM Corp. 2019
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Part } from 'lit-html';
export interface AttributesInfo {
    readonly [name: string]: string;
}
/**
 * A directive that applies attributes from a key-value pairs.
 * This must be used in the `...` name and must be the only part used in the attribute.
 * It applies the key-value pairs in the `attributesInfo` argument
 * and sets them as attribute name/value pairs.
 * @param classInfo The key-value pair to be set as the attribute name/value pairs.
 */
declare const spread: (attributesInfo: AttributesInfo) => (part: Part) => void;
export default spread;

//# sourceMappingURL=spread.d.ts.map

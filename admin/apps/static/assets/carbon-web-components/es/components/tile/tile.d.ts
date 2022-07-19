/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { LitElement } from 'lit-element';
import { TILE_COLOR_SCHEME } from './defs';
export { TILE_COLOR_SCHEME };
/**
 * Basic tile.
 * @element bx-tile
 */
declare class BXTile extends LitElement {
    /**
     * The color scheme.
     */
    colorScheme: TILE_COLOR_SCHEME;
    render(): import("lit-element").TemplateResult;
    static styles: any;
}
export default BXTile;

//# sourceMappingURL=tile.d.ts.map

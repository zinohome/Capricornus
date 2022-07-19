/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import BXLink from '../link/link';
import { TILE_COLOR_SCHEME } from './defs';
/**
 * Clickable tile.
 * @element bx-clickable-tile
 */
declare class BXClickableTile extends BXLink {
    protected get _classes(): (part: import("lit-html").Part) => void;
    /**
     * The color scheme.
     */
    colorScheme: TILE_COLOR_SCHEME;
    /**
     * The a11y role for `<a>`.
     */
    linkRole: string;
    static styles: any;
}
export default BXClickableTile;

//# sourceMappingURL=clickable-tile.d.ts.map

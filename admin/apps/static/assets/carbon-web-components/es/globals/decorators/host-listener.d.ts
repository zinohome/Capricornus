/**
 * @license
 *
 * Copyright IBM Corp. 2019
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * A decorator to add event listener to the host element, or its `document`/`window`, of a custom element.
 * The `target` must extend `HostListenerMixin`.
 * @param type
 *   The event type. Can be prefixed with `document:` or `window:`.
 *   The event listener is attached to host element's owner document or its default view in such case.
 * @param options The event listener options.
 */
declare const HostListener: (type: string, options?: boolean | AddEventListenerOptions | undefined) => (targetOrDescriptor: any, name: string) => any;
export default HostListener;

//# sourceMappingURL=host-listener.d.ts.map

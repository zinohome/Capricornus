import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import on from 'carbon-components/es/globals/js/misc/on';

/**
 * The format for the event name used by `@HostListener` decorator.
 */
const EVENT_NAME_FORMAT = /^((document|window|parentRoot|shadowRoot):)?([\w-]+)$/;
/**
 * @param Base The base class.
 * @returns A mix-in that sets up and cleans up event listeners defined by `@HostListener` decorator.
 */

const HostListenerMixin = Base => {
  /**
   * A mix-in class that sets up and cleans up event listeners defined by `@HostListener` decorator.
   */
  class HostListenerMixinImpl extends Base {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "_handles", new Set());
    }

    // Not using TypeScript `private` due to: microsoft/TypeScript#17744
    connectedCallback() {
      // @ts-ignore: Until `connectedCallback` is added to `HTMLElement` definition
      super.connectedCallback();
      const hostListeners = this.constructor._hostListeners;
      Object.keys(hostListeners).forEach(listenerName => {
        Object.keys(hostListeners[listenerName]).forEach(type => {
          var _unprefixedType;

          // Parses `document:click`/`window:click` format
          const tokens = EVENT_NAME_FORMAT.exec(type);

          if (!tokens) {
            throw new Error(`Could not parse the event name: ${listenerName}`);
          }

          const [,, targetName, unprefixedType] = tokens;
          const target = {
            document: this.ownerDocument,
            window: this.ownerDocument.defaultView,
            parentRoot: this.getRootNode(),
            shadowRoot: this.shadowRoot
          }[targetName] || this;
          const {
            options
          } = hostListeners[listenerName][type];

          this._handles.add(on(target, (_unprefixedType = this.constructor[unprefixedType]) !== null && _unprefixedType !== void 0 ? _unprefixedType : unprefixedType, this[listenerName], options));
        });
      });
    }

    disconnectedCallback() {
      this._handles.forEach(handle => {
        handle.release();

        this._handles.delete(handle);
      }); // @ts-ignore: Until `disconnectedCallback` is added to `HTMLElement` definition


      super.disconnectedCallback();
    }
    /**
     * The map, keyed by method name, of event listeners that should be attached to host element or host document.
     * @private
     */
    // Not using TypeScript `private` due to: microsoft/TypeScript#17744


  }

  _defineProperty(HostListenerMixinImpl, "_hostListeners", {});

  return HostListenerMixinImpl;
};

export default HostListenerMixin;
//# sourceMappingURL=host-listener.js.map

import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _decorate from "@babel/runtime/helpers/esm/decorate";

let _ = t => t,
    _t;

/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import settings from 'carbon-components/es/globals/js/settings';
import { classMap } from 'lit-html/directives/class-map';
import { html, property, query, customElement, LitElement } from 'lit-element';
import HostListener from '../../globals/decorators/host-listener';
import HostListenerMixin from '../../globals/mixins/host-listener';
import { MODAL_SIZE } from './defs';
import styles from "././modal.css.js";
import { selectorTabbable as _selectorTabbable } from '../../globals/settings';
export { MODAL_SIZE };
const {
  prefix
} = settings; // eslint-disable-next-line no-bitwise

const PRECEDING = Node.DOCUMENT_POSITION_PRECEDING | Node.DOCUMENT_POSITION_CONTAINS; // eslint-disable-next-line no-bitwise

const FOLLOWING = Node.DOCUMENT_POSITION_FOLLOWING | Node.DOCUMENT_POSITION_CONTAINED_BY;
/**
 * Tries to focus on the given elements and bails out if one of them is successful.
 * @param elems The elements.
 * @param reverse `true` to go through the list in reverse order.
 * @returns `true` if one of the attempts is successful, `false` otherwise.
 */

function tryFocusElems(elems, reverse = false) {
  if (!reverse) {
    for (let i = 0; i < elems.length; ++i) {
      const elem = elems[i];
      elem.focus();

      if (elem.ownerDocument.activeElement === elem) {
        return true;
      }
    }
  } else {
    for (let i = elems.length - 1; i >= 0; --i) {
      const elem = elems[i];
      elem.focus();

      if (elem.ownerDocument.activeElement === elem) {
        return true;
      }
    }
  }

  return false;
}
/**
 * Modal.
 * @element bx-modal
 * @csspart dialog The dialog.
 * @fires bx-modal-beingclosed
 *   The custom event fired before this modal is being closed upon a user gesture.
 *   Cancellation of this event stops the user-initiated action of closing this modal.
 * @fires bx-modal-closed - The custom event fired after this modal is closed upon a user gesture.
 */


let BXModal = _decorate([customElement(`${prefix}-modal`)], function (_initialize, _HostListenerMixin) {
  class BXModal extends _HostListenerMixin {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXModal,
    d: [{
      kind: "field",
      key: "_launcher",

      value() {
        return null;
      }

    }, {
      kind: "field",
      decorators: [query('#start-sentinel')],
      key: "_startSentinelNode",
      value: void 0
    }, {
      kind: "field",
      decorators: [query('#end-sentinel')],
      key: "_endSentinelNode",
      value: void 0
    }, {
      kind: "field",
      decorators: [HostListener('click')],
      key: "_handleClick",

      value() {
        return event => {
          if (event.composedPath().indexOf(this.shadowRoot) < 0) {
            this._handleUserInitiatedClose(event.target);
          }
        };
      }

    }, {
      kind: "field",
      decorators: [HostListener('shadowRoot:focusout')],
      key: "_handleBlur",

      value() {
        return async ({
          target,
          relatedTarget
        }) => {
          var _this$shadowRoot;

          const {
            open,
            _startSentinelNode: startSentinelNode,
            _endSentinelNode: endSentinelNode
          } = this;
          const oldContains = target !== this && this.contains(target);
          const currentContains = relatedTarget !== this && (this.contains(relatedTarget) || ((_this$shadowRoot = this.shadowRoot) === null || _this$shadowRoot === void 0 ? void 0 : _this$shadowRoot.contains(relatedTarget)) && relatedTarget !== endSentinelNode); // Performs focus wrapping if _all_ of the following is met:
          // * This modal is open
          // * The viewport still has focus
          // * Modal body used to have focus but no longer has focus

          const {
            selectorTabbable: selectorTabbableForModal
          } = this.constructor;

          if (open && relatedTarget && oldContains && !currentContains) {
            const comparisonResult = target.compareDocumentPosition(relatedTarget); // eslint-disable-next-line no-bitwise

            if (relatedTarget === startSentinelNode || comparisonResult & PRECEDING) {
              await this.constructor._delay();

              if (!tryFocusElems(this.querySelectorAll(selectorTabbableForModal), true) && relatedTarget !== this) {
                this.focus();
              }
            } // eslint-disable-next-line no-bitwise
            else if (relatedTarget === endSentinelNode || comparisonResult & FOLLOWING) {
              await this.constructor._delay();

              if (!tryFocusElems(this.querySelectorAll(selectorTabbableForModal))) {
                this.focus();
              }
            }
          }
        };
      }

    }, {
      kind: "field",
      decorators: [HostListener('document:keydown')],
      key: "_handleKeydown",

      value() {
        return ({
          key,
          target
        }) => {
          if (key === 'Esc' || key === 'Escape') {
            this._handleUserInitiatedClose(target);
          }
        };
      }

    }, {
      kind: "method",
      key: "_handleClickContainer",
      value:
      /**
       * The element that had focus before this modal gets open.
       */

      /**
       * Node to track focus going outside of modal content.
       */

      /**
       * Node to track focus going outside of modal content.
       */

      /**
       * Handles `click` event on this element.
       * @param event The event.
       */

      /**
       * Handles `blur` event on this element.
       * @param event The event.
       */

      /**
       * Handles `click` event on the modal container.
       * @param event The event.
       */
      function _handleClickContainer(event) {
        if (event.target.matches(this.constructor.selectorCloseButton)) {
          this._handleUserInitiatedClose(event.target);
        }
      }
      /**
       * Handles user-initiated close request of this modal.
       * @param triggeredBy The element that triggered this close request.
       */

    }, {
      kind: "method",
      key: "_handleUserInitiatedClose",
      value: function _handleUserInitiatedClose(triggeredBy) {
        if (this.open) {
          const init = {
            bubbles: true,
            cancelable: true,
            composed: true,
            detail: {
              triggeredBy
            }
          };

          if (this.dispatchEvent(new CustomEvent(this.constructor.eventBeforeClose, init))) {
            this.open = false;
            this.dispatchEvent(new CustomEvent(this.constructor.eventClose, init));
          }
        }
      }
      /**
       * The additional CSS class names for the container <div> of the element.
       */

    }, {
      kind: "field",
      decorators: [property({
        attribute: 'container-class'
      })],
      key: "containerClass",

      value() {
        return '';
      }

    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "open",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [property({
        reflect: true
      })],
      key: "size",

      value() {
        return MODAL_SIZE.REGULAR;
      }

    }, {
      kind: "method",
      key: "render",
      value:
      /**
       * `true` if the modal should be open.
       */

      /**
       * Modal size.
       */
      function render() {
        const {
          size
        } = this;
        const containerClass = this.containerClass.split(' ').filter(Boolean).reduce((acc, item) => _objectSpread(_objectSpread({}, acc), {}, {
          [item]: true
        }), {});
        const containerClasses = classMap(_objectSpread({
          [`${prefix}--modal-container`]: true,
          [`${prefix}--modal-container--${size}`]: size
        }, containerClass));
        return html(_t || (_t = _` <a id="start-sentinel" class="${0}--visually-hidden" href="javascript:void 0" role="navigation"></a> <div part="dialog" class="${0}" role="dialog" tabindex="-1" @click="${0}"> <slot></slot> </div> <a id="end-sentinel" class="${0}--visually-hidden" href="javascript:void 0" role="navigation"></a> `), prefix, containerClasses, this._handleClickContainer, prefix);
      }
    }, {
      kind: "method",
      key: "updated",
      value: async function updated(changedProperties) {
        if (changedProperties.has('open')) {
          if (this.open) {
            this._launcher = this.ownerDocument.activeElement;
            const primaryFocusNode = this.querySelector(this.constructor.selectorPrimaryFocus);
            await this.constructor._delay();

            if (primaryFocusNode) {
              // For cases where a `carbon-web-components` component (e.g. `<bx-btn>`) being `primaryFocusNode`,
              // where its first update/render cycle that makes it focusable happens after `<bx-modal>`'s first update/render cycle
              primaryFocusNode.focus();
            } else if (!tryFocusElems(this.querySelectorAll(this.constructor.selectorTabbable), true)) {
              this.focus();
            }
          } else if (this._launcher && typeof this._launcher.focus === 'function') {
            this._launcher.focus();

            this._launcher = null;
          }
        }
      }
      /**
       * @param ms The number of milliseconds.
       * @returns A promise that is resolves after the given milliseconds.
       */

    }, {
      kind: "method",
      static: true,
      key: "_delay",
      value: function _delay(ms = 0) {
        return new Promise(resolve => {
          setTimeout(resolve, ms);
        });
      }
      /**
       * A selector selecting buttons that should close this modal.
       */

    }, {
      kind: "get",
      static: true,
      key: "selectorCloseButton",
      value: function selectorCloseButton() {
        return `[data-modal-close],${prefix}-modal-close-button`;
      }
      /**
       * A selector selecting tabbable nodes.
       */

    }, {
      kind: "get",
      static: true,
      key: "selectorTabbable",
      value: function selectorTabbable() {
        return _selectorTabbable;
      }
      /**
       * A selector selecting the nodes that should be focused when modal gets open.
       */

    }, {
      kind: "get",
      static: true,
      key: "selectorPrimaryFocus",
      value: function selectorPrimaryFocus() {
        return `[data-modal-primary-focus],${prefix}-modal-footer ${prefix}-btn[kind="primary"]`;
      }
      /**
       * The name of the custom event fired before this modal is being closed upon a user gesture.
       * Cancellation of this event stops the user-initiated action of closing this modal.
       */

    }, {
      kind: "get",
      static: true,
      key: "eventBeforeClose",
      value: function eventBeforeClose() {
        return `${prefix}-modal-beingclosed`;
      }
      /**
       * The name of the custom event fired after this modal is closed upon a user gesture.
       */

    }, {
      kind: "get",
      static: true,
      key: "eventClose",
      value: function eventClose() {
        return `${prefix}-modal-closed`;
      }
    }, {
      kind: "field",
      static: true,
      key: "styles",

      value() {
        return styles;
      }

    }]
  };
}, HostListenerMixin(LitElement));

export default BXModal;
//# sourceMappingURL=modal.js.map

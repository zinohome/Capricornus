import _decorate from "@babel/runtime/helpers/esm/decorate";
import _get from "@babel/runtime/helpers/esm/get";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

let _ = t => t,
    _t;

/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import settings from 'carbon-components/es/globals/js/settings';
import { classMap } from 'lit-html/directives/class-map';
import { html, property, customElement, LitElement } from 'lit-element';
import ChevronRight16 from "../../icons/chevron--right/16";
import FocusMixin from '../../globals/mixins/focus';
import { ACCORDION_ITEM_BREAKPOINT } from './defs';
import styles from "././accordion.css.js";
export { ACCORDION_ITEM_BREAKPOINT };
const {
  prefix
} = settings;
/**
 * Observes resize of the given element with the given resize observer.
 * @param observer The resize observer.
 * @param elem The element to observe the resize.
 */

const observeResize = (observer, elem) => {
  if (!elem) {
    return null;
  }

  observer.observe(elem);
  return {
    release() {
      observer.unobserve(elem);
      return null;
    }

  };
};
/**
 * Accordion item.
 * @element bx-accordion-item
 * @fires bx-accordion-item-beingtoggled
 *   The custom event fired before this accordion item is being toggled upon a user gesture.
 *   Cancellation of this event stops the user-initiated action of toggling this accordion item.
 * @fires bx-accordion-item-toggled - The custom event fired after this accordion item is toggled upon a user gesture.
 * @csspart expando The expando button.
 * @csspart expando-icon The expando icon.
 * @csspart title The title.
 * @csspart content The content.
 */


let BXAccordionItem = _decorate([customElement(`${prefix}-accordion-item`)], function (_initialize, _FocusMixin) {
  class BXAccordionItem extends _FocusMixin {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXAccordionItem,
    d: [{
      kind: "field",
      key: "_hObserveResize",

      value() {
        return null;
      }

    }, {
      kind: "method",
      key: "_handleUserInitiatedToggle",
      value:
      /**
       * The current breakpoint.
       */

      /**
       * The handle for observing resize of the parent element of this element.
       */

      /**
       * Handles user-initiated toggle request of this accordion item.
       * @param open The new open state.
       */
      function _handleUserInitiatedToggle(open = !this.open) {
        const init = {
          bubbles: true,
          cancelable: true,
          composed: true,
          detail: {
            open
          }
        };

        if (this.dispatchEvent(new CustomEvent(this.constructor.eventBeforeToggle, init))) {
          this.open = open;
          this.dispatchEvent(new CustomEvent(this.constructor.eventToggle, init));
        }
      }
      /**
       * Handler for the `click` event on the expando button.
       */

    }, {
      kind: "method",
      key: "_handleClickExpando",
      value: function _handleClickExpando() {
        this._handleUserInitiatedToggle();
      }
      /**
       * Handler for the `keydown` event on the expando button.
       */

    }, {
      kind: "field",
      key: "_handleKeydownExpando",

      value() {
        return ({
          key
        }) => {
          if (this.open && (key === 'Esc' || key === 'Escape')) {
            this._handleUserInitiatedToggle(false);
          }
        };
      }

    }, {
      kind: "field",
      key: "_resizeObserver",

      value() {
        return new ResizeObserver(records => {
          const {
            width
          } = records[records.length - 1].contentRect;
          const {
            _sizesBreakpoints: sizesBreakpoints
          } = this.constructor;
          this._currentBreakpoint = Object.keys(sizesBreakpoints).sort((lhs, rhs) => sizesBreakpoints[rhs] - sizesBreakpoints[lhs]).find(size => width >= sizesBreakpoints[size]);
          this.requestUpdate();
        });
      }

    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "disabled",

      value() {
        return false;
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
        attribute: 'title-text'
      })],
      key: "titleText",

      value() {
        return '';
      }

    }, {
      kind: "method",
      key: "connectedCallback",
      value:
      /**
       * The `ResizeObserver` instance for observing element resizes for re-positioning floating menu position.
       */
      // TODO: Wait for `.d.ts` update to support `ResizeObserver`
      // @ts-ignore

      /**
       * `true` if the accordion item should be disabled.
       */

      /**
       * `true` if the accordion item should be open.
       */

      /**
       * The title text.
       */
      function connectedCallback() {
        if (!this.hasAttribute('role')) {
          this.setAttribute('role', 'listitem');
        }

        _get(_getPrototypeOf(BXAccordionItem.prototype), "connectedCallback", this).call(this);

        if (this._hObserveResize) {
          this._hObserveResize = this._hObserveResize.release();
        }

        this._hObserveResize = observeResize(this._resizeObserver, this);
      }
    }, {
      kind: "method",
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        if (this._hObserveResize) {
          this._hObserveResize = this._hObserveResize.release();
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const {
          disabled,
          titleText,
          open,
          _currentBreakpoint: currentBreakpoint,
          _handleClickExpando: handleClickExpando,
          _handleKeydownExpando: handleKeydownExpando
        } = this;
        const {
          _classesBreakpoints: classesBreakpoints
        } = this.constructor;
        const {
          [currentBreakpoint]: classBreakpoint
        } = classesBreakpoints;
        const contentClasses = classMap({
          [classBreakpoint]: classBreakpoint,
          [`${prefix}--accordion__content`]: true
        });
        return html(_t || (_t = _` <button ?disabled="${0}" type="button" part="expando" class="${0}--accordion__heading" aria-controls="content" aria-expanded="${0}" @click="${0}" @keydown="${0}"> ${0} <div part="title" class="${0}--accordion__title"><slot name="title">${0}</slot></div> </button> <div id="content" part="content" class="${0}"><slot></slot></div> `), disabled, prefix, String(Boolean(open)), handleClickExpando, handleKeydownExpando, ChevronRight16({
          part: 'expando-icon',
          class: `${prefix}--accordion__arrow`
        }), prefix, titleText, contentClasses);
      }
      /**
       * The CSS classes for breakpoints.
       * @private
       */

    }, {
      kind: "get",
      static: true,
      key: "_classesBreakpoints",
      value: function _classesBreakpoints() {
        return {
          [ACCORDION_ITEM_BREAKPOINT.SMALL]: `${prefix}-ce--accordion__content--${ACCORDION_ITEM_BREAKPOINT.SMALL}`,
          [ACCORDION_ITEM_BREAKPOINT.MEDIUM]: `${prefix}-ce--accordion__content--${ACCORDION_ITEM_BREAKPOINT.MEDIUM}`
        };
      }
      /**
       * The breakpoints.
       * @private
       */

    }, {
      kind: "get",
      static: true,
      key: "_sizesBreakpoints",
      value: function _sizesBreakpoints() {
        return {
          [ACCORDION_ITEM_BREAKPOINT.SMALL]: 480,
          [ACCORDION_ITEM_BREAKPOINT.MEDIUM]: 640
        };
      }
      /**
       * The name of the custom event fired before this accordion item is being toggled upon a user gesture.
       * Cancellation of this event stops the user-initiated action of toggling this accordion item.
       */

    }, {
      kind: "get",
      static: true,
      key: "eventBeforeToggle",
      value: function eventBeforeToggle() {
        return `${prefix}-accordion-item-beingtoggled`;
      }
      /**
       * The name of the custom event fired after this accordion item is toggled upon a user gesture.
       */

    }, {
      kind: "get",
      static: true,
      key: "eventToggle",
      value: function eventToggle() {
        return `${prefix}-accordion-item-toggled`;
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
}, FocusMixin(LitElement));

export default BXAccordionItem;
//# sourceMappingURL=accordion-item.js.map

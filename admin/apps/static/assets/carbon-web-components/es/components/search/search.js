import _decorate from "@babel/runtime/helpers/esm/decorate";

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
import { classMap } from 'lit-html/directives/class-map';
import { html, property, customElement, LitElement } from 'lit-element';
import Close16 from "../../icons/close/16";
import Close20 from "../../icons/close/20";
import Search16 from "../../icons/search/16";
import settings from 'carbon-components/es/globals/js/settings';
import ifNonEmpty from '../../globals/directives/if-non-empty';
import FocusMixin from '../../globals/mixins/focus';
import { INPUT_SIZE } from '../input/input';
import { SEARCH_COLOR_SCHEME } from './defs';
import styles from "././search.css.js";
export { SEARCH_COLOR_SCHEME };
const {
  prefix
} = settings;
/**
 * Search box.
 * @element bx-search
 * @csspart search-icon The search icon.
 * @csspart label-text The label text.
 * @csspart input The input box.
 * @csspart close-button The close button.
 * @csspart close-icon The close icon.
 * @fires bx-search-input - The custom event fired after the search content is changed upon a user gesture.
 */

let BXSearch = _decorate([customElement(`${prefix}-search`)], function (_initialize, _FocusMixin) {
  class BXSearch extends _FocusMixin {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXSearch,
    d: [{
      kind: "method",
      key: "_handleInput",
      value:
      /**
       * Handles `input` event on the `<input>` in the shadow DOM.
       */
      function _handleInput(event) {
        const {
          target
        } = event;
        const {
          value
        } = target;
        this.dispatchEvent(new CustomEvent(this.constructor.eventInput, {
          bubbles: true,
          composed: true,
          cancelable: false,
          detail: {
            value
          }
        }));
        this.value = value;
      }
      /**
       * Handles `click` event on the button to clear search box content.
       */

    }, {
      kind: "method",
      key: "_handleClearInputButtonClick",
      value: function _handleClearInputButtonClick() {
        if (this.value) {
          this.dispatchEvent(new CustomEvent(this.constructor.eventInput, {
            bubbles: true,
            composed: true,
            cancelable: false,
            detail: {
              value: ''
            }
          }));
          this.value = ''; // set focus on back to input once search is cleared

          const input = this.shadowRoot.querySelector('input');
          input.focus();
        }
      }
      /**
       * The assistive text for the close button.
       */

    }, {
      kind: "field",
      decorators: [property({
        attribute: 'close-button-assistive-text'
      })],
      key: "closeButtonAssistiveText",

      value() {
        return '';
      }

    }, {
      kind: "field",
      decorators: [property({
        attribute: 'color-scheme',
        reflect: true
      })],
      key: "colorScheme",

      value() {
        return SEARCH_COLOR_SCHEME.REGULAR;
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
        attribute: 'label-text'
      })],
      key: "labelText",

      value() {
        return '';
      }

    }, {
      kind: "field",
      decorators: [property()],
      key: "name",

      value() {
        return '';
      }

    }, {
      kind: "field",
      decorators: [property()],
      key: "placeholder",

      value() {
        return '';
      }

    }, {
      kind: "field",
      decorators: [property({
        reflect: true
      })],
      key: "size",

      value() {
        return INPUT_SIZE.REGULAR;
      }

    }, {
      kind: "field",
      decorators: [property()],
      key: "type",

      value() {
        return '';
      }

    }, {
      kind: "field",
      decorators: [property({
        type: String
      })],
      key: "value",

      value() {
        return '';
      }

    }, {
      kind: "method",
      key: "createRenderRoot",
      value:
      /**
       * The color scheme.
       */

      /**
       * `true` if the search box should be disabled.
       */

      /**
       * The label text.
       */

      /**
       * The form name.
       */

      /**
       * The placeholder text.
       */

      /**
       * The search box size.
       */

      /**
       * The `<input>` name.
       */

      /**
       * The value.
       */
      function createRenderRoot() {
        var _$exec;

        return this.attachShadow({
          mode: 'open',
          delegatesFocus: Number(((_$exec = /Safari\/(\d+)/.exec(navigator.userAgent)) !== null && _$exec !== void 0 ? _$exec : ['', 0])[1]) <= 537
        });
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const {
          closeButtonAssistiveText,
          disabled,
          labelText,
          name,
          placeholder,
          size,
          type,
          value = '',
          _handleInput: handleInput,
          _handleClearInputButtonClick: handleClearInputButtonClick
        } = this;
        const clearClasses = classMap({
          [`${prefix}--search-close`]: true,
          [`${prefix}--search-close--hidden`]: !this.value
        });
        return html(_t || (_t = _` ${0} <label for="input" part="label-text" class="${0}--label"> <slot>${0}</slot> </label> <input id="input" part="input" type="${0}" class="${0}--search-input" ?disabled="${0}" name="${0}" placeholder="${0}" role="searchbox" .value="${0}" @input="${0}"> <button part="close-button" class="${0}" @click="${0}" type="button" aria-label="${0}"> ${0} </button> `), Search16({
          part: 'search-icon',
          class: `${prefix}--search-magnifier-icon`,
          role: 'img'
        }), prefix, labelText, ifNonEmpty(type), prefix, disabled, ifNonEmpty(name), ifNonEmpty(placeholder), value, handleInput, clearClasses, handleClearInputButtonClick, closeButtonAssistiveText, (size === INPUT_SIZE.SMALL ? Close16 : Close20)({
          part: 'close-icon',
          'aria-label': closeButtonAssistiveText,
          role: 'img'
        }));
      }
      /**
       * The name of the custom event fired after the search content is changed upon a user gesture.
       */

    }, {
      kind: "get",
      static: true,
      key: "eventInput",
      value: function eventInput() {
        return `${prefix}-search-input`;
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

export default BXSearch;
//# sourceMappingURL=search.js.map

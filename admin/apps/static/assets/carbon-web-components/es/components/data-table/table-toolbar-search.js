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
import { classMap } from 'lit-html/directives/class-map';
import { html, property, query, customElement } from 'lit-element';
import settings from 'carbon-components/es/globals/js/settings';
import HostListenerMixin from '../../globals/mixins/host-listener';
import HostListener from '../../globals/decorators/host-listener';
import { INPUT_SIZE } from '../input/input';
import BXSearch from '../search/search';
import styles from "././data-table.css.js";
const {
  prefix
} = settings;
/**
 * Table toolbar search.
 * @element bx-table-toolbar-search
 * @fires bx-search-input - The custom event fired after the search content is changed upon a user gesture.
 */

let BXTableToolbarSearch = _decorate([customElement(`${prefix}-table-toolbar-search`)], function (_initialize, _HostListenerMixin) {
  class BXTableToolbarSearch extends _HostListenerMixin {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXTableToolbarSearch,
    d: [{
      kind: "field",
      decorators: [query('input')],
      key: "_inputNode",
      value: void 0
    }, {
      kind: "method",
      key: "_handleUserInitiatedExpand",
      value:
      /**
       * Handles user-initiated gestures for expanding the search box.
       */
      async function _handleUserInitiatedExpand() {
        this.expanded = true;
        await this.updateComplete;
        const {
          _inputNode: inputNode
        } = this;
        inputNode === null || inputNode === void 0 ? void 0 : inputNode.focus();
      }
      /**
       * Handles `focus` event handler on this element.
       */

    }, {
      kind: "method",
      decorators: [HostListener('focusin')],
      key: "_handleFocusIn",
      value: function _handleFocusIn() {
        this._handleUserInitiatedExpand();
      }
      /**
       * Handles `blur` event handler on this element.
       * @param event The event.
       */

    }, {
      kind: "method",
      decorators: [HostListener('focusout')],
      key: "_handleFocusOut",
      value: function _handleFocusOut(event) {
        if (!this.contains(event.relatedTarget) && !this.value) {
          this.expanded = false;
        }
      }
      /**
       * Handles `click` event handler on the search box.
       */

    }, {
      kind: "method",
      key: "_handleSearchClick",
      value: function _handleSearchClick() {
        this._handleUserInitiatedExpand();
      }
      /**
       * `true` if the search box should be expanded.
       */

    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "expanded",

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
        return INPUT_SIZE.SMALL;
      }

    }, {
      kind: "method",
      key: "createRenderRoot",
      value:
      /**
       * The search box size.
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
      key: "connectedCallback",
      value: function connectedCallback() {
        if (!this.hasAttribute('role')) {
          this.setAttribute('role', 'search');
        }

        _get(_getPrototypeOf(BXTableToolbarSearch.prototype), "connectedCallback", this).call(this);
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const result = _get(_getPrototypeOf(BXTableToolbarSearch.prototype), "render", this).call(this);

        const {
          expanded,
          size,
          _handleSearchClick: handleSearchClick
        } = this;
        const classes = classMap({
          [`${prefix}--search`]: true,
          [`${prefix}--search--${size}`]: size
        });
        return html(_t || (_t = _` <div class="${0}" tabindex="${0}" @click="${0}">${0}</div> `), classes, expanded ? '-1' : '0', handleSearchClick, result);
      }
      /**
       * The name of the custom event fired after the search content is changed upon a user gesture.
       */

    }, {
      kind: "get",
      static: true,
      key: "eventInput",
      value: function eventInput() {
        // The code uses on in `<bx-search>`, but definition is done also here for React event generation
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
}, HostListenerMixin(BXSearch));

export default BXTableToolbarSearch;
//# sourceMappingURL=table-toolbar-search.js.map

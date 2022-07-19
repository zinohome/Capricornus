import _decorate from "@babel/runtime/helpers/esm/decorate";

let _ = t => t,
    _t,
    _t2;

/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { html, property, customElement, LitElement } from 'lit-element';
import ChevronDown16 from "../../icons/chevron--down/16";
import settings from 'carbon-components/es/globals/js/settings';
import FocusMixin from '../../globals/mixins/focus';
import styles from "././pagination.css.js";
const {
  prefix
} = settings;
/**
 * The select box for the current page.
 * @element bx-pages-select
 * @fires bx-pages-select-changed - The custom event fired after the page is changed.
 */

let BXPagesSelect = _decorate([customElement(`${prefix}-pages-select`)], function (_initialize, _FocusMixin) {
  class BXPagesSelect extends _FocusMixin {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXPagesSelect,
    d: [{
      kind: "method",
      key: "_handleChange",
      value:
      /**
       * Handles `change` event on the `<select>` to select page size.
       */
      function _handleChange({
        target
      }) {
        const value = Number(target.value);
        this.dispatchEvent(new CustomEvent(this.constructor.eventChange, {
          bubbles: true,
          composed: true,
          detail: {
            value
          }
        }));
        this.value = value;
      }
      /**
       * The formatter for the assistive text for screen readers to announce.
       * Should be changed upon the locale the UI is rendered with.
       */

    }, {
      kind: "field",
      decorators: [property({
        attribute: false
      })],
      key: "formatLabelText",

      value() {
        return ({
          count
        }) => `Page number, of ${count} page${count <= 1 ? '' : 's'}`;
      }

    }, {
      kind: "field",
      decorators: [property({
        attribute: false
      })],
      key: "formatSupplementalText",

      value() {
        return ({
          count
        }) => `of ${count} page${count <= 1 ? '' : 's'}`;
      }

    }, {
      kind: "field",
      decorators: [property({
        type: Number
      })],
      key: "total",
      value: void 0
    }, {
      kind: "field",
      decorators: [property({
        type: Number
      })],
      key: "value",
      value: void 0
    }, {
      kind: "method",
      key: "createRenderRoot",
      value:
      /**
       * The formatter for the text next to the select box. Should be changed upon the locale the UI is rendered with.
       */

      /**
       * The number of total pages.
       */

      /**
       * The value, working as the current page, index that starts with zero.
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
          formatLabelText,
          formatSupplementalText,
          total,
          value,
          _handleChange: handleChange
        } = this; // `<option ?selected="${index === value}">` is a workaround for:
        // https://github.com/Polymer/lit-html/issues/1052

        return html(_t || (_t = _` <div class="${0}--select__page-number"> <label for="select" class="${0}--label ${0}--visually-hidden"> ${0} </label> <select class="${0}--select-input" .value="${0}" @change="${0}"> ${0} </select> ${0} </div> <span class="${0}--pagination__text"> ${0} </span> `), prefix, prefix, prefix, formatLabelText({
          count: total
        }), prefix, value, handleChange, Array.from(new Array(total)).map((_item, index) => html(_t2 || (_t2 = _` <option value="${0}" ?selected="${0}">${0}</option> `), index, index === value, index + 1)), ChevronDown16({
          class: `${prefix}--select__arrow`
        }), prefix, formatSupplementalText({
          count: total
        }));
      }
      /**
       * The name of the custom event fired after the page is changed.
       */

    }, {
      kind: "get",
      static: true,
      key: "eventChange",
      value: function eventChange() {
        return `${prefix}-pages-select-changed`;
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

export default BXPagesSelect;
//# sourceMappingURL=pages-select.js.map

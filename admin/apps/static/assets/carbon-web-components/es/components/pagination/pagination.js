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
import CaretLeft24 from "../../icons/caret--left/24";
import CaretRight24 from "../../icons/caret--right/24";
import settings from 'carbon-components/es/globals/js/settings';
import FocusMixin from '../../globals/mixins/focus';
import HostListenerMixin from '../../globals/mixins/host-listener';
import HostListener from '../../globals/decorators/host-listener';
import { forEach } from '../../globals/internal/collection-helpers';
import styles from "././pagination.css.js";
const {
  prefix
} = settings;
/**
 * Pagination UI.
 * @element bx-pagination
 * @slot page-sizes-select - Where to put in the `<page-sizes-select>`.
 * @fires bx-pages-select-changed - The custom event fired after the current page is changed from `<bx-pages-select>`.
 * @fires bx-page-sizes-select-changed
 *   The custom event fired after the number of rows per page is changed from `<bx-page-sizes-select>`.
 */

let BXPagination = _decorate([customElement(`${prefix}-pagination`)], function (_initialize, _FocusMixin) {
  class BXPagination extends _FocusMixin {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXPagination,
    d: [{
      kind: "method",
      key: "_renderStatusText",
      value:
      /**
       * @returns Page status text.
       */
      function _renderStatusText() {
        const {
          atLastPage,
          start,
          pageSize,
          total,
          formatStatusWithDeterminateTotal,
          formatStatusWithIndeterminateTotal
        } = this; // * Regular: `1-10 of 100 items`
        // * Indeterminate total: `Item 1-10` (`Item 11-` at the last page)

        const end = atLastPage ? undefined : Math.min(start + pageSize, total == null ? Infinity : total);
        const format = total == null ? formatStatusWithIndeterminateTotal : formatStatusWithDeterminateTotal; // `start`/`end` properties starts with zero, whereas we want to show number starting with 1

        return format({
          start: start + 1,
          end,
          count: total
        });
      }
      /**
       * Handles user-initiated change in the row number the current page starts with.
       * @param start The new current row number, index that starts with zero.
       */

    }, {
      kind: "method",
      key: "_handleUserInitiatedChangeStart",
      value: function _handleUserInitiatedChangeStart(start) {
        this.start = start;
        this.dispatchEvent(new CustomEvent(this.constructor.eventChangeCurrent, {
          bubbles: true,
          composed: true,
          detail: {
            start
          }
        }));
      }
      /**
       * Handles `click` event on the previous button.
       */

    }, {
      kind: "method",
      key: "_handleClickPrevButton",
      value: function _handleClickPrevButton() {
        const {
          start: oldStart,
          pageSize
        } = this;
        const newStart = Math.max(oldStart - pageSize, 0);

        if (newStart !== oldStart) {
          this._handleUserInitiatedChangeStart(newStart);
        }
      }
      /**
       * Handles `click` event on the next button.
       */

    }, {
      kind: "method",
      key: "_handleClickNextButton",
      value: function _handleClickNextButton() {
        const {
          start: oldStart,
          pageSize,
          total
        } = this;
        const newStart = oldStart + pageSize;

        if (newStart < (total == null ? Infinity : total)) {
          this._handleUserInitiatedChangeStart(newStart);
        }
      }
      /**
       * Handles user-initiated change in current page.
       * @param event The event.
       */

    }, {
      kind: "field",
      decorators: [HostListener('eventChangePage')],
      key: "_handleChangePage",

      value() {
        return ({
          detail
        }) => {
          const {
            value
          } = detail;
          const {
            pageSize
          } = this;

          this._handleUserInitiatedChangeStart(value * pageSize);
        };
      }

    }, {
      kind: "field",
      decorators: [HostListener('eventChangePageSize')],
      key: "_handleChangePageSize",

      value() {
        return ({
          detail
        }) => {
          this.pageSize = detail.value;
        };
      }

    }, {
      kind: "field",
      decorators: [property({
        attribute: false
      })],
      key: "formatStatusWithDeterminateTotal",

      value() {
        return ({
          start,
          end,
          count
        }) => `${start}–${end} of ${count} item${count <= 1 ? '' : 's'}`;
      }

    }, {
      kind: "field",
      decorators: [property({
        attribute: false
      })],
      key: "formatStatusWithIndeterminateTotal",

      value() {
        return ({
          start,
          end
        }) => end == null ? `Item ${start}–` : `Item ${start}–${end}`;
      }

    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        attribute: 'at-last-page'
      })],
      key: "atLastPage",
      value: void 0
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
        attribute: 'next-button-text'
      })],
      key: "nextButtonText",

      value() {
        return 'Next page';
      }

    }, {
      kind: "field",
      decorators: [property({
        type: Number,
        attribute: 'page-size'
      })],
      key: "pageSize",

      value() {
        return 10;
      }

    }, {
      kind: "field",
      decorators: [property({
        attribute: 'page-size-label-text'
      })],
      key: "pageSizeLabelText",
      value: void 0
    }, {
      kind: "field",
      decorators: [property({
        attribute: 'prev-button-text'
      })],
      key: "prevButtonText",

      value() {
        return 'Previous page';
      }

    }, {
      kind: "field",
      decorators: [property({
        type: Number
      })],
      key: "start",

      value() {
        return 0;
      }

    }, {
      kind: "field",
      decorators: [property({
        type: Number
      })],
      key: "total",
      value: void 0
    }, {
      kind: "method",
      key: "createRenderRoot",
      value:
      /**
       * Handles user-initiated change in number of rows per page.
       * @param event The event.
       */

      /**
       * The formatter, used with determinate the total pages. Should be changed upon the locale the UI is rendered with.
       */

      /**
       * The formatter, used with indeterminate the total pages. Should be changed upon the locale the UI is rendered with.
       */

      /**
       * `true` to explicitly state that user is at the last page.
       */

      /**
       * `true` if the pagination UI should be disabled.
       */

      /**
       * The assistive text for the button to go to next page.
       */

      /**
       * Number of items per page.
       */

      /**
       * The label text for the UI to select page size.
       */

      /**
       * The assistive text for the button to go to previous page.
       */

      /**
       * The row number where current page start with, index that starts with zero.
       */

      /**
       * The number of total items.
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
      key: "updated",
      value: function updated(changedProperties) {
        const {
          pageSize
        } = this;
        const {
          selectorPageSizesSelect,
          selectorPagesSelect
        } = this.constructor;

        if (changedProperties.has('pageSize')) {
          forEach(this.querySelectorAll(selectorPageSizesSelect), elem => {
            elem.value = pageSize;
          });
        }

        if (changedProperties.has('pageSize') || changedProperties.has('start')) {
          const {
            start
          } = this;
          forEach(this.querySelectorAll(selectorPagesSelect), elem => {
            elem.value = Math.floor(start / pageSize);
          });
        }

        if (changedProperties.has('pageSize') || changedProperties.has('total')) {
          const {
            total
          } = this;
          forEach(this.querySelectorAll(selectorPagesSelect), elem => {
            elem.total = Math.ceil(total / pageSize);
          });
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const {
          disabled,
          nextButtonText,
          prevButtonText,
          pageSize,
          start,
          total,
          _handleClickPrevButton: handleClickPrevButton,
          _handleClickNextButton: handleClickNextButton
        } = this;
        const {
          atLastPage = start + pageSize >= total
        } = this;
        const prevButtonDisabled = disabled || start === 0;
        const nextButtonDisabled = disabled || atLastPage;
        const prevButtonClasses = classMap({
          [`${prefix}--pagination__button`]: true,
          [`${prefix}--pagination__button--backward`]: true,
          [`${prefix}--pagination__button--no-index`]: prevButtonDisabled
        });
        const nextButtonClasses = classMap({
          [`${prefix}--pagination__button`]: true,
          [`${prefix}--pagination__button--forward`]: true,
          [`${prefix}--pagination__button--no-index`]: nextButtonDisabled
        });
        return html(_t || (_t = _` <div class="${0}--pagination__left"> <slot name="page-sizes-select"></slot> <div class="${0}-ce--pagination__divider"></div> <span class="${0}--pagination__text ${0}--pagination__items-count">${0}</span> </div> <div class="${0}-ce--pagination__divider"></div> <div class="${0}--pagination__right"> <slot></slot> <div class="${0}--pagination__control-buttons"> <button ?disabled="${0}" class="${0}" title="${0}" @click="${0}"> ${0} </button> <button ?disabled="${0}" class="${0}" title="${0}" @click="${0}"> ${0} </button> </div> </div> `), prefix, prefix, prefix, prefix, this._renderStatusText(), prefix, prefix, prefix, prevButtonDisabled, prevButtonClasses, prevButtonText, handleClickPrevButton, CaretLeft24(), nextButtonDisabled, nextButtonClasses, nextButtonText, handleClickNextButton, CaretRight24());
      }
      /**
       * A selector that will return the select box for the current page.
       */

    }, {
      kind: "get",
      static: true,
      key: "selectorPagesSelect",
      value: function selectorPagesSelect() {
        return `${prefix}-pages-select`;
      }
      /**
       * A selector that will return the select box for page sizes.
       */

    }, {
      kind: "get",
      static: true,
      key: "selectorPageSizesSelect",
      value: function selectorPageSizesSelect() {
        return `${prefix}-page-sizes-select`;
      }
      /**
       * The name of the custom event fired after the current row number is changed.
       */

    }, {
      kind: "get",
      static: true,
      key: "eventChangeCurrent",
      value: function eventChangeCurrent() {
        return `${prefix}-pagination-changed-current`;
      }
      /**
       * The name of the custom event fired after the current page is changed from `<bx-pages-select>`.
       */

    }, {
      kind: "get",
      static: true,
      key: "eventChangePage",
      value: function eventChangePage() {
        return `${prefix}-pages-select-changed`;
      }
      /**
       * The name of the custom event fired after the number of rows per page is changed from `<bx-page-sizes-select>`.
       */

    }, {
      kind: "get",
      static: true,
      key: "eventChangePageSize",
      value: function eventChangePageSize() {
        return `${prefix}-page-sizes-select-changed`;
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
}, FocusMixin(HostListenerMixin(LitElement)));

export default BXPagination;
//# sourceMappingURL=pagination.js.map

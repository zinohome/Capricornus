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
import { forEach } from '../../globals/internal/collection-helpers';
import FocusMixin from '../../globals/mixins/focus';
import styles from "././structured-list.css.js";
const {
  prefix
} = settings;
/**
 * Structured list wrapper.
 * @element bx-structured-list
 */

let BXStructuredList = _decorate([customElement(`${prefix}-structured-list`)], function (_initialize, _FocusMixin) {
  class BXStructuredList extends _FocusMixin {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXStructuredList,
    d: [{
      kind: "field",
      decorators: [property({
        attribute: 'selection-name'
      })],
      key: "selectionName",

      value() {
        return '';
      }

    }, {
      kind: "method",
      key: "createRenderRoot",
      value:
      /**
       * The `name` attribute for the `<input>` for selection.
       * If present, this structured list will be a selectable one.
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
          this.setAttribute('role', 'table');
        }

        _get(_getPrototypeOf(BXStructuredList.prototype), "connectedCallback", this).call(this);
      }
    }, {
      kind: "method",
      key: "shouldUpdate",
      value: function shouldUpdate(changedProperties) {
        if (changedProperties.has('selectionName')) {
          // Propagate `selectionName` attribute to descendants until `:host-context()` gets supported in all major browsers
          forEach(this.querySelectorAll(this.constructor.selectorRowsWithHeader), elem => {
            elem.selectionName = this.selectionName;
          });
        }

        return true;
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const {
          selectionName
        } = this;
        const classes = classMap({
          [`${prefix}--structured-list`]: true,
          [`${prefix}--structured-list--selection`]: Boolean(selectionName)
        });
        return html(_t || (_t = _` <section id="section" class="${0}"><slot></slot></section> `), classes);
      }
      /**
       * The CSS selector to find the rows, including header rows.
       */

    }, {
      kind: "field",
      static: true,
      key: "selectorRowsWithHeader",

      value() {
        return `${prefix}-structured-list-row,${prefix}-structured-list-header-row`;
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

export default BXStructuredList;
//# sourceMappingURL=structured-list.js.map

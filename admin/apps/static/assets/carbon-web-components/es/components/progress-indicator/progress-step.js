import _decorate from "@babel/runtime/helpers/esm/decorate";
import _get from "@babel/runtime/helpers/esm/get";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

let _ = t => t,
    _t,
    _t2,
    _t3,
    _t4,
    _t5;

/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { html, svg, property, customElement, LitElement } from 'lit-element';
import CheckmarkOutline16 from "../../icons/checkmark--outline/16";
import Warning16 from "../../icons/warning/16";
import settings from 'carbon-components/es/globals/js/settings';
import spread from '../../globals/directives/spread';
import FocusMixin from '../../globals/mixins/focus';
import { PROGRESS_STEP_STAT } from './defs';
import styles from "././progress-indicator.css.js";
export { PROGRESS_STEP_STAT };
const {
  prefix
} = settings;
/**
 * Icons, keyed by state.
 */

const icons = {
  [PROGRESS_STEP_STAT.QUEUED]: ({
    children,
    attrs: _attrs = {}
  } = {}) => svg(_t || (_t = _`
      <svg ...="${0}">
        ${0}
        <path d="M8 1C4.1 1 1 4.1 1 8s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7zm0 13c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z" />
      </svg>
    `), spread(_attrs), children),
  [PROGRESS_STEP_STAT.CURRENT]: ({
    children,
    attrs: _attrs2 = {}
  } = {}) => svg(_t2 || (_t2 = _`
      <svg ...="${0}">
        ${0}
        <path d="M 7, 7 m -7, 0 a 7,7 0 1,0 14,0 a 7,7 0 1,0 -14,0" />
      </svg>
    `), spread(_attrs2), children),
  [PROGRESS_STEP_STAT.COMPLETE]: CheckmarkOutline16,
  [PROGRESS_STEP_STAT.INVALID]: Warning16
};
/**
 * Progress step.
 * @element bx-progress-step
 * @slot secondary-label-text - The secondary progress label.
 */

let BXProgressStep = _decorate([customElement(`${prefix}-progress-step`)], function (_initialize, _FocusMixin) {
  class BXProgressStep extends _FocusMixin {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXProgressStep,
    d: [{
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
        attribute: 'icon-label'
      })],
      key: "iconLabel",
      value: void 0
    }, {
      kind: "field",
      decorators: [property({
        attribute: 'label-text'
      })],
      key: "labelText",
      value: void 0
    }, {
      kind: "field",
      decorators: [property({
        attribute: 'secondary-label-text'
      })],
      key: "secondaryLabelText",
      value: void 0
    }, {
      kind: "field",
      decorators: [property()],
      key: "state",

      value() {
        return PROGRESS_STEP_STAT.QUEUED;
      }

    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "vertical",

      value() {
        return false;
      }

    }, {
      kind: "method",
      key: "createRenderRoot",
      value:
      /**
       * `true` if the progress step should be disabled.
       */

      /**
       * The a11y text for the icon.
       */

      /**
       * The primary progress label.
       */

      /**
       * The secondary progress label.
       */

      /**
       * The progress state.
       */

      /**
       * `true` if the progress step should be vertical.
       * @private
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
          this.setAttribute('role', 'listitem');
        }

        _get(_getPrototypeOf(BXProgressStep.prototype), "connectedCallback", this).call(this);
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProperties) {
        if (changedProperties.has('disabled')) {
          this.setAttribute('aria-disabled', String(Boolean(this.disabled)));
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const {
          iconLabel,
          labelText,
          secondaryLabelText,
          state
        } = this;
        return html(_t3 || (_t3 = _` ${0} <slot> <p role="button" class="${0}--progress-label" tabindex="0" aria-describedby="label-tooltip">${0}</p> </slot> <slot name="secondary-label-text"> ${0} </slot> <span class="${0}--progress-line"></span> `), icons[state]({
          class: {
            [PROGRESS_STEP_STAT.INVALID]: `${prefix}--progress__warning`
          }[state],
          children: !iconLabel ? undefined : svg(_t4 || (_t4 = _`<title>${0}</title>`), iconLabel)
        }), prefix, labelText, !secondaryLabelText ? undefined : html(_t5 || (_t5 = _` <p class="${0}--progress-optional">${0}</p> `), prefix, secondaryLabelText), prefix);
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

export default BXProgressStep;
//# sourceMappingURL=progress-step.js.map

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
import { classMap } from 'lit-html/directives/class-map';
import { ifDefined } from 'lit-html/directives/if-defined';
import { html, property, customElement, LitElement } from 'lit-element';
import Copy16 from "../../icons/copy/16";
import settings from 'carbon-components/es/globals/js/settings';
import FocusMixin from '../../globals/mixins/focus';
import styles from "././copy-button.css.js";
const {
  prefix
} = settings;
/**
 * Note: For `<bx-code-snippet>` only. The API is subject to change/removal.
 * @param update The callback function that dictates how to update the DOM with new feedback tooltip state.
 * @returns A function that shows the feedback tooltip for the given duration.
 * @private
 */

export const _createHandleFeedbackTooltip = update => {
  let timeoutId;
  return timeout => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = undefined;
    }

    update({
      showFeedback: true
    });
    timeoutId = setTimeout(() => {
      update({
        showFeedback: false
      });
    }, timeout);
  };
};
/**
 * Note: For `<bx-code-snippet>` only. The API is subject to change/removal.
 * @param properties The properties to render.
 * @returns The template result for copy button from the given properties.
 * @private
 */

export const _renderButton = ({
  assistiveText,
  feedbackText,
  showFeedback: _showFeedback = false,
  className: _className = `${prefix}--snippet-button`,
  children: _children = html(_t || (_t = _` <slot>${0}</slot> `), Copy16({
    class: `${prefix}--snippet__icon`
  })),
  handleClickButton
}) => {
  const feedbackClasses = classMap({
    [`${prefix}--btn--copy__feedback`]: true,
    [`${prefix}--btn--copy__feedback--displayed`]: _showFeedback
  });
  return html(_t2 || (_t2 = _` <button type="button" class="${0}" title="${0}" @click="${0}"> ${0} <div class="${0}" data-feedback="${0}"></div> </button> `), _className, ifDefined(assistiveText), handleClickButton, _children, feedbackClasses, ifDefined(feedbackText));
};
/**
 * Copy button.
 * @element bx-copy-button
 */

let BXCopyButton = _decorate([customElement(`${prefix}-copy-button`)], function (_initialize, _FocusMixin) {
  class BXCopyButton extends _FocusMixin {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXCopyButton,
    d: [{
      kind: "field",
      key: "_handleFeedbackTooltip",

      value() {
        return _createHandleFeedbackTooltip(({
          showFeedback: _showFeedback2 = false
        }) => {
          this._showFeedback = _showFeedback2;
          this.requestUpdate();
        });
      }

    }, {
      kind: "field",
      key: "_showFeedback",

      value() {
        return false;
      }

    }, {
      kind: "method",
      key: "_handleClickButton",
      value:
      /**
       * Handles showing/hiding the feedback tooltip.
       */

      /**
       * `true` to show the feedback tooltip.
       */

      /**
       * Handles `click` event on the copy button.
       */
      function _handleClickButton() {
        this._handleFeedbackTooltip(this.feedbackTimeout);
      }
      /**
       * An assistive text for screen reader to announce, telling that the button copies the content to the clipboard.
       */

    }, {
      kind: "field",
      decorators: [property({
        attribute: 'button-assistive-text'
      })],
      key: "buttonAssistiveText",

      value() {
        return 'Copy to clipboard';
      }

    }, {
      kind: "field",
      decorators: [property({
        attribute: 'feedback-text'
      })],
      key: "feedbackText",

      value() {
        return 'Copied!';
      }

    }, {
      kind: "field",
      decorators: [property({
        type: Number,
        attribute: 'feedback-timeout'
      })],
      key: "feedbackTimeout",

      value() {
        return 2000;
      }

    }, {
      kind: "method",
      key: "createRenderRoot",
      value:
      /**
       * The feedback text.
       */

      /**
       * The number in milliseconds to determine how long the tooltip should remain.
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
          buttonAssistiveText,
          feedbackText,
          _handleClickButton: handleClickButton,
          _showFeedback: showFeedback
        } = this;
        return _renderButton({
          assistiveText: buttonAssistiveText,
          feedbackText,
          showFeedback,
          handleClickButton
        });
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

export default BXCopyButton;
//# sourceMappingURL=copy-button.js.map

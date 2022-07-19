import _decorate from "@babel/runtime/helpers/esm/decorate";

let _ = t => t,
    _t,
    _t2,
    _t3,
    _t4,
    _t5,
    _t6,
    _t7,
    _t8,
    _t9,
    _t10;

/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { classMap } from 'lit-html/directives/class-map';
import { html, property, query, customElement, LitElement } from 'lit-element';
import ChevronDown16 from "../../icons/chevron--down/16";
import settings from 'carbon-components/es/globals/js/settings';
import FocusMixin from '../../globals/mixins/focus';
import { _createHandleFeedbackTooltip as createHandleCopyButtonFeedbackTooltip, _renderButton as renderCopyButton } from '../copy-button/copy-button';
import { CODE_SNIPPET_COLOR_SCHEME, CODE_SNIPPET_TYPE } from './defs';
import styles from "././code-snippet.css.js";
export { CODE_SNIPPET_COLOR_SCHEME, CODE_SNIPPET_TYPE };
const {
  prefix
} = settings;
/**
 * @param values The values to render.
 * @param values.children The child nodes.
 * @param values.handleClick The handler for the `click` event on the button.
 * @returns The template result for the expando.
 */

const renderExpando = ({
  children,
  handleClick
}) => html(_t || (_t = _` <button type="button" class="${0}--snippet-btn--expand" @click="${0}"> <span id="button-text" class="${0}--snippet-btn--text"> ${0} </span> ${0} </button> `), prefix, handleClick, prefix, children, ChevronDown16({
  'aria-labeledby': 'button-text',
  class: `${prefix}--icon-chevron--down ${prefix}--snippet__icon`,
  role: 'img'
}));
/**
 * @param values The values to render.
 * @param values.assistiveText The assistive text to announce that the node is for code snippet.
 * @param [values.expanded] `true` to show the expanded state (for multi-line variant).
 * @param values.children The child nodes.
 * @returns The template result for the code snippet.
 */


const renderCode = ({
  assistiveText,
  expanded,
  children
}) => {
  const classes = classMap({
    [`${prefix}--snippet-container`]: true,
    [`${prefix}-ce--snippet-container--expanded`]: Boolean(expanded)
  }); // Ensures no extra whitespace text node
  // prettier-ignore

  return html(_t2 || (_t2 = _` <div role="textbox" tabindex="0" class="${0}" aria-label="${0}"><code><pre>${0}</pre></code></div> `), classes, assistiveText, children);
};
/**
 * Basic code snippet.
 * @element bx-code-snippet
 */


let BXCodeSnippet = _decorate([customElement(`${prefix}-code-snippet`)], function (_initialize, _FocusMixin) {
  class BXCodeSnippet extends _FocusMixin {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXCodeSnippet,
    d: [{
      kind: "field",
      key: "_expanded",

      value() {
        return false;
      }

    }, {
      kind: "field",
      key: "_showCopyButtonFeedback",

      value() {
        return false;
      }

    }, {
      kind: "field",
      key: "_showExpando",

      value() {
        return false;
      }

    }, {
      kind: "method",
      key: "_handleClickCopyButton",
      value:
      /**
       * `true` to expand multi-line variant of code snippet.
       */

      /**
       * `true` to show the feedback tooltip.
       */

      /**
       * `true` to show the expando.
       */

      /**
       * Handles `click` event on the copy button.
       */
      function _handleClickCopyButton() {
        const {
          ownerDocument: doc
        } = this;
        const selection = doc.defaultView.getSelection();
        selection.removeAllRanges();
        const code = doc.createElement('code');
        code.className = `${prefix}--visually-hidden`;
        const pre = doc.createElement('pre');
        pre.textContent = this.textContent;
        code.appendChild(pre); // Using `<code>` in shadow DOM seems to lose the LFs in some browsers

        doc.body.appendChild(code);
        const range = doc.createRange();
        range.selectNodeContents(code);
        selection.addRange(range);
        doc.execCommand('copy');

        this._handleCopyButtonFeedbackTooltip(this.copyButtonFeedbackTimeout);

        doc.body.removeChild(code);
        selection.removeAllRanges();
      }
      /**
       * Handles showing/hiding the feedback tooltip.
       */

    }, {
      kind: "field",
      key: "_handleCopyButtonFeedbackTooltip",

      value() {
        return createHandleCopyButtonFeedbackTooltip(({
          showFeedback: _showFeedback = false
        }) => {
          this._showCopyButtonFeedback = _showFeedback;
          this.requestUpdate();
        });
      }

    }, {
      kind: "method",
      key: "_handleClickExpando",
      value:
      /**
       * Handles `click` event on the expando.
       */
      function _handleClickExpando() {
        this._expanded = !this._expanded;
        this.requestUpdate();
      }
      /**
       * Handles change in slot content to determine if the content
       */

    }, {
      kind: "method",
      key: "_handleSlotChange",
      value: function _handleSlotChange() {
        const {
          type,
          _preNode: preNode
        } = this;

        if (type === CODE_SNIPPET_TYPE.MULTI) {
          if (preNode.getBoundingClientRect().height > 255) {
            this._showExpando = true;
            this.requestUpdate();
          }
        }
      }
      /**
       * The `<pre>` element in the shadow DOM.
       */

    }, {
      kind: "field",
      decorators: [query('pre')],
      key: "_preNode",
      value: void 0
    }, {
      kind: "field",
      decorators: [property({
        attribute: 'code-assistive-text'
      })],
      key: "codeAssistiveText",

      value() {
        return 'code-snippet';
      }

    }, {
      kind: "field",
      decorators: [property({
        attribute: 'collapse-button-text'
      })],
      key: "collapseButtonText",

      value() {
        return 'Show less';
      }

    }, {
      kind: "field",
      decorators: [property({
        attribute: 'color-scheme',
        reflect: true
      })],
      key: "colorScheme",

      value() {
        return CODE_SNIPPET_COLOR_SCHEME.REGULAR;
      }

    }, {
      kind: "field",
      decorators: [property({
        attribute: 'copy-button-assistive-text'
      })],
      key: "copyButtonAssistiveText",

      value() {
        return 'Copy to clipboard';
      }

    }, {
      kind: "field",
      decorators: [property({
        attribute: 'copy-button-feedback-text'
      })],
      key: "copyButtonFeedbackText",

      value() {
        return 'Copied!';
      }

    }, {
      kind: "field",
      decorators: [property({
        type: Number,
        attribute: 'copy-button-feedback-timeout'
      })],
      key: "copyButtonFeedbackTimeout",

      value() {
        return 2000;
      }

    }, {
      kind: "field",
      decorators: [property({
        attribute: 'expand-button-text'
      })],
      key: "expandButtonText",

      value() {
        return 'Show more';
      }

    }, {
      kind: "field",
      decorators: [property({
        reflect: true
      })],
      key: "type",

      value() {
        return CODE_SNIPPET_TYPE.SINGLE;
      }

    }, {
      kind: "method",
      key: "createRenderRoot",
      value:
      /**
       * An assistive text for screen reader to advice a DOM node is for code snippet.
       */

      /**
       * The context content for the collapse button.
       */

      /**
       * The color scheme.
       */

      /**
       * An assistive text for screen reader to announce, telling that the button copies the content to the clipboard.
       */

      /**
       * The feedback text for the copy button.
       */

      /**
       * The number in milliseconds to determine how long the tooltip for the copy button should remain.
       */

      /**
       * The context content for the expand button.
       */

      /**
       * The type of code snippet.
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
          codeAssistiveText,
          collapseButtonText,
          copyButtonAssistiveText,
          copyButtonFeedbackText,
          expandButtonText,
          type,
          _expanded: expanded,
          _showCopyButtonFeedback: showCopyButtonFeedback,
          _showExpando: showExpando,
          _handleClickCopyButton: handleClickCopyButton,
          _handleClickExpando: handleClickExpando,
          _handleSlotChange: handleSlotChange
        } = this;

        if (type === CODE_SNIPPET_TYPE.SINGLE) {
          // Ensures no extra whitespace text node
          // prettier-ignore
          return html(_t3 || (_t3 = _` ${0} ${0} `), renderCode({
            assistiveText: codeAssistiveText,
            expanded,
            children: html(_t4 || (_t4 = _`<slot @slotchange="${0}"></slot>`), handleSlotChange)
          }), renderCopyButton({
            assistiveText: copyButtonAssistiveText,
            feedbackText: copyButtonFeedbackText,
            showFeedback: showCopyButtonFeedback,
            handleClickButton: handleClickCopyButton,
            className: `${prefix}--snippet-button`
          }));
        }

        if (type === CODE_SNIPPET_TYPE.MULTI) {
          // Ensures no extra whitespace text node
          // prettier-ignore
          return html(_t5 || (_t5 = _` ${0} ${0} ${0} `), renderCode({
            assistiveText: codeAssistiveText,
            expanded,
            children: html(_t6 || (_t6 = _`<slot @slotchange="${0}"></slot>`), handleSlotChange)
          }), renderCopyButton({
            assistiveText: copyButtonAssistiveText,
            feedbackText: copyButtonFeedbackText,
            showFeedback: showCopyButtonFeedback,
            handleClickButton: handleClickCopyButton,
            className: `${prefix}--snippet-button`
          }), !showExpando ? undefined : renderExpando({
            children: expanded ? html(_t7 || (_t7 = _`<slot name="collapse-button-text">${0}</slot>`), collapseButtonText) : html(_t8 || (_t8 = _`<slot name="expand-button-text">${0}</slot>`), expandButtonText),
            handleClick: handleClickExpando
          }));
        } // Ensures no extra whitespace text node
        // prettier-ignore


        return html(_t9 || (_t9 = _` ${0} `), renderCopyButton({
          assistiveText: copyButtonAssistiveText,
          feedbackText: copyButtonFeedbackText,
          showFeedback: showCopyButtonFeedback,
          handleClickButton: handleClickCopyButton,
          className: `${prefix}--snippet ${prefix}--snippet--inline`,
          children: html(_t10 || (_t10 = _`<code aria-label="${0}"><slot></slot></code>`), codeAssistiveText)
        }));
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

export default BXCodeSnippet;
//# sourceMappingURL=code-snippet.js.map

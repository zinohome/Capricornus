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
import { html, property, query, customElement, LitElement } from 'lit-element';
import flatpickr from 'flatpickr';
import settings from 'carbon-components/es/globals/js/settings';
import FormMixin from '../../globals/mixins/form';
import HostListenerMixin from '../../globals/mixins/host-listener';
import HostListener from '../../globals/decorators/host-listener';
import { getISODateString, parseISODateString } from './iso-date';
import appendToPlugin from './append-to-plugin';
import cssClassPlugin from './css-class-plugin';
import fixEventsPlugin from './fix-events-plugin';
import focusPlugin from './focus-plugin';
import iconPlugin from './icon-plugin';
import monthSelectPlugin from './month-select-plugin';
import rangePlugin from './range-plugin';
import shadowDOMEventPlugin from './shadow-dom-events-plugin';
import stateHandshakePlugin from './state-handshake-plugin';
import styles from "././date-picker.css.js";
const {
  prefix
} = settings;
/**
 * Date picker modes.
 */

var DATE_PICKER_MODE;
/**
 * Date picker.
 * @element bx-date-picker
 * @fires bx-date-picker-changed - The custom event fired on this element when Flatpickr updates its value.
 */

(function (DATE_PICKER_MODE) {
  DATE_PICKER_MODE["SIMPLE"] = "simple";
  DATE_PICKER_MODE["SINGLE"] = "single";
  DATE_PICKER_MODE["RANGE"] = "range";
})(DATE_PICKER_MODE || (DATE_PICKER_MODE = {}));

let BXDatePicker = _decorate([customElement(`${prefix}-date-picker`)], function (_initialize, _HostListenerMixin) {
  class BXDatePicker extends _HostListenerMixin {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: BXDatePicker,
    d: [{
      kind: "field",
      key: "_dateInteractNode",

      value() {
        return null;
      }

    }, {
      kind: "field",
      decorators: [query('#floating-menu-container')],
      key: "_floatingMenuContainerNode",
      value: void 0
    }, {
      kind: "get",
      key: "_mode",
      value:
      /**
       * The slotted `<bx-date-input kind="from">`.
       */

      /**
       * The element to put calendar dropdown in.
       */

      /**
       * @returns The effective date picker mode, determined by the child `<bx-date-picker-input>`.
       */
      function _mode() {
        const {
          selectorInputFrom,
          selectorInputTo
        } = this.constructor;

        if (this.querySelector(selectorInputTo)) {
          return DATE_PICKER_MODE.RANGE;
        }

        if (this.querySelector(selectorInputFrom)) {
          return DATE_PICKER_MODE.SINGLE;
        }

        return DATE_PICKER_MODE.SIMPLE;
      }
      /**
       * @returns The Flatpickr plugins to use.
       */

    }, {
      kind: "get",
      key: "_datePickerPlugins",
      value: function _datePickerPlugins() {
        const {
          classCalendarContainer,
          classMonth,
          classWeekdays,
          classDays,
          classWeekday,
          classDay,
          classNoBorder,
          selectorInputFrom,
          selectorInputTo,
          _selectorFlatpickrMonthYearContainer: selectorFlatpickrMonthYearContainer,
          _selectorFlatpickrYearContainer: selectorFlatpickrYearContainer,
          _selectorFlatpickrCurrentMonth: selectorFlatpickrCurrentMonth,
          _selectorFlatpickrMonth: selectorFlatpickrMonth,
          _selectorFlatpickrWeekdays: selectorFlatpickrWeekdays,
          _selectorFlatpickrDays: selectorFlatpickrDays,
          _selectorFlatpickrWeekday: selectorFlatpickrWeekday,
          _selectorFlatpickrDay: selectorFlatpickrDay,
          _classFlatpickrCurrentMonth: classFlatpickrCurrentMonth,
          _classFlatpickrToday: classFlatpickrToday
        } = this.constructor;
        const {
          _floatingMenuContainerNode: floatingMenuContainerNode,
          _mode: mode
        } = this;
        const inputFrom = this.querySelector(selectorInputFrom);
        const inputTo = this.querySelector(selectorInputTo);
        const plugins = [appendToPlugin({
          appendTo: floatingMenuContainerNode
        }), cssClassPlugin({
          classCalendarContainer,
          classMonth,
          classWeekdays,
          classDays,
          classWeekday,
          classDay,
          classNoBorder,
          selectorFlatpickrMonth,
          selectorFlatpickrWeekdays,
          selectorFlatpickrDays,
          selectorFlatpickrWeekday,
          selectorFlatpickrDay,
          classFlatpickrToday
        }), fixEventsPlugin({
          inputFrom: inputFrom,
          inputTo: inputTo
        }), focusPlugin({
          inputFrom: inputFrom,
          inputTo: inputTo
        }), iconPlugin(), monthSelectPlugin({
          selectorFlatpickrMonthYearContainer,
          selectorFlatpickrYearContainer,
          selectorFlatpickrCurrentMonth,
          classFlatpickrCurrentMonth
        }), shadowDOMEventPlugin(), stateHandshakePlugin(this)];

        if (mode === DATE_PICKER_MODE.RANGE) {
          // Flatpickr runs event handlers of last registered plugins first.
          // Ensures `onValueUpdate` of `rangePlugin` runs first
          // given Flatpickr puts `01/01/1970 to 01/02/1970` to from date
          // where `rangePlugin` overrides it to separate them to from/to dates.
          // We want to ensure our handler of `onValueUpdate` (notably one in `<bx-date-picker-input>`)
          // gets the `<input>` value set by `rangePlugin` instead of Flatpickr core.
          plugins.push(rangePlugin({
            input: inputTo
          }));
        }

        return plugins;
      }
      /**
       * @returns The options to instantiate Flatpickr with.
       */

    }, {
      kind: "get",
      key: "_datePickerOptions",
      value: function _datePickerOptions() {
        var _this$dateFormat;

        const {
          locale = this.constructor.defaultLocale,
          enabledRange,
          _dateInteractNode: dateInteractNode,
          _datePickerPlugins: plugins,
          _handleFlatpickrError: handleFlatpickrError
        } = this; // We use `<bx-date-picker-input>` to communicate values/events with Flatpickr,
        // but want to use `<input>` in shadow DOM to base the calendar dropdown's position on

        const {
          input: positionElement
        } = dateInteractNode;
        const [minDate = undefined, maxDate = undefined] = !enabledRange ? [] : enabledRange.split('/');
        return {
          allowInput: true,
          dateFormat: (_this$dateFormat = this.dateFormat) !== null && _this$dateFormat !== void 0 ? _this$dateFormat : this.constructor.defaultDateFormat,
          disableMobile: true,
          errorHandler: handleFlatpickrError,
          locale,
          maxDate,
          minDate,
          positionElement,
          plugins
        };
      }
      /**
       * Handles `${prefix}-date-picker-changed` event on this element.
       */

    }, {
      kind: "field",
      decorators: [HostListener('eventChange')],
      key: "_handleChange",

      value() {
        return ({
          detail
        }) => {
          this._value = detail.selectedDates.map(date => getISODateString(date)).join('/');
        };
      }

    }, {
      kind: "method",
      key: "_handleFormdata",
      value: function _handleFormdata(event) {
        const {
          formData
        } = event; // TODO: Wait for `FormDataEvent` being available in `lib.dom.d.ts`

        const {
          disabled,
          name,
          value
        } = this;

        if (!disabled) {
          formData.append(name, value);
        }
      }
      /**
       * Handles `slotchange` event in the `<slot>`.
       */

    }, {
      kind: "method",
      key: "_handleSlotChange",
      value: function _handleSlotChange({
        target
      }) {
        const {
          _dateInteractNode: oldDateInteractNode
        } = this;
        const dateInteractNode = target.assignedNodes().find(node => node.nodeType === Node.ELEMENT_NODE && node.matches(this.constructor.selectorInputFrom));

        if (oldDateInteractNode !== dateInteractNode) {
          this._dateInteractNode = dateInteractNode;

          this._instantiateDatePicker();
        }
      }
      /**
       * Fires a custom event to notify an error in Flatpickr.
       */

    }, {
      kind: "field",
      key: "_handleFlatpickrError",

      value() {
        return error => {
          this.dispatchEvent(new CustomEvent(this.constructor.eventFlatpickrError, {
            bubbles: true,
            cancelable: false,
            composed: true,
            detail: {
              error
            }
          }));
        };
      }

    }, {
      kind: "method",
      key: "_instantiateDatePicker",
      value:
      /**
       * Instantiates Flatpickr.
       * @returns The Flatpickr instance.
       */
      function _instantiateDatePicker() {
        this._releaseDatePicker();

        const {
          _dateInteractNode: dateInteractNode
        } = this; // `this._dateInteractNode` won't be there unless there is a slotted `<bx-date-input type="from">`,
        // which means Flatpickr will never be instantiated in "simple" mode.

        if (dateInteractNode && dateInteractNode.input) {
          this.calendar = flatpickr(dateInteractNode, this._datePickerOptions);
        }

        return this.calendar;
      }
      /**
       * Releases Flatpickr instances.
       */

    }, {
      kind: "method",
      key: "_releaseDatePicker",
      value: function _releaseDatePicker() {
        if (this.calendar) {
          this.calendar.destroy();
          this.calendar = null;
        }

        return this.calendar;
      }
      /**
       * The Flatpickr instance.
       */

    }, {
      kind: "field",
      key: "calendar",

      value() {
        return null;
      }

    }, {
      kind: "field",
      decorators: [property({
        attribute: 'date-format'
      })],
      key: "dateFormat",
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
        attribute: false
      })],
      key: "locale",
      value: void 0
    }, {
      kind: "field",
      decorators: [property({
        attribute: 'enabled-range'
      })],
      key: "enabledRange",
      value: void 0
    }, {
      kind: "field",
      decorators: [property()],
      key: "name",

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
      kind: "get",
      decorators: [property()],
      key: "value",
      value:
      /**
       * The date format to let Flatpickr use.
       */

      /**
       * Controls the disabled state of the input
       */

      /**
       * The localization data.
       */

      /**
       * The date range that a user can pick in calendar dropdown.
       */

      /**
       * Name for the input in the `FormData`
       */

      /**
       * `true` if the date picker should be open.
       */

      /**
       * The date(s) in ISO8601 format (date portion only), for range mode, '/' is used for separate start/end dates.
       */
      function value() {
        return this._value;
      }
    }, {
      kind: "set",
      key: "value",
      value: function value(_value) {
        const {
          _value: oldValue
        } = this;
        this._value = _value;
        this.requestUpdate('value', oldValue);
      }
    }, {
      kind: "method",
      key: "connectedCallback",
      value: function connectedCallback() {
        _get(_getPrototypeOf(BXDatePicker.prototype), "connectedCallback", this).call(this);

        this._instantiateDatePicker();
      }
    }, {
      kind: "method",
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        this._releaseDatePicker();

        _get(_getPrototypeOf(BXDatePicker.prototype), "disconnectedCallback", this).call(this);
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProperties) {
        const {
          calendar,
          disabled,
          open
        } = this;
        const {
          selectorInputFrom,
          selectorInputTo
        } = this.constructor;
        const inputFrom = this.querySelector(selectorInputFrom);
        const inputTo = this.querySelector(selectorInputTo);

        if (calendar && changedProperties.has('dateFormat')) {
          const {
            dateFormat
          } = this;
          calendar.set({
            dateFormat
          });
        }

        if (changedProperties.has('enabledRange')) {
          const {
            enabledRange
          } = this;
          const dates = enabledRange.split('/').map(item => !item ? undefined : parseISODateString(item)); // Allows empty start/end

          if (dates.some(item => Boolean(item && isNaN(Number(item))))) {
            // Allows empty start/end
            throw new Error(`Wrong date format found in \`enabledRange\` property: ${enabledRange}`);
          }

          const [minDate, maxDate] = dates;

          if (minDate && maxDate && minDate > maxDate) {
            throw new Error(`In \`enabledRange\` property, the end date shouldn't be smaller than the start date. You have: ${enabledRange}`);
          }

          if (calendar) {
            calendar.set({
              minDate,
              maxDate
            });
          }
        }

        if (changedProperties.has('open') && calendar) {
          if (open) {
            calendar.open();
          } else {
            calendar.close();
          }
        }

        if (changedProperties.has('disabled')) {
          [inputFrom, inputTo].forEach(input => {
            if (input) {
              input.disabled = disabled;
            }
          });
        }

        if (changedProperties.has('value')) {
          const {
            value
          } = this;
          const dates = value.split('/').filter(Boolean).map(item => parseISODateString(item));

          if (dates.some(item => isNaN(Number(item)))) {
            throw new Error(`Wrong date format found in \`value\` property: ${value}`);
          }

          const [startDate, endDate] = dates;

          if (startDate && endDate && startDate > endDate) {
            throw new Error(`In \`value\` property, the end date shouldn't be smaller than the start date. You have: ${value}`);
          }

          if (calendar) {
            calendar.setDate(dates);
            [inputFrom, inputTo].forEach((input, i) => {
              if (input) {
                input.value = !dates[i] ? '' : calendar.formatDate(new Date(dates[i]), calendar.config.dateFormat);
              }
            });
          }
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const {
          _handleSlotChange: handleSlotChange
        } = this;
        return html(_t || (_t = _` <a class="${0}--visually-hidden" href="javascript:void 0" role="navigation"></a> <slot @slotchange="${0}"></slot> <div id="floating-menu-container"></div> <a class="${0}--visually-hidden" href="javascript:void 0" role="navigation"></a> `), prefix, handleSlotChange, prefix);
      }
      /**
       * The CSS selector for Flatpickr's month/year portion.
       */

    }, {
      kind: "field",
      static: true,
      key: "_selectorFlatpickrMonthYearContainer",

      value() {
        return '.flatpickr-current-month';
      }

    }, {
      kind: "field",
      static: true,
      key: "_selectorFlatpickrYearContainer",

      value() {
        return '.numInputWrapper';
      }

    }, {
      kind: "field",
      static: true,
      key: "_selectorFlatpickrCurrentMonth",

      value() {
        return '.cur-month';
      }

    }, {
      kind: "field",
      static: true,
      key: "_selectorFlatpickrMonth",

      value() {
        return '.flatpickr-month';
      }

    }, {
      kind: "field",
      static: true,
      key: "_selectorFlatpickrWeekdays",

      value() {
        return '.flatpickr-weekdays';
      }

    }, {
      kind: "field",
      static: true,
      key: "_selectorFlatpickrDays",

      value() {
        return '.flatpickr-days';
      }

    }, {
      kind: "field",
      static: true,
      key: "_selectorFlatpickrWeekday",

      value() {
        return '.flatpickr-weekday';
      }

    }, {
      kind: "field",
      static: true,
      key: "_selectorFlatpickrDay",

      value() {
        return '.flatpickr-day';
      }

    }, {
      kind: "field",
      static: true,
      key: "_classFlatpickrCurrentMonth",

      value() {
        return 'cur-month';
      }

    }, {
      kind: "field",
      static: true,
      key: "_classFlatpickrToday",

      value() {
        return 'today';
      }

    }, {
      kind: "get",
      static: true,
      key: "classCalendarContainer",
      value:
      /**
       * The CSS selector for Flatpickr's year portion.
       */

      /**
       * The CSS selector for the inner element of Flatpickr's month portion.
       */

      /**
       * The CSS selector for Flatpickr's month navigator.
       */

      /**
       * The CSS selector for Flatpickr's container of the weekdays.
       */

      /**
       * The CSS selector for Flatpickr's container of the days.
       */

      /**
       * The CSS selector applied to Flatpickr's each weekdays.
       */

      /**
       * The CSS selector applied to Flatpickr's each days.
       */

      /**
       * The CSS class for the inner element of Flatpickr's month portion.
       */

      /**
       * The CSS class applied to Flatpickr's "today" highlight.
       */

      /**
       * The CSS class for the calendar dropdown.
       */
      function classCalendarContainer() {
        return `${prefix}--date-picker__calendar`;
      }
      /**
       * The CSS class for the month navigator.
       */

    }, {
      kind: "get",
      static: true,
      key: "classMonth",
      value: function classMonth() {
        return `${prefix}--date-picker__month`;
      }
      /**
       * The CSS class for the container of the weekdays.
       */

    }, {
      kind: "get",
      static: true,
      key: "classWeekdays",
      value: function classWeekdays() {
        return `${prefix}--date-picker__weekdays`;
      }
      /**
       * The CSS class for the container of the days.
       */

    }, {
      kind: "get",
      static: true,
      key: "classDays",
      value: function classDays() {
        return `${prefix}--date-picker__days`;
      }
      /**
       * The CSS class applied to each weekdays.
       */

    }, {
      kind: "get",
      static: true,
      key: "classWeekday",
      value: function classWeekday() {
        return `${prefix}--date-picker__weekday`;
      }
      /**
       * The CSS class applied to each days.
       */

    }, {
      kind: "get",
      static: true,
      key: "classDay",
      value: function classDay() {
        return `${prefix}--date-picker__day`;
      }
      /**
       * The CSS class applied to the "today" highlight if there are any dates selected.
       */

    }, {
      kind: "field",
      static: true,
      key: "classNoBorder",

      value() {
        return 'no-border';
      }

    }, {
      kind: "field",
      static: true,
      key: "defaultDateFormat",

      value() {
        return 'm/d/Y';
      }

    }, {
      kind: "field",
      static: true,
      key: "defaultLocale",

      value() {
        return flatpickr.l10ns.default;
      }

    }, {
      kind: "get",
      static: true,
      key: "selectorInputFrom",
      value:
      /**
       * The default date format.
       */

      /**
       * The default localization data.
       */

      /**
       * A selector that will return the `<input>` to enter starting date.
       */
      function selectorInputFrom() {
        return `${prefix}-date-picker-input[kind="single"],${prefix}-date-picker-input[kind="from"]`;
      }
      /**
       * A selector that will return the `<input>` to enter end date.
       */

    }, {
      kind: "get",
      static: true,
      key: "selectorInputTo",
      value: function selectorInputTo() {
        return `${prefix}-date-picker-input[kind="to"]`;
      }
      /**
       * The name of the custom event when Flatpickr throws an error.
       */

    }, {
      kind: "get",
      static: true,
      key: "eventFlatpickrError",
      value: function eventFlatpickrError() {
        return `${prefix}-date-picker-flatpickr-error`;
      }
      /**
       * The name of the custom event fired on this element when Flatpickr updates its value.
       */

    }, {
      kind: "get",
      static: true,
      key: "eventChange",
      value: function eventChange() {
        return `${prefix}-date-picker-changed`;
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
}, HostListenerMixin(FormMixin(LitElement)));

export default BXDatePicker;
//# sourceMappingURL=date-picker.js.map

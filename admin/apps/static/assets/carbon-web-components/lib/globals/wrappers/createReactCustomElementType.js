/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.objectSerializer = exports.numberSerializer = exports.default = exports.booleanSerializer = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _react = require("react");

var _on = _interopRequireDefault(require("carbon-components/umd/globals/js/misc/on"));

const _excluded = ["children", "innerRef"];

/**
 * @param refs List of React refs to merge.
 * @returns Merged React ref.
 */
const mergeRefs = (...refs) => el => {
  refs.forEach(ref => {
    // https://github.com/facebook/react/issues/13029#issuecomment-410002316
    if (typeof ref === 'function') {
      ref(el);
    } else if (Object(ref) === ref) {
      // `React.Ref.current` is read-only for regular use case, but we update it here
      ref.current = el;
    }
  });
};
/**
 * @param prop A prop value.
 * @param descriptor A React prop descriptor.
 * @returns The corresponding attribute value for the given prop value.
 */


const convertProp = (prop, descriptor) => {
  if (!descriptor) {
    return prop;
  }

  const {
    event,
    serialize
  } = descriptor;

  if (event) {
    // Events are not set as props, we use DOM `addEventListener()` instead
    return undefined;
  }

  return !serialize ? prop : serialize(prop);
};
/**
 * @param props A set of React props.
 * @param descriptor A set of React prop desciptor.
 * @returns The set of React props to set to a custom element, corresponding to the given React props.
 */


const convertProps = (props, descriptor) => Object.keys(props).reduce((acc, propName) => {
  const {
    [propName]: descriptorItem
  } = descriptor;
  const converted = convertProp(props[propName], descriptorItem);
  const {
    attribute
  } = descriptorItem !== null && descriptorItem !== void 0 ? descriptorItem : {};
  return attribute === false ? acc : (0, _objectSpread2.default)((0, _objectSpread2.default)({}, acc), {}, {
    [attribute || propName]: converted
  });
}, {});
/**
 * Attaches listeners of custom events, to a custom element.
 * @param elem The custom element.
 * @param descriptor An object, keyed by prop name, of data that may have custom event names.
 * @param callback A callback function that runs as the custom events fire.
 * @returns A handle that allows to release all event listeners attached.
 */


const attachEventListeners = (elem, descriptor, callback) => {
  const handles = new Set();
  Object.keys(descriptor).forEach(propName => {
    if (descriptor[propName]) {
      const {
        event: eventDescriptor
      } = descriptor[propName];
      const name = Object(eventDescriptor) !== eventDescriptor ? eventDescriptor : eventDescriptor.name;
      const options = Object(eventDescriptor) !== eventDescriptor ? undefined : eventDescriptor.options;

      if (name) {
        handles.add((0, _on.default)(elem, name, event => {
          callback(propName, event);
        }, options));
      }
    }
  });
  return {
    release() {
      handles.forEach(handle => {
        handle.release();
        handles.delete(handle);
      });
      return null;
    }

  };
};
/**
 * @param name The tag name of the custom element.
 * @param descriptor A descriptor for a set of React props for attributes of a custom element.
 * @returns A React component working as a wrapper for the given custom element.
 * @example
 * import { render } from 'react-dom';
 * import createCustomElementType, { booleanSerializer } from '/path/to/createCustomElementType';
 *
 * const BXDropdown = createCustomElementType('bx-dropdown', {
 *   disabled: {
 *     // Sets `disabled` attribute when the React prop value is truthy, unsets otherwise
 *     serialize: booleanSerializer,
 *   },
 *   helperText: {
 *     // Maps `helperText` React prop to `helper-text` attribute
 *     attribute: 'helper-text',
 *   },
 *   onBeforeSelect: {
 *     // Sets `onBeforeSelect` React prop value as a listener of `bx-dropdown-beingselected` custom event
 *     event: 'bx-dropdown-beingselected',
 *   },
 * });
 *
 * render(
 *   (
 *     <BXDropdown
 *       disabled={true}
 *       helperText="some-helper-text"
 *       onBeforeSelect={event => { console.log('bx-dropdown-beingselected is fired!', event); }}>
 *       <bx-dropdown-item value="all">Option 1</bx-dropdown-item>
 *       <bx-dropdown-item value="cloudFoundry">Option 2</bx-dropdown-item>
 *       <bx-dropdown-item value="staging">Option 3</bx-dropdown-item>
 *     </BXDropdown>
 *   )
 *   document.body
 * );
 */


const createReactCustomElementType = (name, descriptor) => {
  /**
   * Array of React prop names that should be mapped to DOM properties instead of attributes.
   */
  const nonAttributeProps = Object.keys(descriptor).filter(propName => {
    const {
      [propName]: descriptorItem
    } = descriptor;
    const {
      attribute
    } = descriptorItem !== null && descriptorItem !== void 0 ? descriptorItem : {};
    return attribute === false;
  });
  /**
   * A React component working as a wrapper for the custom element.
   */

  class CustomElementType extends _react.Component {
    constructor(...args) {
      super(...args);
      (0, _defineProperty2.default)(this, "_elem", null);
      (0, _defineProperty2.default)(this, "_eventListenersHandle", null);
      (0, _defineProperty2.default)(this, "_handleEvent", (propName, event) => {
        const {
          [propName]: listener
        } = this.props;

        if (listener) {
          listener.call(event.currentTarget, event);
        }
      });
      (0, _defineProperty2.default)(this, "_handleElemRef", elem => {
        this._elem = elem;

        if (this._eventListenersHandle) {
          this._eventListenersHandle.release();

          this._eventListenersHandle = null;
        }

        if (elem) {
          this._eventListenersHandle = attachEventListeners(elem, descriptor, this._handleEvent);
        }
      });
    }

    /**
     * Reflects change in React props to DOM properties.
     * @param prevProps The previous props.
     */
    updateProps(prevProps = {}) {
      const {
        props,
        _elem: elem
      } = this;
      nonAttributeProps.forEach(propName => {
        const {
          [propName]: prevValue
        } = prevProps;
        const {
          [propName]: value
        } = props;

        if (prevValue !== value) {
          elem[propName] = value;
        }
      });
    }

    componentDidMount() {
      this.updateProps();
    }

    componentDidUpdate(prevProps) {
      this.updateProps(prevProps);
    }

    render() {
      const _this$props = this.props,
            {
        children,
        innerRef
      } = _this$props,
            props = (0, _objectWithoutProperties2.default)(_this$props, _excluded);
      const mergedRef = mergeRefs(innerRef, this._handleElemRef);
      return (0, _react.createElement)(name, (0, _objectSpread2.default)({
        ref: mergedRef
      }, convertProps(props, descriptor)), children);
    }

  }

  return (0, _react.forwardRef)((props, ref) => (0, _react.createElement)(CustomElementType, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
    innerRef: ref
  })));
};
/**
 * @param value A React prop value.
 * @returns Serialized version of React prop value, as a boolean attribute in a custom element.
 */


const booleanSerializer = value => !value ? undefined : '';
/**
 * @param value A React prop value.
 * @returns Serialized version of React prop value, as a number attribute in a custom element.
 */


exports.booleanSerializer = booleanSerializer;

const numberSerializer = value => value == null ? value : String(value);
/**
 * @param value A React prop value.
 * @returns Serialized version of React prop value, as a object attribute in a custom element.
 */


exports.numberSerializer = numberSerializer;

const objectSerializer = value => value == null ? value : JSON.stringify(value);

exports.objectSerializer = objectSerializer;
var _default = createReactCustomElementType;
exports.default = _default;
//# sourceMappingURL=createReactCustomElementType.js.map

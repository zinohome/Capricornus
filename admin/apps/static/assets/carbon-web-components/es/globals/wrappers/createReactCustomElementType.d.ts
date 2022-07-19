/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
/**
 * A descriptor for a React event prop of a custom element.
 */
interface CustomElementEventDescriptor {
    /**
     * The event name.
     */
    name: string;
    /**
     * A boolean to detemine usage of capture mode or the event options.
     */
    options?: boolean | EventListenerOptions;
}
/**
 * A descriptor for a React prop for an attribute of a custom element.
 */
interface CustomElementPropDescriptor {
    /**
     * The attribute name for the prop.
     */
    attribute?: string | false;
    /**
     * The event name (or descriptor) for the prop.
     */
    event?: string | CustomElementEventDescriptor;
    /**
     * A function that takes a property value and returns the corresponding attribute value.
     */
    serialize?: (value: any) => string | void;
}
/**
 * A descriptor for a set of React props for attributes of a custom element.
 */
interface CustomElementPropsDescriptor {
    [propName: string]: CustomElementPropDescriptor;
}
/**
 * React props for the component `createCustomElementType()` generates.
 */
interface CustomElementTypeProps {
    /**
     * Ordinal prop.
     */
    [propName: string]: any;
    /**
     * Child nodes.
     */
    children?: React.ReactNode;
}
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
declare const createReactCustomElementType: (name: string, descriptor: CustomElementPropsDescriptor) => React.ForwardRefExoticComponent<Pick<CustomElementTypeProps, string | number> & React.RefAttributes<HTMLElement>>;
/**
 * @param value A React prop value.
 * @returns Serialized version of React prop value, as a boolean attribute in a custom element.
 */
export declare const booleanSerializer: (value: any) => "" | undefined;
/**
 * @param value A React prop value.
 * @returns Serialized version of React prop value, as a number attribute in a custom element.
 */
export declare const numberSerializer: (value: any) => any;
/**
 * @param value A React prop value.
 * @returns Serialized version of React prop value, as a object attribute in a custom element.
 */
export declare const objectSerializer: (value: any) => any;
export default createReactCustomElementType;

//# sourceMappingURL=createReactCustomElementType.d.ts.map

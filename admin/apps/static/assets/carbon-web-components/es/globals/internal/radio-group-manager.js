import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

/**
 * @license
 *
 * Copyright IBM Corp. 2019
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * The navigation direction.
 */
export let NAVIGATION_DIRECTION;

(function (NAVIGATION_DIRECTION) {
  NAVIGATION_DIRECTION[NAVIGATION_DIRECTION["BACKWARD"] = -1] = "BACKWARD";
  NAVIGATION_DIRECTION[NAVIGATION_DIRECTION["FORWARD"] = 1] = "FORWARD";
})(NAVIGATION_DIRECTION || (NAVIGATION_DIRECTION = {}));

/**
 * An object that manages radio groups in a document.
 * There must be only one instance for one document.
 */
class RadioGroupManager {
  /**
   * Radio groups, keyed by their names.
   */
  constructor(document) {
    _defineProperty(this, "_groups", {});

    this.constructor._instances.set(document, this);
  }
  /**
   * @param radio A radio button.
   * @returns
   *   `true` if the given radio button should be focusable, which is either:
   *   - The radio button is selected
   *   - No radio button is selected and the radio button is first one in the radio group
   */


  shouldBeFocusable(radio) {
    if (radio.checked) {
      return true;
    }

    const {
      name
    } = radio;
    const group = this._groups[name];
    const hasSelectedItemInGroup = group && Array.from(group).some(item => item.checked);

    if (hasSelectedItemInGroup) {
      return false;
    }

    const isFirstInGroup = !group || group.size === 1 || this.getSortedGroup(radio)[0] === radio;
    return isFirstInGroup;
  }
  /**
   * @param radio A radio button.
   * @returns The sorted radio group the given radio button is in.
   */


  getSortedGroup(radio) {
    const group = this._groups[radio.name];
    return group && Array.from(group).sort((lhs, rhs) => {
      const comparisonResult = lhs.compareDocumentPosition(rhs); // eslint-disable-next-line no-bitwise

      if (comparisonResult & Node.DOCUMENT_POSITION_FOLLOWING || comparisonResult & Node.DOCUMENT_POSITION_CONTAINED_BY) {
        return -1;
      } // eslint-disable-next-line no-bitwise


      if (comparisonResult & Node.DOCUMENT_POSITION_PRECEDING || comparisonResult & Node.DOCUMENT_POSITION_CONTAINS) {
        return 1;
      }

      return 0;
    });
  }
  /**
   * Manages a radio button.
   * @param radio The radio button to manage.
   * @returns This object.
   */


  add(radio) {
    const {
      name
    } = radio;

    if (name) {
      const groups = this._groups;

      if (!groups[name]) {
        groups[name] = new Set();
      }

      groups[name].add(radio);
    }

    return this;
  }
  /**
   * Unmanages a radio button.
   * @param radio The radio button to unmanage.
   * @param name The old name of the radio button to unmanage.
   * @returns `true` if `element` was actually managed.
   */


  delete(radio, name = radio.name) {
    const group = this._groups[name];
    return !group ? false : group.delete(radio);
  }
  /**
   * Selects or focuses on a radio button.
   * @param radio The radio button to select.
   */


  select(radio) {
    const group = this._groups[radio.name];

    if (group) {
      // Updates the state of the one being selected up-front to avoid the state of no radio button is selected
      radio.checked = true;
      radio.tabIndex = 0;
      radio.focus();
      group.forEach(item => {
        if (radio !== item) {
          item.checked = false;
          item.tabIndex = -1;
        }
      });
    }
  }
  /**
   * @param radio The currently selected radio button.
   * @param direction The direction to navigate to.
   * @returns The radio button that should be selected next.
   */


  navigate(radio, direction) {
    const sortedGroup = this.getSortedGroup(radio);
    let newIndex = sortedGroup.indexOf(radio) + direction;

    if (newIndex < 0) {
      newIndex = sortedGroup.length - 1;
    } else if (newIndex >= sortedGroup.length) {
      newIndex = 0;
    }

    return sortedGroup[newIndex];
  }
  /**
   * `RadioGroupManager` instances associated with documents.
   */


  /**
   * @param document A document element.
   * @returns The `RadioGroupManager` instance associated with the given document.
   */
  static get(document) {
    const found = this._instances.get(document);

    return found || new RadioGroupManager(document);
  }

}

_defineProperty(RadioGroupManager, "_instances", new WeakMap());

export default RadioGroupManager;
//# sourceMappingURL=radio-group-manager.js.map

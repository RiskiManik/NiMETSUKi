import { useState } from "react";

export default function useArray(defaultValue = []) {
  const [array, setArray] = useState(defaultValue);

  function push(value) {
    setArray((array) => [...array, value]);
  }

  function filter(callback) {
    setArray((array) => array.filter(callback));
  }

  function update(index, newElement) {
    setArray((array) => [
      ...array.slice(0, index),
      newElement,
      ...array.slice(index + 1),
    ]);
  }

  function remove(index) {
    setArray((array) => [
      ...array.slice(0, index),
      ...array.slice(index + 1, array.length - 1),
    ]);
  }

  function clear() {
    setArray([]);
  }

  return {
    array,
    push,
    filter,
    update,
    remove,
    clear,
  };
}

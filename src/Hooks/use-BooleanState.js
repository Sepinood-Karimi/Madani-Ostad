import { useState } from "react";

const useBooleanState = (defaultValue = false) => {
  const [value, setValue] = useState(defaultValue);
  return {
    open: () => setValue(true),
    close: () => setValue(false),
    isOpen: value,
    toggle: () => setValue((value) => !value),
  };
};

export default useBooleanState;

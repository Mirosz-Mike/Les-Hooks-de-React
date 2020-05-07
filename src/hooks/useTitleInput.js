import { useState, useEffect } from "react";

// Custom Hooks
function useTitleInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    document.title = value;
  });

  return [value, setValue];
}

export { useTitleInput };

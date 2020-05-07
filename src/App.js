import React, { useRef } from "react";
import Toggle from "./Toggle";
import { useTitleInput } from "./hooks/useTitleInput";

const App = () => {
  const [name, setName] = useTitleInput("");
  const ref = useRef();

  return (
    <div className="main-wrapper" ref={ref}>
      <h1 onClick={() => ref.current.classList.add("new-fake-class")}>Learn Hooks</h1>
      <Toggle />
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
      </form>

      <button>submit</button>
    </div>
  );
};

export default App;

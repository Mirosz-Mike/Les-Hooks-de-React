import React, { useRef, createContext } from "react";
import Toggle from "./Toggle";
import Counter from "./Counter";
import { useTitleInput } from "./hooks/useTitleInput";

export const UserContext = createContext();

const App = () => {
  const [name, setName] = useTitleInput("");
  const ref = useRef();

  return (
    <UserContext.Provider
      value={{
        user: true,
      }}
    >
      <div className="main-wrapper" ref={ref}>
        <h1 onClick={() => ref.current.classList.add("new-fake-class")}>Learn Hooks</h1>
        <Toggle />
        <Counter />
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
        </form>

        <button>submit</button>
      </div>
    </UserContext.Provider>
  );
};

export default App;

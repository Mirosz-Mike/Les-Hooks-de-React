import React, { useRef, createContext, useMemo } from "react";
import Toggle from "./Toggle";
import Counter from "./Counter";
import { useTitleInput } from "./hooks/useTitleInput";

export const UserContext = createContext();

const App = () => {
  const [name, setName] = useTitleInput("");
  const ref = useRef();

  const reverseWord = (word) => {
    console.log("function called");
    return word.split("").reverse().join("");
  };

  const title = "Learn React";

  // useMemo est un systeme de cache (Memorization) qui permet de se comparer et re-render que si la const ou le state est diférrent
  const titleReversed = useMemo(() => reverseWord(title), [title]);

  return (
    <UserContext.Provider
      value={{
        user: true,
      }}
    >
      <div className="main-wrapper" ref={ref}>
        <h1 onClick={() => ref.current.classList.add("new-fake-class")}>{titleReversed}</h1>
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

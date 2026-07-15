import { useId, useRef } from "react";
import UserList from "./components/UserList";
import PerformanceDemo from "./components/PerformanceDemo";
import { useToggle } from "./hooks/useToggle";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { useDebounce } from "./hooks/useDebounce";

function App() {

  const inputRef = useRef<HTMLInputElement>(null);

  const id = useId();

  const [darkMode, toggleDarkMode] = useToggle();

  const [name, setName] = useLocalStorage("username", "");

  const debouncedName = useDebounce(name, 1000);

  return (
    <div style={{ padding: 20 }}>

      <h1>React Hooks Assignment</h1>

      <button onClick={toggleDarkMode}>
        Toggle Theme
      </button>

      <p>
        Theme : {darkMode ? "Dark" : "Light"}
      </p>

      <label htmlFor={id}>Name</label>

      <br />

      <input
        id={id}
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={() => inputRef.current?.focus()}>
        Focus Input
      </button>

      <p>Saved Name : {name}</p>

      <p>Debounced : {debouncedName}</p>

      <hr />

      <UserList />

      <hr />

      <PerformanceDemo />

    </div>
  );
}

export default App
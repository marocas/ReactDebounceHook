import { useEffect, useState } from "react";
import { useDebounce } from "./hooks";
import "./styles.css";

export default function App() {
  const [text, setText] = useState("Hello");
  const value = useDebounce(text, 250);
  const [resize, setResize] = useState(window.innerWidth);
  const dbResize = useDebounce(resize, 250);

  useEffect(() => {
    window.addEventListener("resize", () => setResize(window.innerWidth));

    return () => window.removeEventListener("resize", () => setResize);
  }, [dbResize]);

  return (
    <div className="App">
      <input
        type="text"
        defaultValue={text}
        onChange={(evt) => setText(evt.currentTarget.value)}
      />
      <p>Actual value: {text}</p>
      <p>Debounce value: {value}</p>

      <h4>window resize</h4>
      <p>Actual resize: {resize}</p>
      <p>Debounce resize: {dbResize}</p>
    </div>
  );
}

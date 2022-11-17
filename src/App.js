import "./styles.css";
import { useState, useEffect, useLayoutEffect } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("useEffect");
  });
  useLayoutEffect(() => {
    console.log("useLayoutEffect");
  });
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

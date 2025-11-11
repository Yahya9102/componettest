import { useState } from "react";
import counter from "./helloFunctions";



export function Hello() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hello, world!</h1>
      <button onClick={() => setCount(counter(count))}>Click</button>
      <p>{count}</p>
    </>
  );
}

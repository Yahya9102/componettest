import { useState } from 'react';

function ClickCounter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Antal klick: {count}</p>
      <button onClick={() => setCount(count + 1)}>Klicka</button>
      {count >= 5 && <p>Bra jobbat!</p>}
    </div>
  );
}

export default ClickCounter;



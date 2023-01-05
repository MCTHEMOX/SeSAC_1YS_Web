import React, { useState } from 'react';

export default function Condition() {
  const [condition, setCondition] = useState(true);

  return (
    <div className="App">
      <button onClick={() => setCondition(!condition)}>컨디션변경</button>
      <br />
      <span>{condition ? '따봉' : '안따봉'}</span>
    </div>
  );
}

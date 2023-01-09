import React, { useState } from 'react';

export default function Test() {
  const [strState, setStrState] = useState('init');
  return (
    <div className="App">
      <button onClick={() => setStrState(strState + '+')}>반복!</button> <br />
      <span>{strState}</span>
    </div>
  );
}

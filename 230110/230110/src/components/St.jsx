import React, { useState } from 'react';

export default function St() {
  const [strState, setStrState] = useState(0);

    function Increase(){
        return Math.floor(strState+1);
    }

    function Decrease(){
        return Math.floor(strState-2);
    }
  return (
    <div className="App">
      <button onClick={() => setStrState(Increase())}>+1</button> <br />
      <button onClick={() => setStrState(Decrease())}>-2</button> <br />
      <span>{strState}</span>
    </div>
  );
}

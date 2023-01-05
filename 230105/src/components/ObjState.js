import React, { useState } from 'react';

export default function ObjState() {
  const [state, setState] = useState({ teacher: '현목' });
  console.log(state);

  return (
    <div>
      <button
        onClick={() => {
          //   state.teacher = 'mok';
          //   setState(state);
          //   setState({ teacher: 'mox' });

          state.teacher = 'mox';
          const copyObj = { ...state };

          console.log(state);
        }}
      >
        변경
      </button>
      <br />
      <span>{state.teacher}</span>
    </div>
  );
}

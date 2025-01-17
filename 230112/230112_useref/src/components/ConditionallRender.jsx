import React from 'react';
import { useState } from 'react';
import Item from './Item';

export default function ConditionallRender() {
  const [condition, setCondition] = useState('보여주기');

  // const onChange = () => {
  //     condition === '보여주기' ? setCondition('감추기') : setCondition('보여주기');
  // }
  function onChange() {
    condition === '보여주기'
      ? setCondition('감추기')
      : setCondition('보여주기');
  }

  return (
    <div className="App">
      {condition === '감추기' && <Item />}
      <button onClick={onChange}>{condition}</button>
    </div>
  );
}

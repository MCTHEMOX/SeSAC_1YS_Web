import React from 'react'
import { useState } from 'react'
import PracticeOne from './PracticeOne';
import PracticeTwo from './PracticeTwo';

export default function ExConditional() {
    const [condition,setCondition]=useState('1');

    const onChange = ()=> {
        condition === '1' ? setCondition('2') : setCondition('1');
    };

  return (
    <div>
        {condition === '1' ? <PracticeOne text={condition} /> : <PracticeTwo text={condition}/> }
        <button onClick={onChange}>{condition}</button>
    </div>
  )
}

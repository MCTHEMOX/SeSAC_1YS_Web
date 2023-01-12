import React from 'react'
import { useState } from 'react';
import { useRef } from 'react';

export default function Quiz() {

    const firstRandomNum = Math.floor(Math.random()*10);
    const secondRandomNum = Math.floor(Math.random()*10);
    const arithmeticArr = ['+','-','x'];
    const arithmetic = Math.floor(Math.random()*2);
    console.log(arithmetic);

    let answer = 0;
    if (arithmetic === 0) {
        answer = firstRandomNum + secondRandomNum
    }
    else if (arithmetic === 1) {
        answer = firstRandomNum - secondRandomNum
    }
    else {
        answer = firstRandomNum * secondRandomNum
    }
  
    const answerInput = useRef();
    const [again, setAgain] = useState(false);
  
    const checkAnswer = () => {
        if (answer === Number(answerInput.current.value)) {
            alert('정답');
            answerInput.current.value = '';
            answerInput.current.focus();
            setAgain(!again);
        }
        else {
            alert('오답');
            answerInput.current.value = '';
            answerInput.current.focus();
        }
    }

  return <div>
    <h1>{firstRandomNum} {arithmeticArr[arithmetic]} {secondRandomNum}</h1>
    <input ref={answerInput}/>
    <button onClick={checkAnswer}>제출</button>
    </div>
}

import React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

export default function TestUseEffect() {
  const [count, setCount] = useState(0);
  const onButtonClick = () => {
    console.log('버튼클릭');
    setCount(count + 1);
  };

  const [text, setText] = useState('입력하세요');

  const inputValue = useRef();

  const onInputChange = () => {
    console.log('키 입력');
    setText(inputValue.current.value);
  };

  useEffect(() => {
    console.log('랜더링할때마다 실행되는 useEffect');
  });

  useEffect(() => {
    console.log('버튼클릭시 실행되는 useEffect');
  }, [count]);

  useEffect(() => {
    console.log('인풋변경시 실행되는 useEffect');
  }, [text]);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={onButtonClick}>버튼클릭</button>
      <br></br>
      <br></br>
      <h1>{text}</h1>
      <input ref={inputValue} onChange={onInputChange}></input>
    </>
  );
}

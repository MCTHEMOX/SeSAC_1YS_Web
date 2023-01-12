import React from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react'

export default function TestUseEffect() {
    const[count,setCount]= useState(0);

    const[text,setText] = useState('입력하세용');
    const inputValue = useRef();

    function onButtonClick() {
        console.log('버튼클릭');
        setCount(count+1);
    }

    const onInputChange = () => {
        console.log('키입력');
        setText(inputValue.current.value);
    }

    useEffect(() => {
        console.log("🎨 렌더링 할 때마다 실행되는 useEffect");
        })

    useEffect(() => {
        console.log("🖱️ 버튼 클릭 시에만 실행되는 useEffect");
        }, [count])

    useEffect(() => {
        console.log("⌨ 키 입력 시에만 실행되는 useEffect");
        }, [text])


  return (
    <div>
        <h1>{count}</h1>
        <button onClick={onButtonClick}>+1 버튼</button>
        <br/>
        <h1>{text}</h1>
        <input ref={inputValue} onChange={onInputChange}/>
    </div>
  )
}

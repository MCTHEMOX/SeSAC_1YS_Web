import React from 'react'
import { useRef } from 'react'

export default function RefDOM() {
    const orangeEl = useRef();
    const skyblueEl = useRef();
    const inputEl = useRef();

    const adjustCSS = () => {
        orangeEl.current.style.backgroundColor = 'orange';
        skyblueEl.current.style.backgroundColor = 'skyblue';
    };

    const clearInput = () => {
        inputEl.current.value =''; //빈 문자열로 만들기
    }

    const clearCSS = () => {
        orangeEl.current.style.backgroundColor = '';
        skyblueEl.current.style.backgroundColor = '';
    };

  return (
    <div>
        <h1 ref={orangeEl}>오렌지</h1>
        <h1 ref={skyblueEl}>블루</h1>
        <input ref={inputEl}/>
        <br/>
        <button onClick={adjustCSS}>css적용</button>
        <button onClick={clearCSS}>css제거</button>
        <button onClick={clearInput}>초기화</button>
    </div>
  )
}

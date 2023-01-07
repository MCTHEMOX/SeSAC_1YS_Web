import React from 'react'
import { useState } from 'react'

export default function ChangeObj(props) {   //프롭스받아옴
  
    const [index, setIndex] = useState(0);
    //index라는 state값이 0번째
  
    const obj = props.objArr[index];
    function changeProfile() {
        if (index === props.objArr.length - 1) {
            setIndex(0);
        }  else {
            setIndex(index + 1);
        }
    }


    return (
    <div>
        <h1>이름:{obj.name}</h1>
        <h1>나이:{obj.age}</h1>
        <h1>별명:{obj.nickName}</h1>
        <button onClick={changeProfile}>프로필변경</button>
    </div>
  )
}

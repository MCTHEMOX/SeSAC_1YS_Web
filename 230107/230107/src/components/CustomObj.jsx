import React from 'react'

export default function CustomObj({name,age,nickName}) {
  return (
    <div>
        <p>이름: {name}</p>
        <p>나이: {age}</p>
        <p>별명: {nickName}</p>
    </div>
  )
}

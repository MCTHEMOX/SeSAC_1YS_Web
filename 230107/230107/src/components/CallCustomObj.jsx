import React from 'react'
import CustomObj from './CustomObj'

export default function CallCustomObj() {
    const pororoObj = [
      {
      name: "뽀로로",
      age: "5",
      nickName: "사고뭉치",
      },
      {
      name: "루피",
      age: "4",
      nickName: "공주님",
      },
      {
      name: "크롱이",
      age: "5",
      nickName: "장난꾸러기",
    },
  ];
  return (
    <div>
       {pororoObj.map((el,index)=>{
            return <CustomObj name={el.name} age={el.age} nickName={el.nickName} key={index}/>
        })}
    </div>
  )
}

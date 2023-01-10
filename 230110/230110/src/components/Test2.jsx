import React from 'react'
import logo from "./a.jpg";

export default function Test2() {
    const style = {color:'orange', fontSize:'40px', marginTop:'20'}

  return (
    <div style={style}>
        <h2>안녕하세요</h2>
        
        <img src={logo} alt="img" />
    </div>
  )
}

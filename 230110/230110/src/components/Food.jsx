import React from 'react'
import logo from "./maple.jpg";

export default function Food({title, author, price, type}) {
   
  return (
    <div className='maple'>
        <img className='mimg' src={logo}/>
        <br/>
        <div className='mapletext'>
        <h2>{title}</h2>
        
        <br/>
        <br/>
        저자: {author}
        <br/>
        판매가: {price}
        <br/>
        구분: {type}
        </div>

    </div>
  )
}

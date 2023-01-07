import React from 'react'

export default function Items2({item,price}) {
  return (
    <div>
        <h1>{item}</h1>
        <p>{price}</p>
        <hr/>
    </div>
  )
}

import React from 'react'

export default function CustomList(props) {
  return (
    <div>
        {props.arr?.map((el) => {
            return <div key={el}>{el}</div>
        })}
    </div>
  )
}

//arr? = arr이란 값이 있으면 뒤에있는 map 실행시킴
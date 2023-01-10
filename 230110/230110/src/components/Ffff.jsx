import React from 'react'

export default function Ffff({text}) {
    
    
  return (
    <div>
       {text}
    </div>
  )
}


Ffff.defaultProps = {
    text: 'App 컴포넌트에서 넘겨준 text props입니다'
}
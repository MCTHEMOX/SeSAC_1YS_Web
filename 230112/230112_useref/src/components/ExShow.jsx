import React from 'react'
import { useState } from 'react'
import PracticeTimer from './PracticeTimer';

export default function ExShow() {
    const [show, setShow] = useState(false);

  return (
    <div>ExShow

    {show && <PracticeTimer/>}
    <button onClick={()=>{setShow(!show)}}>{show ? '숨기기' : '보이기'}</button>

    </div>
  )
}

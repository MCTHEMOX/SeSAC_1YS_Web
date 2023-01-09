import React from 'react'



export default function MainHeader( props ) {
    // export default function MainHeader( props ) {
    // const { text,href,userID } = props;
    // 둘 다 같음


    const obj = {
        str : 'test',
        num : 10
    }

    const {str, num} = obj
    console.log(obj);
    console.log(str);
    console.log(num);

    
  return (
    <div>
    <h1>{props.userID}님 반갑하이</h1>
    <a href={props.href}>{props.text}</a>
    </div>
  )
}

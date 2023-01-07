import React from 'react'



export default function MainHeader( {text, href, userID}) {
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
    <h1>{userID}님 반갑하이</h1>
    <a href={href}>{text}</a>
    </div>
  )
}

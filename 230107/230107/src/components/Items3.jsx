import React from 'react'
import Items2 from './Items2';
export default function Items3() {
    const itemss = [
        {
            item: 'ps5',
            price: '685,000원',
        },
        {
            item: '에어프라이어',
            price: '50,000원',
        },
        {
            item: '사세 치킨윙',
            price:' 11,500원',
        },
    ];
  
  return (
    <div>
        {itemss.map((el,index)=>{
            return <Items2 item={el.item} price={el.price} key={index}/>
        })}
    </div>
  )
}

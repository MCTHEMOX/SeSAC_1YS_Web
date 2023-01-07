import React from 'react'
import ListChild from './ListChild'
import Modal from './Modal'

export default function List() {
  const dataArr = [
    {
      title:'리액트 공부하기ㅣmap',
      content:'state 활용법 익히기'
    },
    {
      title:"코테문제풀기ㅣㅣmap",
      content:"0level풀기"
    }
  ]

  return (
    <div>
        {/* <h1>오늘 해야 할 일</h1>
        <hr/>
        <Modal />
        <ListChild title="리액트공부" content="스테이트공부하기"/>
        <ListChild title="코테공부" content="lv0정복"/>
        <Modal /> */}
        {/* <ListChild title={dataArr[0].title} content={dataArr[0].content}/>
        <ListChild title={dataArr[1].title} content={dataArr[1].content}/> */}

        {/* {dataArr.map((el,index) => {
          return <ListChild title={el.title} content={el.content} key={index}/>
        })} */}

        {dataArr.map((el,index)=>{
          return (
            <div key={index}>
              <h2>{el.title}</h2>
              <p>{el.content}</p>
              <hr/>
            </div>
          )
        })}

    </div>
  )
}

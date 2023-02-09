import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Test() {
  const weight = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <>
      <h1>숫자 {weight}</h1>
      <button
        onClick={() => {
          dispatch({ type: '증가' });
        }}
      >
        증가
      </button>
      <button
        onClick={() => {
          dispatch({ type: '감소' });
        }}
      >
        감소
      </button>
    </>
  );
}

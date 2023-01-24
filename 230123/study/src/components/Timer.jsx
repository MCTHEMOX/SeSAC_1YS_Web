import React from 'react';
import { useEffect } from 'react';

export default function Timer() {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('타이머 실행중');
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return <div>타이머 실행중~</div>;
}

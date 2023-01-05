// import logo from './logo.svg';
import { useState } from 'react'; //useState라는 훅을 가져온다
import './App.css';
import ArrState from './components/ArrState';
import ClassState from './components/ClassState';
import ObjState from './components/ObjState';
import StateAndVariable from './components/StateAndVariable';

function App() {
  const [num, setNum] = useState(1);
  function add() {
    return Math.floor(num + 1);
  }

  const [condition, setCondition] = useState(true);
  function face() {
    return;
  }

  return (
    <div className="App">
      <button onClick={() => setNum(add())}>
        <span>{num > 10 ? '따봉' : '안따봉'}</span>
      </button>
      <span>{num}</span>

      <ClassState />

      {/* <StateAndVariable /> */}
      <ArrState />
      <ObjState />
    </div>
  );
}

export default App;

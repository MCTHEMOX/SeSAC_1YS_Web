import { useState } from 'react';
import Star from './components/Star';
import TestUseEffect from './components/TestUseEffect';
import Timer from './components/Timer';
import HelloBorder from './components/HelloBorder';
import Profile from './components/Profile';
import Board from './components/Board';
import { Route, Routes, Link } from 'react-router-dom';

function App() {
  const [show, setShow] = useState(false);

  return (
    <>
      {/* TestUseEffect
      <TestUseEffect />
      <hr></hr>
      Timer
      {show && <Timer />}
      <button onClick={() => setShow(!show)}>버튼</button>
      <hr />
      <Star />
      <hr />
      <HelloBorder color="blue">
        <h1>색이 바뀐다</h1>
        <span>으어어</span>
      </HelloBorder>
      <hr /> */}
      <nav>
        <ul>
          <li>
            <Link to="/"> 홈페이지로 이동</Link>
          </li>
          <li>
            <Link to="/profile">프로필 페이지 이동</Link>
          </li>
          <li>
            <Link to="/board">게시판 페이지 이동</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/board" element={<Board />} />
      </Routes>
    </>
  );
}

export default App;

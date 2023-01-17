import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Board from './components/Board';
import BoardDetail from './components/BoardDetail';
import FancyBorder from './components/FancyBorder';
import Header from './components/Header';
import Image from './components/Image';
import InlineCss from './components/InlineCss';
import NotFound from './components/NotFound';
import Profile from './components/Profile';
import TestCss from './components/TestCss';
import TestStyled from './components/TestStyled';
import UseEffectFetch from './components/UseEffectFetch';

function App() {
  return (
    <div className="App">
      {/* <UseEffectFetch />
      <hr />
      <InlineCss />
      <hr />
      <TestCss />
      <hr /> */}
      {/* <TestStyled />
      <Image /> */}
      {/* <FancyBorder color="orange">
        <TestCss />
      </FancyBorder> */}

      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/board" element={<Board />} />
        <Route path="/board/:boardID" element={<BoardDetail />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

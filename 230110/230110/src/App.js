import logo from './logo.svg';
import './App.css';
import Test from './components/Test';
import Test2 from './components/Test2';
import Food from './components/Food';
import St from './components/St';
import Event from './components/Event';
import Ffff from './components/Ffff';
import Event_ex from './components/Event_ex';

function App() {
  return (
    <div>
      {/* <div className="red"></div>
      <div className="orange"></div>
      <div className="yellow"></div>
      <div className="green"></div>
      <div className="blue"></div>
      <div className="navy"></div>
      <div className="purple"></div>
      <Test />
      <Test2 /> */}
      {/* <Food
        title="메이플스토리1권"
        author="몰라"
        price="10만원"
        type="만화책"
      /> */}
      {/* <St /> */}
      {/* <Event /> */}
      {/* <Ffff valid="콘솔띄우기 성공" /> */}
      <Event_ex />
    </div>
  );
}

export default App;

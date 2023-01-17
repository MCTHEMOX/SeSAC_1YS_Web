import logo from './logo.svg';
import './App.css';
import TestRef from './components/TestRef';
import ChangeFocus from './components/ChangeFocus';
import RefDOM from './components/RefDOM';
import ColorInput from './components/ColorInput';
import Quiz from './components/Quiz';
import Comparing from './components/Comparing';
import ReactFragment from './components/ReactFragment';
import ConditionallRender from './components/ConditionallRender';
import ExConditional from './components/ExConditional';
import TestUseEffect from './components/TestUseEffect';
import ShowTimer from './components/ShowTimer';
import ExShow from './components/ExShow';

function App() {
  return (
    <div className="App">
      TestRef
      <TestRef /> <hr />
      ChangeFocus
      <ChangeFocus /> <hr />
      RefDOM
      <RefDOM /> <hr />
      <ColorInput />
      <hr />
      <Quiz />
      <hr />
      <Comparing />
      <hr />
      ReactFragment
      <ReactFragment />
      <hr />
      ConditionallRender
      <ConditionallRender />
      <hr />
      ExConditional
      <ExConditional />
      <hr />
      TestUseEffect
      <TestUseEffect />
      <hr />
      ShowTimer
      <ShowTimer />
      <hr />
      ExShow
      <ExShow />
    </div>
  );
}

export default App;

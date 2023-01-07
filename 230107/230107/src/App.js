import './App.css';
import List from './components/List';
import ListChild from './components/ListChild';
import MainHeader from './components/MainHeader';
import Items from './components/Items';
import Items3 from './components/Items3';
import CallCustomList from './components/CallCustomList';
import CallCustomObj from './components/CallCustomObj';
import Ex5 from './components/Ex5';

function App() {
  return (
    // Modal.jsx   List.jsx
    // <div className="App">
    //   <List />
    // </div>

    <div className="App">
      {/* <MainHeader text="Props,Props,Props,Props" /> */}
      {/* <MainHeader text="go naver" href="https://naver.com" userID="현목" /> */}
      HTML리턴
      <Items />
      컴포넌트
      <Items3 />
      <CallCustomList />
      <hr />
      <CallCustomObj />
      <Ex5 />
    </div>
  );
}

export default App;

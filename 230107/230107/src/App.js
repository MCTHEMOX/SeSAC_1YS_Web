import './App.css';
import List from './components/List';
import MainHeader from './components/MainHeader';
import Items from './components/Items';
import Items3 from './components/Items3';
import CallCustomList from './components/CallCustomList';
import CallCustomObj from './components/CallCustomObj';
import Ex5 from './components/Ex5';
// app - list - listchild
function App() {
  return (
    // Modal.jsx   List.jsx
    // <div className="App">
    //   <List />
    // </div>

    <div className="App">
      {/* <MainHeader text="PProps" /> */}
      <MainHeader text="go naver" href="https://naver.com" userID="현목" />
      <hr />
      HTML리턴
      <Items />
      컴포넌트
      <Items3 />
      <CallCustomList />
      <hr />
      <CallCustomObj />
      <hr />
      실습
      <Ex5 />
      <hr />
      List
      <List />
    </div>
  );
}

export default App;

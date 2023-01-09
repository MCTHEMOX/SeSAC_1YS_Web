import logo from './logo.svg';
import './App.css';

// function App() {

// function printConlose() {
//   console.log('콘솔출력')
// }

// const fontStyle = {backgroundColor: "orange"};
//펑션과 리턴사이 일반 자바스크립트 영역

// const str = "hello react world";
// function amazingJSX() {
//   alert('amazingJSX');

// }
// const test = 'test';

// return (
// <div className="App">
//   <div className={test}></div>
// </div>

// <div className="App">
//   <div style={fontStyle}>asd</div>
// </div>

// <div className="App">
//   <span onClick={ () => { alert('클릭') }}>클릭</span>
// </div>

// <div className="App">
// <span onClick={ () => {
//   let num = 10;
//   num += 5;
//   console.log(num);
// }}>클릭
//   </span>
// </div>

// <div className="App">
//   <span onClick={
//     let num= 10;
//     num += 5;
//     console.log(num);
//   }>클릭</span>
// </div>

//   );
// }

// function App() {

//   const helloStr = 'Hello first exercise';
//   const aaStyle = {backgroundColor: "skyblue", marginTop:'32px' };

//   return (
//     <div className="App">
//       <div style={aaStyle} onClick={ () => { alert('클릭') }}>{helloStr}
//       </div>
//     </div>
//   );
// }
import MainHeader from './components/MainHeader';
import ImgComponent from './components/ImgComponents';
import BtnToNaver from './components/BtnToNaver';

function App() {
  return (
    <div className="App">
      <ImgComponent />
      <BtnToNaver />
    </div>
  );
}

export default App;

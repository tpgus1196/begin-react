// import logo from './logo.svg';
// import './App.css';
  //이 둘은 svg파일 불러오고 css를 적용하는 코드임. 현재 불필요

import React from 'react';
import Hello from './Hello';

function App(){
  return(
    <>
      <Hello />
      <div>안녕!</div>
    </>
  );
}

// function App() {

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;

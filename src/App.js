import logo from './logo.svg';
import './App.css';
//import useState
import React, {useState} from  'react';

function App() {
  // membuat variable state
  const [Count,setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Nama Saya Rudy Eko Prasetya</h1>
        <p>Anda Klik Sebanyak {Count} kali</p>
            <button onClick={() => setCount(Count + 1)}> Click me </button>
      </header>
    </div>
  );
}

export default App;

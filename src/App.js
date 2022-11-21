import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
  const [Count,setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         <h1>Nama Saya Rudy Eko Prasetya</h1>
          <p>
           Selamat Belajar React JS
          </p> 
        <p>Anda Klik Sebanyak {Count} kali</p>
        <button onClick={() => setCount(Count + 1)}>Klik Disini</button>
      </header>
    </div>
  );
}

export default App;

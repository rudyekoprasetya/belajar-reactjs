import logo from './logo.svg';
import './App.css';
//import useState
import React, {useState} from  'react';

function App() {
  // membuat variable state
  // const [Count,setCount] = useState(0);
  const [Angka1,setAngka1] = useState(0);
  const [Angka2,setAngka2] = useState(0);
  let [Hasil,setHasil] = useState(0);
  let Hitung = () => {
    // console.log(Angka1);
    setHasil(Angka1 * Angka2);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <h1>Nama Saya Rudy Eko Prasetya</h1>
        <p>Anda Klik Sebanyak {Count} kali</p>
            <button onClick={() => setCount(Count + 1)}> Click me </button> */}

            <p><input type="text" name="angka1" onChange={e=>{setAngka1(e.target.value)}} /></p>
            <p><input type="text" name="angka2" onChange={e=>{setAngka2(e.target.value)}} /></p>
            <p><button type="button" onClick={Hitung}>HITUNG</button></p>
            <p>Hasil {Hasil}</p>
      </header>
    </div>
  );
}

export default App;

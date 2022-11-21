import logo from './logo.svg';
import './App.css';
// import komponen salam
import Salam from './components/Salam'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Nama Saya Rudy Eko Prasetya</h1>
        <p>
         Selamat Belajar React JS
        </p>
        {/* memanggil komponen salam  */}
        <Salam name="Budi" umur="28"/>
      </header>
    </div>
  );
}

export default App;

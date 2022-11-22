# Modul Praktikum ReactJS 
---

Penyusun **Rudy Eko Prasetya, S.Kom** - Blog [https://rudyekoprasetya.wordpress.com](https://rudyekoprasetya.wordpress.com)


![react-js](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png)

Modul ini disusun sebagai bahan belajar *Membuat Web dengan React JS*. Khususnya yang ingin mendalami mengenai *Frontend Developer* baik siswa SMK/A atau Mahasiswa yang menggunakan library React-JS untuk membangun suatu aplikasi web

Modul ini menggunakan lisensi [Creative Common](https://creativecommons.org/licenses/by-sa/4.0/) dengan atribut NonKomersial-BerbagiRupa dimana Lisensi ini mengizinkan setiap orang untuk menggubah, memperbaiki, dan membuat ciptaan turunan bukan untuk kepentingan komersial, selama mereka mencantumkan kredit dan melisensikan ciptaan turunan dengan syarat yang serupa dengan ciptaan asli.


## Daftar Isi
---

1. [Pengantar](#pengantar)
2. [Persiapan dan Installasi](#persiapan-dan-installasi)
3. [Struktur Folder](#struktur-folder)
4. [Components dan Props](#components-dan-props)
5. [Event Handling](#event-handling)
6. [Routing](#routing) 
7. Integrasi dengan CSS Framework
8. Aplikasi CRUD Tampil Data
9. Aplikasi CRUD Tambah Data
10. Aplikasi CRUD Edit Data
11. Aplikasi CRUD Hapus Data
12. Membuat Auth
13. Tentang Penyusun

## Pengantar
---

Jika kita ingin fokus menjadi seorang frontend developer. Maka salah satu hal yang harus kita kuasai adalah javascript. Nah untuk mempermudah kinerja kita bisa menggunakan suatu framework, seperti saat kita membuat aplikasi dengan bahasa pemrograman PHP, suatu saat kita akan membutuhkan framework seperti CodeIgniter untuk membantu kerja kita.

Ada beberapa framework Javascript yang sangat populer seperti,

- Angular – https://angular.io/
- React – https://reactjs.org/
- Vue – https://vuejs.org/
- Svelte – https://svelte.dev/

Berikut adalah perbandingan Antara Angular, React dan Vue

![perbandingan](https://miro.medium.com/max/700/1*bGIV1WEioFuNVP2Z97uukg.png)

**React JS** adalah library JavaScript yang biasa digunakan saat membangun UI suatu website atau aplikasi web. 

Jadi, React JS bisa dianggap seperti perpustakaan yang berisi berbagai kode JavaScript yang sudah tertulis (*pre-written*). Anda tinggal mengambil kode yang ingin Anda gunakan. Sehingga, ini membuat proses coding menjadi lebih efisien dengan framework JavaScript tersebut.  library ini juga bersifat open source. Artinya, isinya akan terus berkembang karena semua orang bebas memodifikasi kode di dalamnya. React JS menggunakan JSX dan Virtual DOM dalam operasionalnya.

**JSX** adalah extension syntax JavaScript yang memungkinkan Anda untuk memodifikasi *Document Object Model (DOM)* dengan kode bergaya HTML. **DOM** adalah *application programming interface (API)* yang berfungsi untuk mengatur struktur halaman web. Nah, untuk menambah konten dinamis ke dalam halaman web, developer mesti memodifikasi DOM.

Ketika developer mengupdate DOM dengan menggunakan JSX, React JS akan membuat **Virtual DOM**, yaitu salinan dari DOM asli yang ingin diupdate. 

Virtual DOM berguna untuk melihat bagian dari DOM asli yang berubah. Contohnya, ketika pengguna website mengklik tombol like atau comment, tentu yang perlu berubah hanya bagian like dan comment saja.

Ketika menemukan bagian yang perlu diubah, React JS akan mengubah bagian itu saja. Jadi, pengguna tidak perlu reload satu halaman untuk melihat perubahannya.

Dengan kata lain, JSX akan mempermudah Anda untuk menambah konten dinamis. Karena extension ini dapat membantu Anda untuk memasukkan syntax bergaya HTML ke dalam DOM.

## Persiapan dan Installasi
---

Untuk memulai kita membutuhkan Aplikasi dibawah ini
1. XAMPP [download disini](https://www.apachefriends.org/index.html)
2. Code Editor [Sublime-Text](https://www.sublimetext.com/) atau [VSCode](https://code.visualstudio.com/)
3. NodeJS minimal Versi 14 [Download Disini](https://nodejs.org/en/download/)
4. Git [Disini untuk Panduan Git](https://rudyekoprasetya.wordpress.com/category/git/)
5. Web Browser Rekomendasi Chrome [Download Disini](https://www.google.com/intl/id_id/chrome/)
6. POSTMAN rest client [Download disini](https://www.postman.com/downloads/)

Silahkan lakukan installasi semua software diatas. 

Untuk cek apakah node JS sudah terinstall, buka console atau git bash kemudian ketikan perintah

```console
node --version
```
cek pula npm nya, minimal versi 6

```console
npm -v
```

Selanjutnya kita buat project React Baru semisal **coba-app** dengan perintah berikut

```
npx create-react-app coba-app
```

Tunggu beberapa saat (bisa cepat atau lambat tergantung spesifikasi laptop/komputer yang digunakan) sampai proses pembuatan aplikasi React selesai.

Selanjutnya masuk ke folder coba-app dan jalankan aplikasi react dengan perintah

```console
npm start
```

Jika tidak ada error, maka output pada terminal/command prompt akan terlihat seperti di bawah ini.

```console
Compiled successfully!

You can now view coba-app in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.1.4:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

webpack compiled successfully
```

Biasanya akan secara otomatis membuka browser dengan url `http://localhost:3000` dan muncul tampilan berikut.

![welcome](https://i.ibb.co/sF10SLs/Selection-001.jpg)

Untuk menghentikan Server Development ReactJS cukup menekan **CTRL + C** di terminal atau Git bash.

## Struktur Folder
---

Silahkan buka folder coba-app dengan code Editor, maka tampilan struktur folder dan file akan terlihat seperti gambar di bawah ini.

![folder](https://i.ibb.co/hd7jCDs/Selection-002.jpg)

- **node_modules** - adalah folder yang berisi library-library yang dibutuhkan untuk membangun aplikasi web
- **public** - adalah tempat index.html dan asset-asset web yang diperlukan
- **src** - adalah folder kerja tempat semua coding kita
- **.gitignore** - untuk git ignore
- **.package.json** - adalah file json untuk npm
- **README** - adalah file readme atau dokumentasi aplikasi

Silahkan buka file app.js di folder src kemudian edit menjadi seperti dibawah ini

```javascript
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Nama Saya Rudy Eko Prasetya</h1>
        <p>
         Selamat Belajar React JS
        </p>
      </header>
    </div>
  );
}

export default App;
```

Buka browser anda, maka secara otomatis tampilan akan berubah menjadi

![hasil1](https://i.ibb.co/SnqHGfQ/Selection-003.jpg)


## Components dan Props
---

Dalam pembuatan aplikasi web, membagi web menjadi beberapa bagian akan mempermudah kinerja tim, Khususnya saat membangun suatu aplikasi yang cukup kompleks.

**Components** adalah adalah bagian-bagian yang menyusun aplikasi ReactJS. Reactjs bekerja dengan Virtual DOM. Kita harus membuat komponen untuk memberitahu React tentang apa saja yang harus ditampilkan (render) ke Real DOM (HTML).

Silahkan buat folder components didalam folder src sehingga seperti dibawah ini

```console
- src
  | - components
    | - Salam.js
```

Berikut adalah code untuk **Salam.js**

```javascript
function Salam() {
    return (
      <div className="Salam">
        <p>Halo Nama Ini adalah Komponen SALAM</p>
      </div>
    );
  }
  
export default Salam;
```

Bentuk diatas adalah bentuk functional component yang saat ini populer digunakan oleh programmer reactjs.

Untuk memasang komponen tersebut silahkan buka dan edit file **App.js**

```javascript
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
        <Salam />
      </header>
    </div>
  );
}

export default App;
```

Jalankan server development react dengan perintah `npm start` dan amatilah hasilnya.

Komponen disini bersifat *re-usable* artinya kita bisa menggunakan berulang-ulang tanpa menuliskan kode kembali. 

Contoh kita ubah File App.js menjadi dibawah ini

```javascript
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
        <Salam />
        <Salam />
        <Salam />
      </header>
    </div>
  );
}

export default App;
```

**Props** adalah objek khusus yang menyimpan data untuk komponen.  Ini digunakan untuk menyimpan data yang diterima dari luar komponen

Contoh Silahkan Edit File Salam.js yang sudah dibuat sebelumya.

```javascript
function Salam(props) {

    return (
      <div className="Salam">
        <p>Halo {props.name} Salam Kenal</p>
      </div>
    );
  }
  
  export default Salam;
```

Selanjutnya edit file App.js menjadi seperti dibawah ini

```javascript
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
        <Salam name="Budi" />
      </header>
    </div>
  );
}

export default App;
```

Jalankan Server Development dan amatilah hasilnya.

untuk menampilkan data props kita gunakan coding `{props.nama_props}`. Semisal tambahkan properti umur menjadi seperti dibawah ini

```javascript
function Salam(props) {

    return (
      <div className="Salam">
        <p>Halo {props.name} Salam Kenal</p>
        <p>Umur Saya {props.umur} tahun</p>
      </div>
    );
  }
  
export default Salam;
```

Kita edit file App.js nya pula

```javascript
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
```

Kita bisa mengirimkan parameter pada setiap komponen yang dipanggil.

## Event Handling
---

Sebelum itu kita akan belajar mengenai state. State disini adalah sama dengan props, yaitu suatu data yang diolah didalam komponen itu sendiri, sedangkan props berasal dari luar komponen.

Dalam reactJS ada 2 komponen Stateful dan Stateless. **Stateful components** adalah komponen yang menggunakan state. Sedangkan **Stateless Component** adalah komponen yang tidak menggunakan state.

Silahkan edit file **App.js** menjadi seperti dibawah ini

```javascript
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
```

Coba Jalankan Aplikasi Anda dan amatilah hasilnya.

Kita mendeklarasikan sebuah state bernama count, dan memberinya nilai 0. React akan mengingat nilai saat ini di setiap render ulang, dan memberikan nilai terbaru ke fungsi kita. Jika kita ingin melakukan pembaruan nilai Count, kita dapat memanggil `setCount`.

Untuk lebih jelas lagi silahkan Anda buat file didalam folder **src/component** sebagai berikut

dibawah ini adalah file **Hitung.js**

```javascript
import React, {useState} from "react";
import './Hitung.css';

function Hitung() {
    //membuat state
    const [angka1,setangka1] = useState(0);
    const [angka2,setangka2] = useState(0);
    const [hasil,sethasil] = useState(0);

    //fungsi penjumlahan
    const Kali = () => {
      sethasil(angka1*angka2);
    }

    return (
      <div className="Hitung">
        <p className="judul">Program Hitung</p>
        <input type="number" name="angka1" placeholder="Masukan angka" onChange={(e)=> {setangka1(e.target.value)}} />
        <br />
        <input type="number" name="angka2" placeholder="Masukan angka" onChange={(e)=> {setangka2(e.target.value)}} />
        <br />
        <button type="button" onClick={Kali}>HITUNG</button>
        <br />
        <h2>Hasil {hasil}</h2>
      </div>
    );
  }
  
export default Hitung;
```

Selanjutnya kita buat untuk CSS nya, buatlah file **Hitung.css** dengan kode dibawah ini

```css
.Hitung {
    text-align: center;
    background-color:gray;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color:aliceblue;
}

.judul {
    font-weight: bold;
    font-size: larger;
}

input {
    margin: 1em;
    padding: 2px;
    width: 200px;
    height: 2em;
    border-radius: 10px;
    border-color:orange;
}

button {
    width: 150px;
    height: 3em;
    background-color:orange;
    border-radius: 10px;
    font-weight: bold;
    color: white;
}
```

Selanjutnya kita edit file index.js untuk mengarahkan component utama dari App.js ke Hitung.js, berikut adalah kodenya

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App'; di berikan komentar
//import component hitung
import Hitung from './components/Hitung';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> di komentari dan ditambahkan component Hitung*/}
    <Hitung />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```

Jalankan server developmentnya dengan perintah `npm start` maka akan muncul tampilan seperti dibawah ini

![kalkulator](https://i.ibb.co/y4gJ19x/Selection-009.png)


## Routing
---

Dalam web jika ingin berganti halaman satu dan halaman yang lainnya diperlukan suatu proses *routing*. **Routing** sendiri adalah proses pemetaan antara sebuah URL ke dalam sebuah halaman yang terdapat konten / UI (User Interface) sesuai dengan URL yang dituju.

Jika ingin membuat routing membutuhkan library tambahan karena tidak secara langsung tersedia.Diantara library yang sangat familiar adalah **react-router-dom** yang dipakai untuk routing di React JS.

Untuk install library tersebut jalankan perintah dibawah ini pada console di folder `coba-app`

```console
npm i react-router-dom
```
Tunggu sampai proses installasi selesai

Selanjutnya kita akan buat beberapa file atau komponen yang akan diroute oleh library react-router-dom.

Pertama kita buat file baru di folder **components** dengan nama **Home.js** 

```javascript
function Home() {

  return (
    <div className="Home">
        <h1>Ini Adalah komponen Home</h1>
    </div>
  );
}

export default Home;
```

Kemudian kita buat pula untuk komponen atau halaman **Profil.js** dan **Galeri.js** didalam folder **components** masing-masing dibawah ini

```javascript
function Profil() {

  return (
    <div className="Profil">
      <h1>Ini Adalah komponen Profil</h1>
    </div>
  );
}

export default Profil;
```

File **Galeri.js**

```javascript
function Galeri() {

  return (
    <div className="Galeri">
      <h1>Ini Adalah komponen Galeri</h1>
    </div>
  );
}

export default Galeri;
```

Selanjutnya kita buat laman atau komponen **Dashboard.js** atau halaman utama untuk meletakan navigasinya masih didalam folder **components**

```javascript
import React from "react";//import routing library
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

//import komponen untuk laman lain
import Home from "./Home";
import Profil from "./Profil";
import Galeri from "./Galeri";

//import css
import "./Dashboard.css";

function Dashboard() {

  return (
    <Router>
    <div className="Dashboard">
      <div className="header">
          <h2 className="judul">Homepage</h2>
      </div>
      <div className="Menu">
          <ul className="nav">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/profil">Profil</Link></li>
              <li><Link to="/galeri">Galeri</Link></li>
          </ul>
      </div>
      <div className="Content">
          <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/profil" element={<Profil />}/>
              <Route path="/galeri" element={<Galeri />}/>
          </Routes>
      </div>
    </div>
    </Router>
  );
}

export default Dashboard;
```

Kita buat file CSS-nya jua dengan nama **Dashboard.css**

```css
.Dashboard {
    min-height: 100vh;
    background-color: lightgray;
}

.header {
    padding: 20px;
    background-color: aliceblue;
}

.judul {
    font-size: 40px;

    font-weight: bold;
    margin-bottom: 5px;
}

.nav {
    margin-top: auto;
    padding: 10px;
    background-color: lightcoral;
}

.nav li {
    display: inline-block;
    margin-right: 20px;
    padding:5px;
    margin-top: 10px;
}

.nav li a {
    text-decoration: none;
    color: white;
    font-weight: bold;
}

.Content {
    background-color: antiquewhite;
    height: 50vh;
    width: auto;
    padding: 1em;
    margin-left: 2em;
    margin-right: 2em;
    color: black;
}
```

Jangan lupa kita pindahkan komponen utama di file **index.js** ke komponen *Dashboard.js*

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import terlebih dahulu komponennya
import Dashboard from './components/Dashboard';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    // diarahkan ke dashboard
    <Dashboard />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```

Coba jalankan aplikasi react anda maka akan muncul tampilan seperti dibawah ini

![dashboard](https://i.ibb.co/J58xhsP/Selection-010.png)

## Referensi
---

- [https://www.niagahoster.co.id/blog/react-js-adalah/](https://www.niagahoster.co.id/blog/react-js-adalah/)
-[https://www.petanikode.com/reactjs-komponen/](https://www.petanikode.com/reactjs-komponen/)
- [https://afrijaldzuhri.com/belajar-routing-dalam-react/](https://afrijaldzuhri.com/belajar-routing-dalam-react/)

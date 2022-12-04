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
7. [Integrasi dengan CSS Framework](#integrasi-dengan-css-framework)
8. [Membuat Rest Client untuk Public API](#rest-client-untuk-public-api)
9. [Aplikasi CRUD Tampil Data](#aplikasi-crud-tampil-data)
10. [Aplikasi CRUD Tambah Data](#aplikasi-crud-tambah-data)
11. [Aplikasi CRUD Edit Data](#aplikasi-crud-edit-data)
12. [Aplikasi CRUD Hapus Data](#aplikasi-crud-hapus-data)
13. Membuat Auth
14. Tentang Penyusun

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

Coba klik ke laman lain dan amati hasilnya


## Integrasi dengan CSS Framework
---

Kita akan belajar cara mengintergrasikan aplikasi ReactJS kita dengan CSS Bootstrap, khususnya kita akan membuat aplikasi *SPA (Single Page Application)*

**Bootstrap** adalah framework CSS yang mengatur dan mengelola tata letak website. Kalau HTML bertugas untuk menangani konten dan struktur halaman web, CSS menangani tata letaknya. Jadi, kedua struktur ini perlu bekerja sama untuk melakukan tindakan tertentu.

Dengan fungsionalitasnya, Bootstrap membantu para developer menciptakan tampilan yang seragam di sebanyak mungkin halaman sesuai kebutuhan. Hasilnya, mereka pun tidak perlu menghabiskan waktu berjam-jam untuk mengedit secara manual.

Versi yang kita gunakan adalah bootstrap versi 5.2 Dokumentasi bisa merujuk ke [https://getbootstrap.com/docs/5.2/getting-started/introduction/](https://getbootstrap.com/docs/5.2/getting-started/introduction/).

Semisal kita punya layout UI untuk aplikasi web kita sebagai berikut

```console
+----------------------------------------------+
+                 Navbar/Menu                  +
+----------------------------------------------+
+                                              +
+                   Header                     +
+----------------------------------------------+
+                                              +
+                                              +
+                                              +
+                   Content                    +
+                                              +
+                                              +
+                                              +
+----------------------------------------------+
```

Maka langkah pertama adalah kita install terlebih dahulu plugin untuk bootstrap dengan perintah

```console
npm i bootstrap
```

Tunggu sampai proses selesai

Kemudian kita buat komponen-komponen seperti layout diatas, semuanya akan saya masukan dalam folder **src/component/layout**, sehingga strukturnya seperti dibawah ini

```console
src
|- components
    |- layout
        |- WebMain.js
        |- Navbar.js
        |- Header.js
        |- Content.js
```

Berikut adalah coding untuk file **Content.js**

```javascript
function Content() {

  return (
    <div className="Content">
      <h1 className="mt-5">Content Page</h1>
      <div className="row text-start mt-4">
          <div className="col">
              Lorem ipsum, dolor sit amet consectetur, adipisicing elit.
              Nihil, culpa? Beatae distinctio numquam quibusdam corrupti
              quos, facere libero voluptate, hic eum illum sequi
              consectetur, quod reprehenderit odit optio temporibus et!
          </div>
          <div className="col">
              Lorem ipsum, dolor sit amet consectetur, adipisicing elit.
              Nihil, culpa? Beatae distinctio numquam quibusdam corrupti
              quos, facere libero voluptate, hic eum illum sequi
              consectetur, quod reprehenderit odit optio temporibus et!
          </div>
      </div>
    </div>
  );
}
  
export default Content;
```

Selanjutnya kita buat komponen untuk **Header.js**

```javascript
function Header() {
	return (
		<div className="Header">
			<div className=" p-5 bg-dark text-white">
			<h1>Jumbotron Example</h1>
			<p>Lorem ipsum...</p>
			</div>
		</div>
	)
}

export default Header;
```

Kemudian kita buat **NavBar.js**

```javascript
//import untuk React Link
import { Link } from "react-router-dom";
function Navbar() {

    return (
        <div className="Navbar">
            <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="#">React JS</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        <Link className="nav-link" to="/">Features</Link>
                        <Link className="nav-link" to="/">Pricing</Link>
                        <Link className="nav-link" to="/about">About</Link>
                    </div>
                    </div>
                </div>
                </nav>
        </div>
    );
  }
  
export default Navbar;
```

Kemudian kita buat file WebMain.js sebagai laman utamanya

```javascript
import React from "react";
//import routing library
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

//import komponen penyusun lainnya
import Navbar from "./NavBar";
import Content from "./Content";
import Header from "./Header";

function WebMain() {

    return (
      <div className="WebMain">
        <Router>
          <div className="container">
          <Navbar />
          <Header />
          <Routes>
              <Route path="/" element={<Content />}/>
              <Route path="/about" element={<About />}/>
          </Routes>
          </div>
        </Router>
      </div>
    );
  }
  
export default WebMain;
```

Selanjutnya jangan lupa kita import bootstrap pada file **index.js** seperti dibawah ini

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
//import Komponen utama
import WebMain from './components/layout/WebMain'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WebMain />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```

Coba jalankan aplikasi react anda dengan `npm start`,maka akan muncul tampilan seperti ini

![bootstrap](https://i.ibb.co/JzZ4DZY/Selection-011.png)


## Rest Client untuk Public API
---

Kali ini kita akan belajar membuat suatu aplikasi yang memanfaatkan Rest API. Dimana kita akan membuat aplikasi baca berita yang mengambil data dari sebuah public API dari [https://newsapi.org/](https://newsapi.org/). Untuk penjelasan mengenai *Apasih sebenarnya API itu? Apa kegunaannya? Penting gak kita belajar mengenai API?* Silahkan mengunjungi [Membuat REST API dengan PHP](https://rudyekoprasetya.wordpress.com/2020/03/02/rest-api-dengan-php/).

Pertama-tama Silahkan anda bikin akun di [https://newsapi.org/](https://newsapi.org/) kemudian dapatkan API Key untuk mengakses beberapa berita yang akan kita sematkan di aplikasi web kita.

![public api](https://rudyekoprasetya.files.wordpress.com/2021/07/selection_006.jpg?w=722&h=379)

Jika anda sudah login akan mendapatkan API key, simpan di notepad yang nantinya akan kita gunakan 

![public-api2](https://rudyekoprasetya.files.wordpress.com/2021/07/selection_007-1.jpg?w=672&h=311)

Buatlah project react baru dengan perintah

```console
npx create-react-app web-berita
```

Kemudian kita masuk ke folder kerja kita dengan perintah

```console
cd web-berita
```

selanjutnya kita install react-router dan bootstrap

```console
npm i react-router-dom

npm i bootstrap
```

Kita import bootstrap di file **index.js**

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
//import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```

Selanjutnya kita install library Axios. **Axios** adalah sebuah library open source  untuk melakukan request HTTP karena memiliki banyak kelebihan namun dengan penggunaan yang tidak lebih sulit dibanding yang lain. Sama halnya dengan Ajax JQuery dimana proses request akan dijalankan secara asinkron, sehingga nanti membuat laman web yang kita buat tanpa reload.

```console
npm i axios
```

Kita susun terlebih dahulu struktur file untuk komponen aplikasi kita seperti dibawah ini

```console
- src
  |- component
      |- About.js
      |- Home.js
      |- NavBar.js
      |- Sport.js
      |- Technology.js
```

Berikut adalah file **About.js**

```javascript
function About() {
  return (
    <div className="About mt-5">
      <div className="row">
        <div className="col">
          <h2>About</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolorem quas, consequatur minima voluptatum harum unde molestiae similique doloribus consectetur praesentium molestias fuga, incidunt quam tenetur modi quidem in alias. Lorem ipsum dolor sit amet consectetur adipisicing elit. Non libero at sit fugit fugiat beatae animi laboriosam repellat eum maxime quis delectus, vitae in reprehenderit unde, et id, dolor a.</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, ratione voluptas fugiat, consequatur non at porro labore pariatur totam quasi dolorum earum aut impedit eligendi omnis laboriosam est inventore ut.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum totam deserunt inventore reiciendis minus quidem, ducimus adipisci assumenda illum fugiat ut sed dolor dolores, sequi odit! Fugit commodi quae ab! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint consequuntur incidunt quam tempora, neque officia fugiat nesciunt modi illo repudiandae provident ducimus impedit aperiam nisi dicta dignissimos esse, sed unde?</p>
        </div>
      </div>      
      </div>

  );
}

export default About;
```

Dibawah ini adalah file **Home.js**

```javascript
//import useState dan useEffect dan axios
import { useEffect, useState } from "react";
import axios from 'axios';

function Home() {
  const [Berita,setBerita] = useState([]);

  //agar fungsi langsung berjalan saat komponen diakses
  useEffect(() => {
    axios
        .get('https://newsapi.org/v2/top-headlines?country=id&apiKey=_APIKEY_ANDA_')
        .then(response=>{
          console.log(response.data.articles);
          setBerita(response.data.articles);
      });
  },[]);

  return (
    <div className="Home mt-5">
      <div className="row">
        <div className="col">
          <h2>Berita Utama</h2>
        </div>
      </div>
          <div className="row">
            {Berita.map((item) => ( 
              <div className="col m-3">
                <div className="card">
                  <img src={item.urlToImage} className="card-img-top" alt="" style={{width: '20rem'}} />        
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                  </div>
                </div>
            </div>
            ))}
          
        </div>
      </div>

  );
}

export default Home;
```
Coding `useEffect([])` digunakan untuk melakukan autoload pada fungsi yang dijalankan saat komponen dibuka. Diatas fungsi yang dijalankan adalah `axios.get()` dimana kegunaanya adalah untuk memanggil API dari newsapi.org dengan metode GET. Jangan lupa memasukan APIKEY yang sudah didapatkan tadi pada endpoint atau url diatas.

Selanjutnya buatlah komponen **NavBar.js** untuk navigasi aplikasi kita

```javascript
import {Link} from "react-router-dom"

function NavBar () {
  return (
     <div className="Navbar">
            <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="#">Berita Dua</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        <Link className="nav-link" to="/sport">Sport</Link>
                        <Link className="nav-link" to="/technology">Technology</Link>
                        <Link className="nav-link" to="/about">About</Link>
                    </div>
                    </div>
                </div>
                </nav>
        </div>
  );
}

export default NavBar;
```

dibawah ini adalah komponen untuk memuat berita olahraga

```javascript
//import useState dan useEffect dan axios
import { useEffect, useState } from "react";
import axios from 'axios';

function Sport() {
  const [Berita,setBerita] = useState([]);

  useEffect(() => {
    axios
        .get('https://newsapi.org/v2/top-headlines?country=id&category=sport&apiKey=_APIKEY_ANDA_')
        .then(response=>{
          console.log(response.data.articles);
          setBerita(response.data.articles);
      });
  },[]);

  return (
    <div className="Technology mt-5">
      <div className="row">
        <div className="col">
          <h2>Berita Olahraga</h2>
        </div>
      </div>
          <div className="row">
            {Berita.map((item) => ( 
              <div className="col m-3">
                <div className="card">
                  <img src={item.urlToImage} className="card-img-top" alt="" style={{width: '20rem'}} />        
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                  </div>
                </div>
            </div>
            ))}
          
        </div>
      </div>

  );
}

export default Sport;
```

komponen terakhir adalah untuk laman berita teknologi **Technology.js**

```javascript
//import useState dan useEffect dan axios
import { useEffect, useState } from "react";
import axios from 'axios';

function Technology() {
  const [Berita,setBerita] = useState([]);

  useEffect(() => {
    axios
        .get('https://newsapi.org/v2/top-headlines?country=id&category=technology&apiKey=_APIKEY_ANDA_')
        .then(response=>{
          console.log(response.data.articles);
          setBerita(response.data.articles);
      });
  },[]);

  return (
    <div className="Technology mt-5">
      <div className="row">
        <div className="col">
          <h2>Berita Teknologi</h2>
        </div>
      </div>
          <div className="row">
            {Berita.map((item) => ( 
              <div className="col m-3">
                <div className="card">
                  <img src={item.urlToImage} className="card-img-top" alt="" style={{width: '20rem'}} />        
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                  </div>
                </div>
            </div>
            ))}
          
        </div>
      </div>

  );
}

export default Technology;
```

Selanjutnya sesuaikan file **App.js**

```javascript
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

//import semua komponen
import NavBar from './component/NavBar';
import Home from './component/Home';
import About from './component/About';
import Technology from './component/Technology';
import Sport from './component/Sport';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <div className="container">
          <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/technology" element={<Technology />}/>
              <Route path="/sport" element={<Sport />}/>
              <Route path="/about" element={<About />}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
```

Jalankan server development dengan perintah 

```console
npm start
```

Maka akan muncul tampilah seperti ini

![news app](https://rudyekoprasetya.files.wordpress.com/2021/07/selection_009.jpg?w=725&h=437)

Coba cek laman lain dan amatilah hasilnya.


## Aplikasi CRUD Tampil Data
---

Pada bab ini kita akan belajar membuat aplikasi CRUD (*Create, Read, Update, Delete*) dengan menggunakan Rest API private dengan bahasa PHP, untuk keterangan lebih lanjut mengenai pembuatannya, silahkan merujuk ke [https://rudyekoprasetya.wordpress.com/2020/03/02/rest-api-dengan-php/](https://rudyekoprasetya.wordpress.com/2020/03/02/rest-api-dengan-php/)

Untuk mempersingkat waktu silahkan untuk atau clone pada [https://github.com/rudyekoprasetya/BelajarRestAPIPHP](https://github.com/rudyekoprasetya/BelajarRestAPIPHP). 

Setelah download extract dan rename folder tersebut dengan nama **rest-api** dengan struktur folder didalamnya sebagai berikut

```console
rest-api
|- config
    |- koneksi.php
|- hapus_data.php
|- pengurus.sql
|- tambah_data.php
|- tampil_data.php
|- ubah_data.php
```

Kemudian masukan folder tersebut ke folder XAMPP di **htdocs**. buatlah database pengurus dan  Jangan lupa  Import database **pengurus.sql** ke dalam database mysql anda.  Cobalah akses Rest API tersebut dengan Postman

Jika rest server sudah siap, selanjutnya kita buat project react baru dengan perintah

```console
npx create-react-app rest-client
```

Selanjutnya kita install kebutuhan lainnya seperti, react router, bootstrap dan axios

```console
cd rest-client

npm i react-router-dom

npm i bootstrap

npm i axios
```

Selanjutnya kita susun struktur component seperti dibawah ini

```console
|- src
    |- components
        |- NavBar.js
        |- TampilData.js
    |- App.js
    |- index.js 
```

kita load bootstrap di **index.js**

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
//import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```

Kita buat dahulu komponen **NavBar.js**

```javascript
function NavBar () {
  return (
     <div className="Navbar">
            <nav className="navbar navbar-dark bg-primary">
              <div className="container-fluid">
                <span className="navbar-brand mb-0 h1">ReactJS Apps</span>
              </div>
            </nav>
         </div>
  );
}

export default NavBar;
```

Selanjutnya adalah **TampilData.js**

```javascript
import {
  useEffect, useState
} from "react";

//import axios
import axios from 'axios';

function TampilData() {
  //definisikan base URL rest server
  const url = 'http://localhost/rest-api/';

  //untuk menampung data
  const [Pengurus,setPengurus] = useState([]);

  //untuk mengambil data dari rest server
  const viewData = () => {
    axios
      .get(url+'tampil_data.php')
      .then(response => {
        setPengurus(response.data.pengurus);
    });
  }
  
  //agar fungsi langsung berjalan saat komponen di load
  useEffect(() => {
    viewData();
  },[]);

  return (
    <div className="TampilData">
      <div className="row">
        <div className="col">
          <h2>CRUD Pengurus</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <button className="btn btn-success btn-lg" data-bs-toggle="modal" data-bs-target="#tambahModal">Tambah Data</button>
        </div>
        
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nama</th>
              <th scope="col">Alamat</th>
              <th scope="col">Gender</th>
              <th scope="col">Gaji</th>
              <th scope="col">Aksi</th>
            </tr>
          </thead>
          <tbody>
          { Pengurus.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.nama}</td>
              <td>{item.alamat}</td>
              <td>{item.gender}</td>
              <td>{item.gaji}</td>
              <td>
                <button className="btn btn-small btn-warning">Edit</button> |
                <button className="btn btn-small btn-danger">Delete</button>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
     
    </div>

  );
}

export default TampilData;
```
pertama kita import axios untuk mengelola rest api, disini saya gunakan variable untuk `base_url` utama pada rest server agar lebih efisien dalam penggunaanya. 

Selanjutnya pada fungsi `viewData()` kita panggil data dengan metode GET pada rest server dan memasukan hasil ke dalam state Pengurus pada code `setPengurus(response.data.pengurus)` . 


Agar fungsi viewData langsung ter load saat komponen di buka maka kita gunakan `useEffect([])`. Anda tentunya pernah melakukan pengambilan data, berlangganan data (subscription), atau secara manual mengubah DOM dari komponen React. Operasi-operasi seperti ini  disebut “efek samping (side effects)” (atau singkatnya “efek (effects)”) karena dapat mempengaruhi komponen lain dan tidak dapat dilakukan pada saat proses render.

Untuk me render hasil ke HTML digunakan fungsi map `Pengurus.map() => {}` untuk menampilkan hasilnya dalam HTML.

Jangan lupa kita sesuaikan **App.js** untuk routing component yang sudah dibuat

```javascript
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import NavBar from './components/NavBar';
import TampilData from './components/TampilData';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<TampilData />}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
```

untuk uji coba jalankan XAMPP dan server development aplikasi react anda, maka akan muncul tampilan dibawah ini

![tampil data](https://i.ibb.co/bWGJTJy/Selection-004.jpg)

## Aplikasi CRUD Tambah Data.
---

Selanjutnya kita akan membuat aplikasi tambah data, silahkan edit dan sesuaikan file **TampilData.js** untuk menambahkan modal form tambah data

```javascript
import {
  useEffect, useState
} from "react";

import axios from 'axios';

function TampilData() {
  const url = 'http://localhost/rest-api/';

  const [Pengurus,setPengurus] = useState([]);

  //state untuk masing-masing data
  const [Id,setId] = useState("");
  const [Nama,setNama] = useState("");
  const [Alamat,setAlamat] = useState("");
  const [Gender,setGender] = useState("L");
  const [Gaji,setGaji] = useState("");

  //untuk mengkosongkan form
  const clearData = () => {
    setId("");
    setNama("");
    setAlamat("");
    setGender("L");
    setGaji("");
  }

  const viewData = () => {
    axios
      .get(url+'tampil_data.php')
      .then(response => {
        setPengurus(response.data.pengurus);
    });
  }

  //fungsi tambah data
  const addData = () => {
    const formData = new URLSearchParams();
    formData.append('id',Id);
    formData.append('nama',Nama);
    formData.append('alamat',Alamat);
    formData.append('gender',Gender);
    formData.append('gaji',Gaji);
    axios
      .post(url+'tambah_data.php', formData)
      .then(response => {
        alert(response.data.pesan);
        //load lagi viewData untuk melihat perubahan
        viewData();
        //kosongkan form
        clearData();
    });

  }

  useEffect(() => {
    viewData();
  },[]);

  return (
    <div className="TampilData">
      <div className="row">
        <div className="col">
          <h2>CRUD Pengurus</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <button className="btn btn-success btn-lg" data-bs-toggle="modal" data-bs-target="#tambahModal">Tambah Data</button>
        </div>
        
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nama</th>
              <th scope="col">Alamat</th>
              <th scope="col">Gender</th>
              <th scope="col">Gaji</th>
              <th scope="col">Aksi</th>
            </tr>
          </thead>
          <tbody>
          { Pengurus.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.nama}</td>
              <td>{item.alamat}</td>
              <td>{item.gender}</td>
              <td>{item.gaji}</td>
              <td>
                <button className="btn btn-small btn-warning">Edit</button> |
                <button className="btn btn-small btn-danger">Delete</button>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>

      {/*modal tambah data*/}
       <div className="modal fade" id="tambahModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
         <div className="modal-dialog">
           <div className="modal-content">
             <div className="modal-header">
               <h5 className="modal-title" id="exampleModalLabel">Form Data</h5>
               <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
             </div>
             <div className="modal-body">
               <form>
                 <div className="mb-3">
                   <label className="form-label">ID</label>
                   <input type="text" className="form-control" onChange={(e) => setId(e.target.value)} />
                 </div>
                 <div className="mb-3">
                   <label className="form-label">Nama</label>
                   <input type="text" className="form-control" onChange={(e) => setNama(e.target.value)} />
                 </div>
                 <div className="mb-3">
                   <label className="form-label">Alamat</label>
                   <textarea className="form-control" rows="3" onChange={(e) => setAlamat(e.target.value)}></textarea>
                 </div>
                 <div className="mb-3">
                   <label className="form-label">Gender</label>
                   <select className="form-control" onChange={(e) => setGender(e.target.value)}>
                     <option value="L">Laki-laki</option>
                     <option value="P">Perempuan</option>
                   </select>
                 </div>
                 <div className="mb-3">
                   <label className="form-label">Gaji</label>
                   <input type="text" className="form-control" onChange={(e) => setGaji(e.target.value)} />
                 </div>
               </form>
             </div>
             <div className="modal-footer">
               <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={clearData}>Close</button>          
               <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={addData}>Save</button>
             </div>
           </div>
         </div>
       </div>
       {/*modal tambah data*/}

    </div>

  );
}

export default TampilData;
```

Untuk fungsi `addData()` digunakan untuk menambah data dalam rest api dengan metode POST. fungsi ini dipanggil pada tombol Save di code `<button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={addData}>Save</button>` pada form modal tambah data. 

Jika proses tambah data berhasil makan akan muncul pesan atau `alert()` dari rest server, kemudian kita panggil fungsi `viewData()` lagi untuk reload table serta fungsi `clearData()` untuk mengosongkan form.

Coba cek di browser maka hasilnya adalah sebagai berikut

![tambah data](https://i.ibb.co/FhGCdy2/Selection-005.jpg)

Coba masukan satu data dan amatilah hasilnya.


## Aplikasi CRUD Edit Data
---

Setelah itu kita akan membuat operasi edit atau update data. Silahkan sesuai file **TampilData.js** 

```javascript
import {
  useEffect, useState
} from "react";

import axios from 'axios';

function TampilData() {
  const url = 'http://localhost/rest-api/';

  const [Pengurus,setPengurus] = useState([]);
  const [Id,setId] = useState("");
  const [Nama,setNama] = useState("");
  const [Alamat,setAlamat] = useState("");
  const [Gender,setGender] = useState("L");
  const [Gaji,setGaji] = useState("");

  const clearData = () => {
    setId("");
    setNama("");
    setAlamat("");
    setGender("L");
    setGaji("");
  }

  const viewData = () => {
    axios
      .get(url+'tampil_data.php')
      .then(response => {
        setPengurus(response.data.pengurus);
    });
  }

  const addData = () => {
    const formData = new URLSearchParams();
    formData.append('id',Id);
    formData.append('nama',Nama);
    formData.append('alamat',Alamat);
    formData.append('gender',Gender);
    formData.append('gaji',Gaji);
    axios
      .post(url+'tambah_data.php', formData)
      .then(response => {
        alert(response.data.pesan);
        viewData();
        clearData();
    });

  }

  //untuk menampilkan data dalam form modal edit
  const editData = (data) => {
    setId(data.id);
    setNama(data.nama);
    setAlamat(data.alamat);
    setGender(data.gender);
    setGaji(data.gaji);
  }

  //untuk mengubah data dalam rest server
  const updateData = () => {
    const formData = new URLSearchParams();
    formData.append('id',Id);
    formData.append('nama',Nama);
    formData.append('alamat',Alamat);
    formData.append('gender',Gender);
    formData.append('gaji',Gaji);
    axios
      .post(url+'ubah_data.php', formData)
      .then(response => {
        alert(response.data.pesan);
        viewData();
        clearData();
    });
  }

  useEffect(() => {
    viewData();
  },[]);

  return (
    <div className="TampilData">
      <div className="row">
        <div className="col">
          <h2>CRUD Pengurus</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <button className="btn btn-success btn-lg" data-bs-toggle="modal" data-bs-target="#tambahModal">Tambah Data</button>
        </div>
        
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nama</th>
              <th scope="col">Alamat</th>
              <th scope="col">Gender</th>
              <th scope="col">Gaji</th>
              <th scope="col">Aksi</th>
            </tr>
          </thead>
          <tbody>
          { Pengurus.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.nama}</td>
              <td>{item.alamat}</td>
              <td>{item.gender}</td>
              <td>{item.gaji}</td>
              <td>
                <button className="btn btn-small btn-warning"  data-bs-toggle="modal" data-bs-target="#editModal" onClick={(e) => editData(item)}>Edit</button> |
                <button className="btn btn-small btn-danger">Delete</button>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
      {/*modal tambah data*/}
       <div className="modal fade" id="tambahModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
         <div className="modal-dialog">
           <div className="modal-content">
             <div className="modal-header">
               <h5 className="modal-title" id="exampleModalLabel">Form Data</h5>
               <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
             </div>
             <div className="modal-body">
               <form>
                 <div className="mb-3">
                   <label className="form-label">ID</label>
                   <input type="text" className="form-control" onChange={(e) => setId(e.target.value)} />
                 </div>
                 <div className="mb-3">
                   <label className="form-label">Nama</label>
                   <input type="text" className="form-control" onChange={(e) => setNama(e.target.value)} />
                 </div>
                 <div className="mb-3">
                   <label className="form-label">Alamat</label>
                   <textarea className="form-control" rows="3" onChange={(e) => setAlamat(e.target.value)}></textarea>
                 </div>
                 <div className="mb-3">
                   <label className="form-label">Gender</label>
                   <select className="form-control" onChange={(e) => setGender(e.target.value)}>
                     <option value="L">Laki-laki</option>
                     <option value="P">Perempuan</option>
                   </select>
                 </div>
                 <div className="mb-3">
                   <label className="form-label">Gaji</label>
                   <input type="text" className="form-control" onChange={(e) => setGaji(e.target.value)} />
                 </div>
               </form>
             </div>
             <div className="modal-footer">
               <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={clearData}>Close</button>          
               <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={addData}>Save</button>
             </div>
           </div>
         </div>
       </div>
       {/*modal tambah data*/}

       {/*modal edit data*/}
       <div className="modal fade" id="editModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
         <div className="modal-dialog">
           <div className="modal-content">
             <div className="modal-header">
               <h5 className="modal-title" id="exampleModalLabel">Edit Data</h5>
               <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
             </div>
             <div className="modal-body">
               <form>
                 <div className="mb-3">
                   <label className="form-label">ID</label>
                   <input type="text" className="form-control" readonly="readonly" value={Id} onChange={(e) => setId(e.target.value)} />
                 </div>
                 <div className="mb-3">
                   <label className="form-label">Nama</label>
                   <input type="text" className="form-control" value={Nama} onChange={(e) => setNama(e.target.value)} />
                 </div>
                 <div className="mb-3">
                   <label className="form-label">Alamat</label>
                   <textarea className="form-control" rows="3" value={Alamat} onChange={(e) => setAlamat(e.target.value)}></textarea>
                 </div>
                 <div className="mb-3">
                   <label className="form-label">Gender</label>
                   <select className="form-control" value={Gender} onChange={(e) => setGender(e.target.value)}>
                     <option value="L">Laki-laki</option>
                     <option value="P">Perempuan</option>
                   </select>
                 </div>
                 <div className="mb-3">
                   <label className="form-label">Gaji</label>
                   <input type="text" className="form-control" value={Gaji} onChange={(e) => setGaji(e.target.value)} />
                 </div>
               </form>
             </div>
             <div className="modal-footer">
               <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>          
               <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={updateData}>Update</button>
             </div>
           </div>
         </div>
       </div>
       {/*modal edit data*/}
    </div>

  );
}

export default TampilData;
```

Kita tambahkan HTML untuk modal edit data, tepat dibawahnya modal Tambah data. Kemudian tambahkan fungsi `editData(data)` untuk menampilkan data yang akan diedit dalam form edit. Dimana fungsi ini akan mengambil parameter saat tombol Edit diklik `<button className="btn btn-small btn-warning"  data-bs-toggle="modal" data-bs-target="#editModal" onClick={(e) => editData(item)}>Edit</button>`. 

Selanjutnya masing-masing data akan disimpan dalam state dan ditampilkan ke masing-masing elemen form dengan code `value={}`. Untuk fungsi `updateData()` digunakan untuk mengirim data pada rest server dengan bantuan library axios metode POST.

Jika proses update berhasil maka akan memunculkan `alert(response.data.pesan)` dari rest server dan otomatis data table akan direload ulang dengan memanggil fungsi `viewData()`.

Coba jalankan aplikasi anda maka akan muncul seperti dibawah ini

![edit data](https://i.ibb.co/VW01hmy/Selection-006.jpg)

Cobalah klik edit salah satu dan lakukan perubahan, kemudian amatilah hasilnya.

## Aplikasi CRUD Hapus Data
---

Untuk membuat operasi hapus data kita tambahkan code pada **TampilData.js**

```javascript
import {
  useEffect, useState
} from "react";

import axios from 'axios';

function TampilData() {
  const url = 'http://localhost/rest-api/';

  const [Pengurus,setPengurus] = useState([]);
  const [Id,setId] = useState("");
  const [Nama,setNama] = useState("");
  const [Alamat,setAlamat] = useState("");
  const [Gender,setGender] = useState("L");
  const [Gaji,setGaji] = useState("");

  const clearData = () => {
    setId("");
    setNama("");
    setAlamat("");
    setGender("L");
    setGaji("");
  }

  const viewData = () => {
    axios
      .get(url+'tampil_data.php')
      .then(response => {
        setPengurus(response.data.pengurus);
    });
  }

  const addData = () => {
    const formData = new URLSearchParams();
    formData.append('id',Id);
    formData.append('nama',Nama);
    formData.append('alamat',Alamat);
    formData.append('gender',Gender);
    formData.append('gaji',Gaji);
    axios
      .post(url+'tambah_data.php', formData)
      .then(response => {
        alert(response.data.pesan);
        viewData();
        clearData();
    });

  }

  const editData = (data) => {
    setId(data.id);
    setNama(data.nama);
    setAlamat(data.alamat);
    setGender(data.gender);
    setGaji(data.gaji);
  }

  const updateData = () => {
    const formData = new URLSearchParams();
    formData.append('id',Id);
    formData.append('nama',Nama);
    formData.append('alamat',Alamat);
    formData.append('gender',Gender);
    formData.append('gaji',Gaji);
    axios
      .post(url+'ubah_data.php', formData)
      .then(response => {
        alert(response.data.pesan);
        viewData();
        clearData();
    });
  }

  // fungsi untuk hapus data
  const deleteData = (data) => {
    axios
      .get(url+'hapus_data.php?id='+data)
      .then(response => {
        alert(response.data.pesan);
        viewData();
    });   
  }

  useEffect(() => {
    viewData();
  },[]);

  return (
    <div className="TampilData">
      <div className="row">
        <div className="col">
          <h2>CRUD Pengurus</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <button className="btn btn-success btn-lg" data-bs-toggle="modal" data-bs-target="#tambahModal">Tambah Data</button>
        </div>
        
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nama</th>
              <th scope="col">Alamat</th>
              <th scope="col">Gender</th>
              <th scope="col">Gaji</th>
              <th scope="col">Aksi</th>
            </tr>
          </thead>
          <tbody>
          { Pengurus.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.nama}</td>
              <td>{item.alamat}</td>
              <td>{item.gender}</td>
              <td>{item.gaji}</td>
              <td>
                <button className="btn btn-small btn-warning"  data-bs-toggle="modal" data-bs-target="#editModal" onClick={(e) => editData(item)}>Edit</button> |
                <button className="btn btn-small btn-danger" onClick={(e) => deleteData(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
      {/*modal tambah data*/}
       <div className="modal fade" id="tambahModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
         <div className="modal-dialog">
           <div className="modal-content">
             <div className="modal-header">
               <h5 className="modal-title" id="exampleModalLabel">Form Data</h5>
               <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
             </div>
             <div className="modal-body">
               <form>
                 <div className="mb-3">
                   <label className="form-label">ID</label>
                   <input type="text" className="form-control" onChange={(e) => setId(e.target.value)} />
                 </div>
                 <div className="mb-3">
                   <label className="form-label">Nama</label>
                   <input type="text" className="form-control" onChange={(e) => setNama(e.target.value)} />
                 </div>
                 <div className="mb-3">
                   <label className="form-label">Alamat</label>
                   <textarea className="form-control" rows="3" onChange={(e) => setAlamat(e.target.value)}></textarea>
                 </div>
                 <div className="mb-3">
                   <label className="form-label">Gender</label>
                   <select className="form-control" onChange={(e) => setGender(e.target.value)}>
                     <option value="L">Laki-laki</option>
                     <option value="P">Perempuan</option>
                   </select>
                 </div>
                 <div className="mb-3">
                   <label className="form-label">Gaji</label>
                   <input type="text" className="form-control" onChange={(e) => setGaji(e.target.value)} />
                 </div>
               </form>
             </div>
             <div className="modal-footer">
               <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={clearData}>Close</button>          
               <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={addData}>Save</button>
             </div>
           </div>
         </div>
       </div>
       {/*modal tambah data*/}

       {/*modal edit data*/}
       <div className="modal fade" id="editModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
         <div className="modal-dialog">
           <div className="modal-content">
             <div className="modal-header">
               <h5 className="modal-title" id="exampleModalLabel">Edit Data</h5>
               <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
             </div>
             <div className="modal-body">
               <form>
                 <div className="mb-3">
                   <label className="form-label">ID</label>
                   <input type="text" className="form-control" readonly="readonly" value={Id} onChange={(e) => setId(e.target.value)} />
                 </div>
                 <div className="mb-3">
                   <label className="form-label">Nama</label>
                   <input type="text" className="form-control" value={Nama} onChange={(e) => setNama(e.target.value)} />
                 </div>
                 <div className="mb-3">
                   <label className="form-label">Alamat</label>
                   <textarea className="form-control" rows="3" value={Alamat} onChange={(e) => setAlamat(e.target.value)}></textarea>
                 </div>
                 <div className="mb-3">
                   <label className="form-label">Gender</label>
                   <select className="form-control" value={Gender} onChange={(e) => setGender(e.target.value)}>
                     <option value="L">Laki-laki</option>
                     <option value="P">Perempuan</option>
                   </select>
                 </div>
                 <div className="mb-3">
                   <label className="form-label">Gaji</label>
                   <input type="text" className="form-control" value={Gaji} onChange={(e) => setGaji(e.target.value)} />
                 </div>
               </form>
             </div>
             <div className="modal-footer">
               <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>          
               <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={updateData}>Update</button>
             </div>
           </div>
         </div>
       </div>
       {/*modal edit data*/}
    </div>

  );
}

export default TampilData;
```

sama halnya dengan operasi edit data. Kode `<button className="btn btn-small btn-danger" onClick={(e) => deleteData(item.id)}>Delete</button>` akan memanggil fungsi `deleteData()` dimana akan menerima parameter data id yang akan dihapus. Kemudian dengan bantuan axios akan dikirimkan ke rest server dengan metode GET untuk di eksekusi.

Sampai disini kita sudah bisa membuat aplikasi rest client full CRUD dengan menggunakan ReactJS dengan Rest Server PHP dan MySQL.



## Referensi
---

- [https://www.niagahoster.co.id/blog/react-js-adalah/](https://www.niagahoster.co.id/blog/react-js-adalah/)
- [https://www.petanikode.com/reactjs-komponen/](https://www.petanikode.com/reactjs-komponen/)
- [https://afrijaldzuhri.com/belajar-routing-dalam-react/](https://afrijaldzuhri.com/belajar-routing-dalam-react/)
- [https://blog.logrocket.com/using-bootstrap-with-react-tutorial-with-examples/](https://blog.logrocket.com/using-bootstrap-with-react-tutorial-with-examples/)
- [https://www.digitalocean.com/community/tutorials/react-axios-react-id](https://www.digitalocean.com/community/tutorials/react-axios-react-id)
- [https://id.reactjs.org/docs/hooks-overview.html](https://id.reactjs.org/docs/hooks-overview.html)
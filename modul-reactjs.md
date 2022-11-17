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
3. Struktur Folder
4. Props dan Component
5. Routing 
6. Layouting dengan CSS
7. Aplikasi CRUD Tampil Data
8. Aplikasi CRUD Tambah Data
9. Aplikasi CRUD Edit Data
10. Aplikasi CRUD Hapus Data
11. Membuat Auth
12. Tentang Penyusun

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






## Referensi
---

- [https://www.niagahoster.co.id/blog/react-js-adalah/](https://www.niagahoster.co.id/blog/react-js-adalah/)

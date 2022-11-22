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
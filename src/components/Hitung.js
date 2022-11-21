import React, {useState} from "react";

function Hitung() {
    //membuat state
    const [getangka1,setangka1] = useState(0);
    const [getangka2,setangka2] = useState(0);
    const [gethasil,sethasil] = useState(0);

    //fungsi penjumlahan
    const Tambah = () => {
        sethasil=getangka1+getangka2;
    }

    return (
      <div className="Hitung">
        
      </div>
    );
  }
  
export default Hitung;
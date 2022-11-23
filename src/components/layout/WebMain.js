import React from "react";//import routing library
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

//import komponen penyusun lainnya
import Navbar from "./NavBar";
import Content from "./Content";
import Header from "./Header";

function WebMain() {

    return (
      <div className="WebMain">
        <Header />
        <Navbar />
        <Routes>
            <Route path="/" element={<Content />}/>
        </Routes>
      </div>
    );
  }
  
export default WebMain;
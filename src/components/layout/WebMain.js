import React from "react";//import routing library
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

//import komponen penyusun lainnya
import Navbar from "./NavBar";
import Content from "./Content";
import Header from "./Header";
import About from "./About";

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
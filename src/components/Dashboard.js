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
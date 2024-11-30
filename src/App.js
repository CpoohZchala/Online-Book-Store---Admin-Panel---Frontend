import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import AddBooks from './pages/AddBooks';
import Books from './pages/Books';
import Home from './pages/Home';
import React from "react";

import {
  BrowserRouter as Router,Routes,Route,} from "react-router-dom";
function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route exact path ="/" element={<Home/>}/>
        <Route path ="/books" element={<Books/>}/>
        <Route path ="/addBooks" element={<AddBooks/>}/>
      </Routes>
      <Footer/>
    </Router>
    
  );
}

export default App;

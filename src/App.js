import React, {useEffect} from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Playlist from './components/Playlist';
import {Routes, Route} from 'react-router-dom';


function App() {

   useEffect(()=> {
   window.alert("Greetings! I wanted to let you know that my website is currently under construction and undergoing improvements.")
  }, []);


  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} /> 
      <Route path='/playlist' element={<Playlist />} />
    </Routes>
     <Footer />
    </>
  );
}

export default App;

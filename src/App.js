import React from 'react';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Aboutme from "./components/Aboutme";
import Contact from "./components/Contact";
import Crousel from "./components/Crousel";

function App() {
  return (
   <div>
<Header></Header>
<Aboutme></Aboutme>
<Crousel></Crousel>
<Contact></Contact>
<Footer></Footer>
   </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Aboutme from "./components/Aboutme";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
   <div>
<Header></Header>
<Aboutme></Aboutme>
<Portfolio></Portfolio>
<Contact></Contact>
<Footer></Footer>
   </div>
  );
}

export default App;

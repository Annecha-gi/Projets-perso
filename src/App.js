import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import ProjectSlider from './components/ProjectSlider';
import Skills from './components/Skills';
import Doublebox from './components/Doublebox';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <ProjectSlider />
      <Doublebox />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;

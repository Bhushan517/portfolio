import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';

function App() {
  return (
    <div className="App bg-white dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <Header />
      <main className="bg-white dark:bg-gray-900">
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Resume />
      </main>
      <Footer />
    </div>
  );
}

export default App;

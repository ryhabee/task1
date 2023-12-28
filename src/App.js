import React from 'react';
import Header from './components/header';
import Course from './components/course';
import Contact from './components/contact';
import Footer from './components/footer';
import MainContent from './components/main';

function App() {
  return (
    <div>
      <Header />
      <Course />
      <MainContent/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
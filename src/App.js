import React from 'react';
import './App.css';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Contact name="Peter Palmer" avatar="https://randomuser.me/api/portraits/men/85.jpg" online />
      <Contact name="Bessie Long" avatar="https://randomuser.me/api/portraits/women/27.jpg" />
      <Contact name="Mae Alvarez" avatar="https://randomuser.me/api/portraits/women/68.jpg" online />
    </div>
  );
}

export default App;

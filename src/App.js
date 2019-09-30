import React from 'react';
import './App.css';
import Header from './components/Header';
import Title from './components/test/Title';
import Hook from './components/test/Hook';

function App() {
  return (
    <>
      <Header />
      <Title title="Titulo 1" />
      <Hook />
    </>
  );
}

export default App;

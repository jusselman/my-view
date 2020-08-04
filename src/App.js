import React, { useState } from 'react';
import Logo from './components/Logo/Logo';
import Header from './components/Header/Header';
import Modal from './components/Modal/Modal';
import UploadForm from './components/UploadForm/UploadForm';
import ImgGrid from './components/ImgGrid/ImgGrid';
import './App.css';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <Logo />
      <Header />
      <UploadForm />
      <ImgGrid setSelectedImg={setSelectedImg} />
      {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
    </div>
  );
}

export default App;

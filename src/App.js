import React from 'react';
import './App.scss';
import Gallery from './Gallery';
import AddNewImage from './AddNewImage';


const App = () => {
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Image Gallery</h1>
      <AddNewImage />
      <Gallery />
    </>
  );
}

export default App;

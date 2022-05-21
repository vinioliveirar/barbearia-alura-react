import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Produtos from './components/Produtos/Produtos';




function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/produtos' element={<Produtos />} />
        </Routes> 
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

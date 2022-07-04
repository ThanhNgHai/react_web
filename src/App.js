import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Korea from './components/pages/Korea';
import China from './components/pages/China';
import Japan from './components/pages/Japan';
import Thailand from './components/pages/Thailand';
import UsUk from './components/pages/UsUk';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/home' element={<Home/>} />
          <Route path='/korea' element={<Korea/>} />
          <Route path='/us-uk' element={<UsUk/>} />
          <Route path='/china' element={<China/>} />
          <Route path='/japan' element={<Japan/>} />
          <Route path='/thailand' element={<Thailand/>} />
          <Route path='/sign-up' element={<SignUp/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;